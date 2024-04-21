<script lang="ts">
	import { Cloud, Skull } from 'lucide-svelte';

	export let data;

	const carbonEmission = {
		A: 'Negligible emissions',
		B: 'Low emissions',
		C: 'Moderate emissions',
		D: 'Significant emissions',
		E: 'High emissions',
		F: 'Very high emissions',
		G: 'Extreme emissions'
	};
</script>

<div class="px-4 py-6">
	{#await data.recipe then recipe}
		<!-- {JSON.stringify(recipe.recipe.images)} -->
		<div class="flex items-start justify-center gap-10">
			<img src={recipe.recipe.image} class="aspect-[12/20] w-80 object-cover" alt="" />
			<div class="flex flex-col gap-2">
				<p class="text-7xl">{recipe.recipe.label}</p>
				<div class="flex gap-2">
					<p class="w-fit rounded-sm border px-2 py-1 text-xs">{recipe.recipe.cuisineType}</p>
					<p class="w-fit rounded-sm border px-2 py-1 text-xs">{recipe.recipe.mealType}</p>
					<p class="w-fit rounded-sm border px-2 py-1 text-xs">
						{recipe.recipe.totalTime ?? 'N/A'} min
					</p>
					<p class="w-fit rounded-sm border px-2 py-1 text-xs">{recipe.recipe.dishType}</p>
				</div>
				<div class="flex items-center gap-2">
					<Cloud />
					<p>
						This recipe has {carbonEmission[recipe?.recipe?.co2EmissionsClass] ?? 'N/A'} carbom emission
					</p>
				</div>
				<p>{recipe.recipe.dietLabels}</p>
				<div class="flex max-w-[50ch] flex-col">
					<p>Health Labels</p>
					<div class="flex flex-wrap gap-x-2 gap-y-1">
						{#each recipe.recipe.healthLabels ?? '' as healthLabel}<p class="border px-1 text-xs">
								{healthLabel}
							</p>{/each}
					</div>
				</div>
				<div>
					<p class="flex items-center gap-1 text-lg">
						<Skull />
						Caution
					</p>
					<p class="px-8">
						- {recipe.recipe.cautions ?? 'N/A'}
					</p>
				</div>
				<div class="flex flex-col">
					<p class="text-xl">Nuritions per serving</p>
					<div class="flex gap-4">
						<div class="rounded-xl border px-3 py-2">
							<p class="text-lg">{recipe.recipe.calories.toFixed(1) ?? 'N/A'}</p>
							<p>Calories</p>
						</div>
						<div class="rounded-xl border px-3 py-2">
							<p class="text-lg">
								{recipe.recipe.totalNutrients.FIBTG.quantity.toFixed(1) ?? 'N/A'}
								{recipe.recipe.totalNutrients.FIBTG.unit ?? ''}
							</p>
							<p>Fiber</p>
						</div>
						<div class="rounded-xl border px-3 py-2">
							<p class="text-lg">
								{recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(1) ?? 'N/A'}
								{recipe.recipe.totalNutrients.PROCNT.unit ?? ''}
							</p>
							<p>Protien</p>
						</div>
						<div class="rounded-xl border px-3 py-2">
							<p class="text-lg">
								{recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(1) ?? 'N/A'}
								{recipe.recipe.totalNutrients.CHOCDF.unit ?? ''}
							</p>
							<p>Carbs</p>
						</div>
						<div class="rounded-xl border px-3 py-2">
							<p class="text-lg">
								{recipe.recipe.totalNutrients.FAT.quantity.toFixed(1) ?? 'N/A'}
								{recipe.recipe.totalNutrients.FAT.unit ?? ''}
							</p>
							<p>Fats</p>
						</div>
						<div class="rounded-xl border px-3 py-2">
							<p class="text-lg">
								{recipe.recipe.totalNutrients.SUGAR.quantity.toFixed(1) ?? 'N/A'}
								{recipe.recipe.totalNutrients.SUGAR.unit ?? ''}
							</p>
							<p>Sugar</p>
						</div>
					</div>
				</div>
				<div class="space-y-4">
					<p class="text-4xl font-bold underline">Ingredients:-</p>
					<div class="space-y-2 rounded-md border px-4 py-4">
						{#each recipe.recipe.ingredients as ingredient}
							<div class="flex items-center gap-2">
								<img src={ingredient.image} alt="" class="w-12 rounded-lg" />
								<p>{ingredient.text}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/await}
</div>
