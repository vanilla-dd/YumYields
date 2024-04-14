<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	let prompt: string;
	let recipe: string;
	const getRecipe = async () => {
		const res = await fetch('/api/aiRecipe', { body: JSON.stringify(prompt), method: 'POST' });
		recipe = await res.text();
	};
</script>

<Input bind:value={prompt} />
<Button
	type="button"
	on:click={() => {
		getRecipe();
	}}>Generate Recipe</Button
>

{#if recipe}
	{recipe}
{:else}
	Try searching for something
{/if}
