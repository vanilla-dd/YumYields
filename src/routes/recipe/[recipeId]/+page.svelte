<script lang="ts">
	export let data;
</script>

<div class="px-4 py-6">
	{#await data.recipe then recipe}
		<!-- {JSON.stringify(recipe.recipe.images)} -->
		<div class="flex justify-center gap-10">
			<img src={recipe.recipe.image} class="aspect-[12/20] w-80 object-cover" alt="" />
			<div>
				<p class="text-7xl">{recipe.recipe.label}</p>
				<p>{recipe.recipe.tags}</p>
				<p>{recipe.recipe.dietLabels}</p>
				<p>{recipe.recipe.healthLabels}</p>
				<p>{recipe.recipe.cautions}</p>
				<p>{recipe.recipe.totalTime}</p>
				<p>{recipe.recipe.cuisineType}</p>
				<p>{recipe.recipe.mealType}</p>
				<p>{recipe.recipe.dishType}</p>
				<p>{recipe.recipe.totalCO2Emissions}</p>
				<p>{recipe.recipe.co2EmissionsClass}</p>
				<div>
					<p>Nuritions per serving</p>
					<div><p>Calories</p></div>
					<div><p>Fiber</p></div>
					<div><p>Protien</p></div>
					<div><p>Carbs</p></div>
					<div><p>Fats</p></div>
					<div><p>Sugar</p></div>
				</div>
			</div>
		</div>
	{/await}
</div>
