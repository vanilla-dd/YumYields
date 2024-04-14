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

<form method="POST" use:enhance>
	<Form.Field {form} name="searchQuery">
		<Form.Control let:attrs>
			<Form.Label>Search For Recipe</Form.Label>
			<Input {...attrs} bind:value={$formData.searchQuery} />
		</Form.Control>
		<Form.Description>Enter what you want to make.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</form>
