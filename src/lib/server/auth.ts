<<<<<<< HEAD
import { Lucia, TimeSpan, type Adapter } from 'lucia';
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import db from './db';

//put your authentication logic here
//example using lucia auth
const adapter: Adapter = new PrismaAdapter(db.session, db.user);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},
	sessionExpiresIn: new TimeSpan(1, 'w') // Session expires in 1 week
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	id: string;
}
=======
//put your authentication logic here
//recommended to use lucia auth
>>>>>>> main
