<script lang="ts">
	import RecipeSearch from '$lib/forms/RecipeSearch.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';

	export let data;
</script>

<RecipeSearch data={data.form} />
{#await data.recipes}
	<div class="flex flex-wrap items-stretch justify-center gap-4">
		{#each Array(8) as _}
			<div class="flex w-80 flex-col gap-4 border px-4 py-4">
				<Skeleton class="aspect-video w-full object-cover" />
				<Skeleton class="h-6 w-[30ch]" />
			</div>
		{/each}
	</div>
{:then recipes}
	<div class="flex flex-wrap items-stretch justify-center gap-4">
		{#each recipes.hits as recipe}
			<a href="/recipe/${recipe.recipe.id}" class="flex w-80 flex-col gap-4 border px-4 py-4">
				<img src={recipe.recipe.image} alt="" class="aspect-video w-full object-cover" />
				<p class="max-w-[30ch]">{recipe.recipe.label}</p>
				<!-- {JSON.stringify(recipe)} -->
			</a>
		{/each}
	</div>
{/await}
