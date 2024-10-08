import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
	try {
		await prisma.user.upsert({
			where: { id: '1' },
			update: {},
			create: { id: '1', name: 'user', email: 'test@mail.net' }
		});
	} catch (e) {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
};

main();
