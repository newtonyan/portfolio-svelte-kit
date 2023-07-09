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
						{@const active = $page.url.pathname === slug}
						<li>
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<svelte:element
								this={active ? "span" : "a"}
								on:click={() => {
									if (active) return;
									if (dialogOpen !== undefined) {
										dialogOpen = false;
									}
								}}
								href={slug}
								class="group focus-visible:outline-none"
							>
								<div
									class={clsx(
										!active &&
											"group-hover:bg-stone-200 group-focus-visible:bg-stone-200 group-hover:dark:bg-stone-800 group-focus-visible:dark:bg-stone-800"
									)}
								>
									<span
										class={clsx(
											active &&
												"bg-gradient-to-r from-primary to-indigo-500 bg-clip-text font-bold text-transparent before:mr-1 before:content-['<'] after:ml-1 after:content-['/>']",
											!active &&
												"group-hover:animate-cursor-blink group-hover:border-r-2 group-hover:pr-[1px] group-focus-visible:animate-cursor-blink group-focus-visible:border-r-2 group-focus-visible:pr-[1px]"
										)}>{child.title}</span
									>
								</div>
							</svelte:element>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</nav>
