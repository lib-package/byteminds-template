import db from '$lib/server/db';
import { lucia } from '$lib/server/auth';
import type { Handle } from '@sveltejs/kit';

//put your handler here
export const handle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get(lucia.sessionCookieName);
	if (!sessionId) {
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}

	const { session, user } = await lucia.validateSession(sessionId);
	if (session && session.fresh) {
		const sessionCokie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCokie.name, sessionCokie.value, {
			path: '.',
			...sessionCokie.attributes
		});
	}

	if (!session) {
		const sessionCokie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCokie.name, sessionCokie.value, {
			path: '.',
			...sessionCokie.attributes
		});
	}

	event.locals.user = user;
	event.locals.session = session;

	return resolve(event);
};

// Ensure PrismaClient disconnect on app shutdown
process.on('beforeExit', async () => {
	await db.$disconnect();
});

process.on('SIGINT', async () => {
	await db.$disconnect();
	process.exit(0);
});

process.on('SIGTERM', async () => {
	await db.$disconnect();
	process.exit(0);
});
