<script>
	import Header from '$components/Header.svelte';
	import '../app.css';
</script>

<div class="min-h-screen bg-stone-100">
	<Header />
	<div class="mx-auto p-4 flex justify-between gap-8 max-w-7xl">
		<div class="hidden lg:block">menu</div>
		<main class="grow max-w-5xl">
			<slot />
		</main>
		<div class="hidden lg:block">on this page</div>
	</div>
</div>
