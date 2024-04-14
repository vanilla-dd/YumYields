import { searchSchema, type RecipeResponse } from '$lib/schema';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';
import { API_APP_ID, API_APP_KEY, API_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const getRecipes = async () => {
		const res = await event.fetch(
			`${API_URL}&q=${event.url.searchParams.get('q')}&app_id=${API_APP_ID}&app_key=${API_APP_KEY}`
		);
		return await res.json();
	};
	return {
		form: await superValidate(zod(searchSchema)),
		recipes: getRecipes()
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(searchSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		if (form.valid && form.data.searchQuery) {
			throw redirect(301, `/recipe?q=${form.data.searchQuery}`);
		}
		return {
			form
		};
	}
};
