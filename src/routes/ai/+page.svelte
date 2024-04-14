<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	let prompt: string;
	let recipe: string;
	const getRecipe = async () => {
		recipe = 'loading...';
		const res = await fetch('/api/aiRecipe', { body: JSON.stringify(prompt), method: 'POST' });
		recipe = await res.text();
	};
</script>

<div class="flex flex-col items-center justify-center gap-4 px-4">
	<p class="text-center text-4xl">Generate Recipes With AI</p>
	<div class="flex w-fit items-center justify-center">
		<Input bind:value={prompt} placeholder="Make me a pizza" />
		<Button
			type="button"
			on:click={() => {
				getRecipe();
			}}>Generate Recipe</Button
		>
	</div>
	<div class="max-w-[150ch] text-center">
		{@html recipe ?? ''}
	</div>
</div>
