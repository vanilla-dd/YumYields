<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { signIn, signOut } from '@auth/sveltekit/client';
</script>

<div class="px-6 py-4">
	{#if $page.data.session?.user}
		<div class="flex flex-col items-start">
			<img src={$page.data.session?.user?.image} alt="" class="w-48" />
			<p class="text-2xl font-bold">{$page.data.session.user.name}</p>
			<p class="text-xs">{$page.data.session.user.email}</p>
			<Button
				class="px-6"
				on:click={() => {
					signOut();
				}}>LogOut</Button
			>
		</div>
	{:else}
		<Button
			on:click={() => {
				signIn('github', { callbackUrl: '/recipe' });
			}}>SignIn With Github</Button
		>
	{/if}
</div>
