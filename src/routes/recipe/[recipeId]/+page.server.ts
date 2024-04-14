import { API_APP_ID, API_APP_KEY, API_FIELDS, API_RECIPE_URL } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const recipeId = params.recipeId;
	const recipe = async () => {
		const res = await fetch(
			`${API_RECIPE_URL}/${recipeId}?type=public&app_id=${API_APP_ID}&app_key=${API_APP_KEY}&${API_FIELDS}`
		);
		return await res.json();
	};
	return { recipe: recipe() };
};
