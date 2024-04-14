<script lang="ts">
	import RecipeSearch from '$lib/forms/RecipeSearch.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';

	export let data;
</script>

<main class="mt-10 flex flex-col gap-4 px-4">
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
				<div class="flex w-80 flex-col justify-between border p-2 lg:p-4">
					<a
						href="/recipe/{recipe.recipe.uri.split('_')[1]}"
						class="flex flex-col gap-1 hover:underline md:gap-2"
					>
						<img src={recipe.recipe.image} alt="" class="aspect-video w-full object-cover" />
						<p class="max-w-[30ch] font-bold">{recipe.recipe.label}</p>
					</a>
					<div class="flex gap-2 text-xs capitalize">
						<p class="flex items-center gap-1 overflow-hidden border px-1 py-1">
							<img src="/flag.svg" alt="" class="w-4" />
							{recipe.recipe.cuisineType}
						</p>
						<p class="flex items-center gap-1 overflow-hidden border px-1 py-1">
							<img src="/meal.svg" alt="" class="w-4" />
							{recipe.recipe.mealType}
						</p>
						<p class="flex items-center gap-1 overflow-hidden border px-1 py-1">
							<img src="/dish.svg" alt="" class="w-4" />
							{recipe.recipe.dishType}
						</p>
					</div>
				</div>
			{/each}
		</div>
	{/await}
</main>
