import db from '$lib/server/db';
import type { User } from '@prisma/client';

export const createUser = async (user: Omit<User, 'createdAt' | 'updatedAt'>) => {
<<<<<<< HEAD
	return await db.user.create({ data: user, select: { id: true, name: true, email: true } });
=======
	return await db.user.create({ data: user, select: { id: true, username: true, password: true } });
>>>>>>> main
};

export const getAllUsers = async () => {
	return await db.user.findMany({
<<<<<<< HEAD
		select: { id: true, name: true, email: true, createdAt: true, updatedAt: true }
=======
		select: { id: true, username: true, createdAt: true, updatedAt: true }
>>>>>>> main
	});
};
