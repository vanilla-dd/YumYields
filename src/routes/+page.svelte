<script lang="ts">
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={() => signIn('github')}>signin</button>
<button on:click={() => signOut()}>signout</button>
{JSON.stringify($page.data.session?.user)}
