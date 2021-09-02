<script>
	import { page } from '$app/stores';
	let isOpen = false;
</script>
<header class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-4">
	<div class="flex items-center justify-between px-4 py-6 sm:p-0">
		<h1 class="text-4xl font-Damion font-thin h-8 text-gray-200 shadow-lg"><a href="/">Vivek's Weblog</a></h1>
		<div class="sm:hidden">
			<button on:click="{() => isOpen = !isOpen}" type="button"
				class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
				<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
					{#if isOpen}
					<path fill-rule="evenodd" d="M 10,10 L 20,20 M 20,10 L 10,20" stroke="white" />
					{:else}
					<path fill-rule="evenodd"
						d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	<nav class="px-2 pb-4 {isOpen ? '':'hidden'} sm:block sm:p-0">
		<ul>
			<li class:active={$page.path==='/' }
				class="text-white sm:inline-block px-2 py-1 rounded hover:bg-gray-800 font-medium sm:mt-6 sm:ml-2">
				<a sveltekit:prefetch href="/">Home</a>
			</li>

			<li class:active={$page.path==='/blog' }
				class="text-white mt-1 py-1 px-2 sm:inline-block rounded hover:bg-gray-800 font-medium sm:mt-6 sm:ml-2">
				<a sveltekit:prefetch href="/blog">Blog</a>
			</li>
			<li class:active={$page.path==='/about' }
				class="text-white mt-1 py-1 px-2 sm:inline-block rounded hover:bg-gray-800 font-medium sm:mt-6 sm:ml-2">
				<a sveltekit:prefetch href="/about">About</a>
			</li>
		</ul>
	</nav>



</header>