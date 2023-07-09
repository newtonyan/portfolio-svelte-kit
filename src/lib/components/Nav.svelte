<script lang="ts">
	import { page } from "$app/stores";
	import type { MenuGroup, MenuItem } from "$lib/types";
	import clsx from "clsx";
	import { SheetClose } from "./ui/sheet";

	export let dialogOpen: boolean | undefined = undefined;
	export let menuGroups: MenuGroup[];
</script>

<nav {...$$props}>
	<div class="flex flex-col gap-8">
		{#each menuGroups as group}
			<div>
				<h5 class="font-bold leading-10">{group.title}</h5>
				<ul class="space-y-1">
					{#each group.children as child}
						{@const slug = `${group.slug ? `/${group.slug}` : ""}/${child.slug}`}
						<li>
							<!-- TODO Workaround: add tabindex=0 to make the anchor focusable with keyboard -->
							<a
								tabindex="0"
								on:click={() => {
									if (dialogOpen !== undefined) {
										dialogOpen = false;
									}
								}}
								href={slug}
								class={clsx(
									$page.url.pathname === slug &&
										"bg-gradient-to-r from-primary to-indigo-500 bg-clip-text font-bold text-transparent before:mr-1 before:content-['<'] after:ml-1 after:content-['/>']"
								)}>{child.title}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</nav>
