<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { TriangleAlert } from 'lucide-svelte';
</script>

<div class="relative mt-10 flex flex-col items-center justify-center gap-4 overflow-x-clip">
	<div class="flex flex-col items-center justify-center text-center">
		<h1 class="max-w-[15ch] text-4xl font-bold md:text-5xl lg:text-6xl">
			<span class="relative"
				>Everyone
				<svg
					class="absolute -left-6 -top-2 h-8 w-8 text-yellow-600 md:h-10 md:w-10 lg:-left-8 lg:-top-3"
					viewBox="0 0 115 98"
					fill="none"
					xmlns="http//www.w3.org/2000/svg"
				>
					<path
						d="M1.96056 72.4776C2.11526 72.1427 2.61932 71.3858 3.47274 70.2068C4.32617 69.0278 5.12206 67.971 5.86041 67.0365C6.59877 66.102 7.54001 64.8843 8.68414 63.3832C9.82849 61.8822 10.7074 60.7311 11.3207 59.9299C11.9341 59.1285 12.5843 58.2841 13.2713 57.3967C13.9584 56.509 15.1275 54.993 16.7787 52.8487C18.4299 50.7043 20.1083 48.5845 21.8138 46.4892C23.5193 44.3939 24.8029 42.8334 25.6647 41.8077C26.5262 40.7821 27.2318 39.9321 27.7814 39.258C28.3309 38.5838 29.2978 37.4637 30.6822 35.8979C32.0668 34.332 33.1765 33.0913 34.0112 32.176C34.8462 31.2609 35.6647 30.3806 36.4668 29.535C37.2686 28.6897 38.0465 27.8696 38.8004 27.0747C39.5543 26.2796 40.7613 25.0652 42.4216 23.4316C44.0818 21.7979 45.4922 20.4434 46.6528 19.3679C47.8133 18.2927 48.6809 17.4937 49.2556 16.9708C49.8305 16.4479 50.4121 15.9271 51.0005 15.4083C51.5889 14.8892 52.4073 14.182 53.4557 13.2864C54.5041 12.3909 55.6724 11.4026 56.9604 10.3215"
						stroke="currentColor"
						stroke-width="2.40238"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M22.4046 76.4629C22.4757 76.2636 22.8882 75.2594 23.6421 73.4504C24.3963 71.6413 25.5284 69.4455 27.0387 66.8629C28.5492 64.2803 29.7211 62.335 30.5545 61.027C31.3881 59.7189 31.9949 58.7378 32.3747 58.0837C32.7546 57.4295 33.7812 55.8811 35.4545 53.4384C37.1276 50.9957 38.4956 49.06 39.5587 47.6315C40.6217 46.203 41.4966 45.0339 42.1831 44.1242C42.8697 43.2147 43.7552 42.0704 44.8397 40.6914C45.9243 39.3122 47.0484 37.9385 48.2119 36.5703C49.3754 35.2022 50.2633 34.1643 50.8755 33.4568C51.4878 32.7495 52.2802 31.8579 53.2527 30.782C54.2253 29.7064 55.2707 28.5952 56.3889 27.4486C57.5069 26.3018 58.5024 25.2882 59.3754 24.4077C60.2482 23.5273 61.5074 22.3131 63.153 20.7653C64.7988 19.2174 66.3734 17.7947 67.8767 16.4972C69.3802 15.1998 70.8823 13.932 72.3831 12.694C73.8839 11.4558 75.3001 10.3252 76.6316 9.30249C77.9633 8.27974 79.4285 7.16454 81.0272 5.95691"
						stroke="currentColor"
						stroke-width="2.40238"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M40.0535 96.3708C40.1289 96.0743 40.5204 94.6886 41.2279 92.2139C41.9354 89.7392 42.8657 87.1333 44.0189 84.396C45.1718 81.6585 46.1029 79.5524 46.8122 78.0777C47.5217 76.6033 48.0229 75.5319 48.3156 74.8636C48.6081 74.1952 49.4992 72.4651 50.989 69.6731C52.4788 66.8811 53.7505 64.6236 54.8041 62.9006C55.8577 61.1773 56.6296 59.9047 57.1198 59.0828C57.6098 58.2607 58.4645 56.9465 59.6838 55.1404C60.9031 53.3342 61.8391 51.9585 62.4916 51.0132C63.1444 50.0679 63.9512 48.9479 64.9121 47.6531C65.8729 46.3586 66.6215 45.3676 67.1579 44.6801C67.6943 43.9926 68.1759 43.3761 68.6029 42.8305C69.03 42.2849 69.6793 41.4738 70.5507 40.3972C71.4222 39.3207 72.5404 37.9981 73.9054 36.4295C75.2707 34.8611 76.4771 33.5194 77.5246 32.4043C78.5724 31.2895 79.6814 30.1035 80.8516 28.8463C82.0216 27.5891 83.856 25.7855 86.3548 23.4353C88.8536 21.0853 90.8133 19.2912 92.234 18.053C93.6546 16.8147 94.8794 15.757 95.9082 14.8797C96.937 14.0026 98.3193 12.8774 100.055 11.5041C101.79 10.1307 103.119 9.08812 104.041 8.37633C104.963 7.66455 105.694 7.10317 106.235 6.69222C106.777 6.28127 107.584 5.67645 108.659 4.87774C109.733 4.07904 111.207 2.98964 113.082 1.60953"
						stroke="currentColor"
						stroke-width="2.40238"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</span>
			Can Become A
			<span class="relative"
				>Chef
				<svg
					class="absolute -right-6 top-0 h-6 w-6 text-red-600 md:-right-12 md:-top-2 md:h-10 md:w-10"
					viewBox="0 0 82 84"
					fill="none"
					xmlns="http//www.w3.org/2000/svg"
				>
					<path
						d="M41.5816 1.21606C39.7862 5.82482 40.3852 10.0977 40.5593 14.9633C40.7854 21.2812 40.9774 27.5593 41.4363 33.8661"
						stroke="currentColor"
						stroke-width="1.90596"
						stroke-linecap="round"
					/>
					<path
						d="M41.0651 45.1798C39.7505 51.5096 40.3418 57.6794 40.8893 64.0791C41.4093 70.1568 42.1389 76.2117 42.8566 82.2682"
						stroke="currentColor"
						stroke-width="1.90596"
						stroke-linecap="round"
					/>
					<path
						d="M1.13413 46.6647C5.16696 44.8703 8.96881 44.7974 13.3092 44.5029C19.8761 44.0572 26.2025 43.2089 32.656 41.952"
						stroke="currentColor"
						stroke-width="1.90596"
						stroke-linecap="round"
					/>
					<path
						d="M47.2629 40.0959C58.4139 39.3819 69.3895 37.5305 80.4472 35.9965"
						stroke="currentColor"
						stroke-width="1.90596"
						stroke-linecap="round"
					/>
					<path
						d="M49.3429 34.6508L52.917 28.1667"
						stroke="currentColor"
						stroke-width="1.90596"
						stroke-linecap="round"
					/>
					<path
						d="M32.9786 50.3504L28.6387 54.6391"
						stroke="currentColor"
						stroke-width="1.90596"
						stroke-linecap="round"
					/>
					<path
						d="M52.6361 48.6656L56.9506 51.5758"
						stroke="currentColor"
						stroke-width="1.90596"
						stroke-linecap="round"
					/>
					<path
						d="M31.549 30.8471C26.8741 29.4323 22.7143 27.3543 18.2738 25.3586"
						stroke="currentColor"
						stroke-width="1.90596"
						stroke-linecap="round"
					/>
				</svg>
			</span>
		</h1>
		<p class="max-w-[60ch] text-xs leading-3 md:text-sm md:leading-4 lg:text-base lg:leading-5">
			Dive into our vast array of meticulously crafted recipes, each accompanied by
			<span class="relative"
				>detailed ingredients
				<svg
					class="absolute bottom-1/2 right-[68px] -z-10 w-8 translate-y-1/2 scale-150 text-green-400 lg:right-1/2 lg:w-10 lg:translate-x-1/2 lg:scale-x-[4]"
					viewBox="0 0 104 73"
					fill="none"
					xmlns="http//www.w3.org/2000/svg"
				>
					<path
						d="M57.1576 7.44863C53.831 5.16772 51.182 3.5966 47.193 3.21034C43.8401 2.88567 40.4399 2.98776 37.104 3.43439C27.4742 4.72371 18.5278 10.1981 11.7423 16.9887C4.51029 24.226 -0.0601712 34.0308 0.892389 44.4084C2.03799 56.8891 11.2616 65.8317 22.6653 69.7276C37.5325 74.8068 55.3079 71.9896 69.5261 65.9911C82.4612 60.534 98.1688 50.2841 102.471 35.9373C106.219 23.4392 95.872 11.7376 85.8562 5.97051C77.5557 1.19116 67.8156 -0.854239 58.4918 2.0932C51.6146 4.26724 44.7193 7.80313 39.1564 12.4182C32.891 17.616 28.6773 24.2755 24.1785 30.9319"
						stroke="currentColor"
						stroke-width="4"
						stroke-linecap="round"
					/>
				</svg>
			</span>
			for a seamless cooking experience.
		</p>
	</div>
	<Button href="/recipe" class="md:px-5 md:py-5">Find Recipe</Button>
	<img src="/cook.svg" alt="" class="-z-20 w-96" />
	<div class="flex flex-col sm:flex-row lg:gap-10">
		<img src="/recipes.webp" alt="" class="w-72 self-start md:w-96" />
		<div class="flex max-w-[80ch] flex-col items-center gap-4 lg:pt-10">
			<p class="px-6 text-center text-xl font-bold md:text-3xl">
				<span class="relative">
					AI
					<svg
						class="absolute -left-10 -top-8 h-10 w-10 rotate-90 text-red-600"
						viewBox="0 0 162 119"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.913757 114.53C13.9807 116.216 32.3056 122.378 43.7012 113.083C51.0025 107.128 57.0714 99.6064 62.6869 92.0921C73.647 77.4257 81.4769 57.0014 83.9262 38.9656C86.7749 17.9886 65.2558 22.4197 58.3958 36.6239C48.6178 56.8698 53.4826 94.2165 79.0133 100.444C108.309 107.591 123.562 71.7844 130.096 49.9154C134.773 34.2631 153.849 -9.9389 143.644 2.81731C137.309 10.736 128.12 15.6577 122.008 23.6058C118.81 27.7641 121.911 27.9558 125.382 25.0963C131.067 20.4118 136.477 14.6482 140.667 8.60318C141.379 7.57589 145.275 0.763508 146.837 3.12604C151.902 10.7886 153.525 20.5514 158.568 28.4832"
							stroke="currentColor"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M132.848 24.4348C141.945 26.8851 150.961 28.4036 160.05 30.4235C162.841 31.0437 159.046 30.7305 158.171 30.7851"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</span>
				Recipe Wizard Let Artificial Intelligence Whip Up Your Next Culinary Creation!
			</p>
			<div
				class="mb-10 grid grid-cols-2 grid-rows-5 items-start justify-center gap-x-2 gap-y-1 px-2 md:gap-x-4 md:gap-y-2"
			>
				<div
					class="row-span-2 max-w-[30ch] rounded-md border bg-zinc-700 px-2 py-2 text-white lg:px-4 lg:pb-2 lg:pt-4"
				>
					<p class="pb-1 text-xs font-semibold leading-5 md:text-sm lg:text-base">
						Transform Leftovers into Gourmet.
					</p>
					<p class="text-xs leading-4">
						Say goodbye to food waste as our AI turns leftovers into delectable dishes.
					</p>
				</div>
				<div
					class="col-start-2 row-span-2 row-start-2 max-w-[30ch] rounded-md border bg-zinc-700 px-2 py-2 text-white lg:px-4 lg:pb-2 lg:pt-4"
				>
					<p class="pb-1 text-xs font-semibold leading-5 md:text-sm lg:text-base">
						Tailored to Your Tastes.
					</p>
					<p class="text-xs leading-4">
						Personalized recommendations ensure every dish aligns with your preferences and dietary
						needs.
					</p>
				</div>
				<div
					class="col-start-1 row-span-2 max-w-[30ch] rounded-md border bg-zinc-700 px-2 py-2 text-white lg:px-4 lg:pb-2 lg:pt-4"
				>
					<p class="pb-1 text-xs font-semibold leading-5 md:text-sm lg:text-base">
						Effortless Meal Planning.
					</p>
					<p class="text-xs leading-4">
						Simplify your meal planning process with AI-generated recipes that suit your schedule
						and ingredients on hand.
					</p>
				</div>
				<div
					class="row-span-2 max-w-[30ch] rounded-md border bg-zinc-700 px-2 py-2 text-white lg:px-4 lg:pb-2 lg:pt-4"
				>
					<p class="pb-1 text-xs font-semibold leading-5 md:text-sm lg:text-base">
						Innovative Flavor Combinations.
					</p>
					<p class="text-xs leading-4">
						Experience flavor profiles you never thought possible as AI suggests unique ingredient
						pairings.
					</p>
				</div>
				<Button href="/ai" class="relative w-fit self-center justify-self-end px-6">
					<svg
						class="absolute -left-6 h-8 w-8 rotate-12 scale-150 text-green-500 md:h-10 md:w-10 lg:-left-10"
						viewBox="0 0 355 162"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3 153.9C19.7648 151.422 58.3853 148.645 58.3853 123.767C58.3853 109.758 41.9931 109.583 35.4673 119.947C29.8677 128.841 29.3802 151.014 41.6212 155.385C68.0833 164.836 96.3337 155.089 121.41 146.367C158.021 133.632 195.283 106.274 215.841 72.7318C223.827 59.7017 248.721 3.98332 214.143 3.02276C159.312 1.49957 148.663 76.8016 170.111 114.748C179.098 130.649 200.663 140.818 217.963 143.29C237.073 146.02 266.527 131.63 270.271 111.035C273.351 94.0976 254.758 100.754 250.43 111.884C244.084 128.203 258.692 140.196 273.773 140.531C298.453 141.08 318.113 127.233 334.463 109.974C339.288 104.881 348.912 91.2687 350.484 84.1909C351.915 77.7539 351.661 81.7626 350.697 86.1007C349.794 90.1648 352.5 94.2726 352.5 98.5146C352.5 100.006 350.591 90.7585 350.591 88.0105C350.591 74.942 333.087 85.5908 325.763 87.0556"
							stroke="currentColor"
							stroke-width="5"
							stroke-linecap="round"
						/>
					</svg>
					Try it now</Button
				>
			</div>
		</div>
	</div>
	<footer class="w-full text-xs">
		<div class="flex justify-between gap-1 border-t-4 px-2 py-2 md:gap-2 md:px-4">
			<p class="flex gap-1 md:gap-2">
				Made with
				<svg
					class="h-4 w-4 md:h-6 md:w-6"
					viewBox="0 0 99 91"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M46.5897 90C32.2617 82.5795 21.668 75.8216 13.4112 62.0208C9.00167 54.6506 4.91717 47.0127 2.69169 38.6607C-0.54097 26.5288 0.793624 10.3852 12.9895 3.52983C28.1392 -4.9859 49.2008 9.31642 45.2853 26.7698C45.1636 27.3123 43.6421 30.6293 44.4297 28.79C48.6716 18.8834 61.263 9.74938 71.1476 6.48662C86.7877 1.32402 97.7846 9.63273 97.1912 26.0637C96.7624 37.9369 88.4709 51.895 80.1949 60.0373C70.4344 69.6401 57.315 75.4033 50.4294 87.5728"
						stroke="red"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
				& Svelte-kit
			</p>
			<p class="flex items-center justify-center">
				<TriangleAlert />The ai response can be unusual please be careful
			</p>
		</div>
	</footer>
	<img
		src="/food.webp"
		alt=""
		class="absolute -right-14 -top-0 -z-10 hidden w-72 -rotate-12 scale-x-[-1] sm:block md:w-[450px] lg:-right-32 lg:top-72 lg:w-[800px] lg:-translate-y-1/2"
	/>
	<img
		class="absolute -left-10 -top-16 -z-10 w-40 rotate-45 md:w-52 lg:-left-10 lg:top-72 lg:w-60 lg:-translate-y-1/2"
		src="/justSomeGrid.svg"
		alt=""
	/>
</div>
