<script lang="ts">
	import "../app.css";
	import Header from "$components/Header.svelte";
	import Nav from "$components/Nav.svelte";
	import TableOfContent from "$components/TableOfContent.svelte";

	import type { MenuGroup } from "$lib/types";
	import SocialMedia from "$components/SocialMedia.svelte";
	import "@fontsource-variable/lexend";
	import "@fontsource-variable/fira-code";
	import { fly } from "svelte/transition";
	import ThemeToggle from "$components/ThemeToggle.svelte";

	export let data;

	const menuGroups = [
		{
			title: "Getting Started",
			children: [
				{ title: "Introduction", slug: "" },
				{ title: "Work experience", slug: "work-experience" },
				{ title: "Volunteering", slug: "volunteering" }
			]
		},
		{
			title: "Projects",
			slug: "projects",
			children: [{ title: "Overview", slug: "overview" }, ...data.projectMenuItems]
		}
	] satisfies MenuGroup[];
</script>

<div class="min-h-screen bg-background">
	<Header {menuGroups} />
	<div class="relative mx-auto flex max-w-7xl justify-center gap-12 px-8 py-12">
		<aside class="hidden w-72 lg:relative lg:block lg:flex-none">
			<div class="sticky top-[7.6rem]">
				<Nav {menuGroups} />
				<SocialMedia class="mt-8" />
				<ThemeToggle />
			</div>
		</aside>
		<main class="relative mx-auto min-w-0 max-w-4xl flex-auto">
			{#key data.url}
				<article
					in:fly={{ y: -5, duration: 500, delay: 500 }}
					out:fly={{ y: 5, duration: 500 }}
					class="prose max-w-none prose-headings:text-foreground prose-h1:inline-block prose-h1:bg-gradient-to-r prose-h1:from-primary prose-h1:from-65% prose-h1:to-purple-800 prose-h1:bg-clip-text prose-h1:pb-2 prose-h1:font-bold prose-h1:text-transparent prose-p:text-body prose-code:before:content-[''] prose-code:after:content-['']"
				>
					<slot />
				</article>
			{/key}
		</main>
		<!-- <aside class="hidden w-44 flex-none xl:relative xl:block">
			<TableOfContent class="sticky top-[6.5rem] h-0" />
		</aside> -->
	</div>
</div>
