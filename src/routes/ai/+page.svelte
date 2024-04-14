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
Title: "The Gourmet Delight: A Garden-Fresh Pizza" Ingredients for Dough (makes two 12-inch pizzas):
1. 3 and 1/2 to 4 cups (420 to 500g) all-purpose flour, plus more for dusting 2. 2 teaspoons sugar 3.
2 and 1/4 teaspoons instant or rapid-rise yeast (7 g) 4. Salt, to taste 5. Extra virgin olive oil, as
needed + for brushing the pan and bowl 6. Water, room temperature - about 1 and a half cups (360 ml)
but adjust if necessary based on consistency of dough during mixing process). 7. Cornmeal or semolina
flour, as needed for dusting pizza peel or baking sheet before adding sauce &amp; toppings.) 8. Optional
herbs such as basil or rosemary – finely chopped for garnishing after cooking. 9 Cooking Oil Spray OR
additional olive oil spray - optional for greasing pizza pan instead of cornmeal/semolina flour if using
store bought prebaked crusts like Boboli® Thin Crusts in place of homemade dough.)* Note that using
store bought prebaked crust is not recommended by our team at Chef's Table but still an option! :) *[For
those who prefer convenience]*. This recipe will mainly focus on making fresh pizza from scratch!) **Toppings:**
For a garden medley twist with classic flavors : • Tomato sauce(homemade marinara sauce can be used)-
around one cup depending upon your desired layer thickness • Fresh Mozzarella cheese , sliced into thin
rounds– around three hundred grams • Assorted vegetables***: ⃝ Sliced bell peppers ⃝ Zucchini slices
⃝ Cherry tomatoes ⃝ Red Onion \*Sauté these veggies slightly prior to assembly if preferred\ \\*OR you
could try roasted eggplant,\* artichoke hearts,\* sun dried tomatoes\*, mushrooms etc.\*/ \\*\*(Don’t
hesitate experimenting!\)*\\ Additionally**: Roasted Garlic Cloves -
