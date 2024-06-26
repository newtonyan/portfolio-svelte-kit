<script lang="ts">
	import { page } from "$app/stores";
	import type { MenuGroup } from "$lib/types";
	import clsx from "clsx";
	import resume from "$lib/documents/Newton_Yan_resume.pdf";

	export let dialogOpen: boolean | undefined = undefined;
	export let menuGroups: MenuGroup[];
</script>

<nav {...$$props}>
	<div class="flex flex-col gap-8">
		{#each menuGroups as group}
			<div>
				<h5 class="font-extrabold leading-10">{group.title}</h5>
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
								<div class={clsx(!active && "group-hover:bg-accent group-focus-visible:bg-accent")}>
									<span
										class={clsx(
											active &&
												"bg-gradient-to-r from-primary to-indigo-600 bg-clip-text font-bold text-transparent before:mr-1 before:content-['<'] after:ml-1 after:content-['/>']",
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
		<div>
			<h5 class="font-bold leading-10">Connect</h5>
			<ul class="space-y-1">
				<li>
					<a
						href={resume}
						target="_blank"
						rel="noreferrer nofollow"
						class="group focus-visible:outline-none"
					>
						<div class="group-hover:bg-accent group-focus-visible:bg-accent">
							<span
								class="inline-flex items-center group-hover:animate-cursor-blink group-hover:border-r-2 group-focus-visible:animate-cursor-blink group-focus-visible:border-r-2 group-focus-visible:pr-[1px]"
							>
								Resume
							</span>
						</div>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/newtonyan"
						target="_blank"
						rel="noreferrer nofollow"
						class="group focus-visible:outline-none"
					>
						<div class="group-hover:bg-accent group-focus-visible:bg-accent">
							<span
								class="inline-flex items-center group-hover:animate-cursor-blink group-hover:border-r-2 group-focus-visible:animate-cursor-blink group-focus-visible:border-r-2 group-focus-visible:pr-[1px]"
							>
								GitHub
							</span>
						</div>
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/newton-yan-7a6722199/"
						target="_blank"
						rel="noreferrer nofollow"
						class="group focus-visible:outline-none"
					>
						<div class="group-hover:bg-accent group-focus-visible:bg-accent">
							<span
								class="inline-flex items-center group-hover:animate-cursor-blink group-hover:border-r-2 group-focus-visible:animate-cursor-blink group-focus-visible:border-r-2 group-focus-visible:pr-[1px]"
							>
								LinkedIn
							</span>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
