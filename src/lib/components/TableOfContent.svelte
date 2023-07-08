<script lang="ts">
	import { browser } from "$app/environment";
	import { page } from "$app/stores";
	import type { MenuItem } from "$lib/types";

	const headingElements = ["h2"];

	let toc: MenuItem[] = [];

	$: {
		if (browser && $page) {
			const elements = document.querySelectorAll(headingElements.join(","));

			toc = Array.from(elements).map((element) => {
				return {
					title: (element as HTMLElement).innerText,
					slug: element.id
				};
			});
		}
	}
</script>

<div {...$$props}>
	<h5 class="font-bold leading-10">On this page</h5>
	<nav>
		<ol class="list-inside list-decimal space-y-1">
			{#each toc as item}
				<li><a href={`#${item.slug}`}>{item.title}</a></li>
			{/each}
		</ol>
	</nav>
</div>
