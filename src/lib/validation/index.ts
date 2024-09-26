import { z } from 'zod';

//form validation here

export const sampleFormSchema = z.object({ name: z.string(), email: z.string().email() });
