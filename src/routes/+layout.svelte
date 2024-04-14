<script>
	import '../app.pcss';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	$: currentPage = $page.route.id ?? '';
</script>

<main class="min-h-dvh w-full">
	<nav
		class="sticky top-0 z-50 flex w-full justify-between border-b bg-white px-2 py-3 shadow-md md:px-4"
	>
		<div>
			<a
				href="/"
				class="border-b-2 px-2 pt-2 text-xs font-extrabold tracking-widest text-black transition-colors duration-200 hover:border-b-black hover:text-black/70 md:border-b-4 md:text-lg"
				>YumYields.</a
			>
		</div>
		<ul class="relative flex items-center gap-2 text-xs md:gap-4 md:text-sm lg:text-base">
			<li class="transition-colors hover:text-zinc-500">
				<a href="/recipe">Recipe</a>
			</li>
			<hr class="h-3/4 w-[1px] bg-gray-500" />
			<li class="transition-colors hover:text-zinc-500">
				<a href="/ai">Ai Generate</a>
			</li>
			<hr class="h-3/4 w-[1px] bg-gray-500" />
			<!-- <li class="transition-colors hover:text-zinc-500"> -->
			<!-- <a href="/random">Random</a> -->
			<!-- </li> -->
			<li class="transition-colors hover:text-zinc-500"><a href="/profile">Profile</a></li>
			<svg
				class={cn(
					currentPage === '/recipe' ? 'w-10 lg:w-14' : '',
					currentPage === '/ai' ? 'right-14 w-12 scale-x-150 lg:right-24 lg:w-14' : '',
					// currentPage === '/random' ? 'right-16 w-14 scale-x-110' : '',
					['/random', '/recipe', '/ai'].indexOf(currentPage) === -1
						? 'pointer-events-none opacity-0'
						: '',
					'absolute -bottom-1 text-yellow-400'
				)}
				viewBox="0 0 257 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1.15881 34.225C6.11037 29.8697 10.912 24.9839 16.4403 21.3187C16.9579 20.9755 17.6997 20.2914 18.1408 21.1272C19.9723 24.5971 25.2658 26.1292 28.4435 28.2582C30.8706 29.8843 44.1136 37.0272 46.5209 35.328"
					stroke="currentColor"
					stroke-width="6"
					stroke-linecap="round"
				/>
				<path
					d="M69 38.4387C70.6817 36.3646 79.9738 20.2318 85.8289 21.0285C88.4302 21.3825 91.3494 23.7534 94.1016 24.4524C98.1545 25.4816 120.404 34.8475 122.497 32.4413"
					stroke="currentColor"
					stroke-width="6"
					stroke-linecap="round"
				/>
				<path
					d="M142 33.083C142.672 32.4934 163.864 8.1192 168.404 13.8805C172.817 19.4811 179.911 29.1927 186.535 31.8422"
					stroke="currentColor"
					stroke-width="6"
					stroke-linecap="round"
				/>
				<path
					d="M206 29.9914C213.623 17.8017 213.747 10.7106 225.682 15.5187C236.051 19.6961 244.578 27.5217 255.774 29.9914"
					stroke="currentColor"
					stroke-width="6"
					stroke-linecap="round"
				/>
				<path
					d="M39 12C43.9875 17.8447 48.1673 25.1809 53.1785 30.7812C54.0175 31.7189 55.3992 33.2393 56.8208 32.6578C62.2879 30.4213 71.5795 19.0883 74.5727 13.1029"
					stroke="currentColor"
					stroke-width="6"
					stroke-linecap="round"
				/>
				<path
					d="M102 10.9633C109.756 14.9853 116.996 19.1405 124.252 23.8851C126.235 25.1814 128.866 28.1197 131.399 27.9369C135.377 27.6499 141.3 9.75761 143.364 6"
					stroke="currentColor"
					stroke-width="6"
					stroke-linecap="round"
				/>
				<path
					d="M181 12.9259C189.852 25.3982 189.717 30.6613 197.312 18.8467C201.096 12.9607 205.044 6.98765 208.576 1"
					stroke="currentColor"
					stroke-width="6"
					stroke-linecap="round"
				/>
			</svg>
		</ul>
	</nav>
	<slot />
</main>
