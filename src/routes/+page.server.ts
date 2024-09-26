import type { PageServerLoad } from './$types';
import { superValidate, message } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { generateId } from 'lucia';
import * as ZodValidation from '$lib/validation';
import * as UserService from '$lib/server/services/user.service';

export const load = (async () => {
	return {
		basicForm: await superValidate(zod(ZodValidation.sampleFormSchema))
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const basicForm = await superValidate(request, zod(ZodValidation.sampleFormSchema));

		if (!basicForm.valid) {
			return fail(400, { basicForm });
		}

		await UserService.createUser({
			id: generateId(15),
			name: basicForm.data.name,
			email: basicForm.data.email
		});

		return message(basicForm, 'Successfuly sent to server');
	}
};
