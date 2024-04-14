<script>
	import '../app.pcss';
</script>

<main class="min-h-dvh w-full">
	<nav class="flex w-full justify-between border-b px-4 py-3">
		<div>
			<a
				href="/"
				class="border-b-4 px-2 pt-2 text-lg font-extrabold tracking-widest text-black transition-colors duration-200 hover:border-b-black hover:text-black/70"
				>YumYields.</a
			>
		</div>
		<ul class="flex gap-4">
			<li>
				<a href="/recipe">Recipe</a>
			</li>
			<li>Ai Generate</li>
			<li>Random</li>
			<li>Profile</li>
		</ul>
	</nav>
	<slot />
</main>
