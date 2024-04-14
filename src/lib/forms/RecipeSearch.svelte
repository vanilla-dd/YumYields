<script lang="ts">
	import { page } from '$app/stores';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { searchSchema, type SearchSchema } from '$lib/schema';
	import { superForm, type Infer } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import type { SuperValidated } from 'sveltekit-superforms/server';

	export let data: SuperValidated<Infer<SearchSchema>>;
	const form = superForm(data, {
		validators: zodClient(searchSchema),
		multipleSubmits: 'prevent',
		resetForm: false,
		onSubmit({ cancel, formData }) {
			const searchQuery = Object.fromEntries(formData).searchQuery;
			if ($page.url.searchParams.get('q') === searchQuery) {
				cancel();
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance class="flex items-center justify-center text-center">
	<Form.Field {form} name="searchQuery">
		<Form.Control let:attrs>
			<Form.Label class="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
				<span class="relative">
					Search
					<svg
						class="absolute -bottom-4 left-0 -z-50 text-yellow-400"
						viewBox="0 0 146 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 22.7391C3.2493 18.6212 9.36901 3.15474 13.1781 13.8771C13.5772 15.0005 14.5729 21.0983 15.773 21.2495C16.8445 21.3844 18.9903 7.78201 22.1436 5.98981C26.938 3.26488 28.4723 10.151 30.0999 13.0396C35.0639 21.8494 33.2842 15.9415 35.8594 9.90254C38.3383 4.0895 41.493 12.3267 42.889 14.4125C46.0529 19.1395 46.437 9.45775 49.1634 6.60421C51.8321 3.81116 54.3934 5.2678 55.9596 8.11779C59.2847 14.1687 59.9155 15.1943 62.2752 7.79515C65.2247 -1.45377 68.0072 10.2381 70.3173 13.4171C73.7248 18.1065 73.9382 1.87789 77.8068 2.98317C78.9914 3.32163 84.5475 17.5554 86.2093 13.9697C89.5418 6.77907 88.7822 9.75336 92.3498 16.1423C96.5607 23.6832 98.8714 6.9014 101.109 5.39262C103.359 3.87582 104.814 19.0214 109.258 8.66009C114.387 -3.29835 113.063 3.08672 118.261 10.2046C122.705 16.2905 123.024 -5.82656 127.697 3.19256C132.875 13.1865 134.911 9.78693 144.275 11.4333"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</span>
				For Recipes.
			</Form.Label>
			<div class="relative pt-4">
				<Input
					{...attrs}
					bind:value={$formData.searchQuery}
					placeholder="Vegan Croissant"
					class="font-demibold text-base lg:h-12 lg:text-xl"
				/>
				<Form.Button class="absolute right-1 top-4 lg:top-5 lg:w-20">Submit</Form.Button>
			</div>
		</Form.Control>
		<Form.FieldErrors class="text-start" />
	</Form.Field>
</form>
