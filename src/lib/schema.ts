import { z } from 'zod';

export const searchSchema = z.object({
	searchQuery: z.string().min(2, { message: "Can't be less than 3 character." }).max(50).trim()
});

export type SearchSchema = typeof searchSchema;
