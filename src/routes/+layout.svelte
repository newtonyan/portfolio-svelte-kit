<script lang="ts">
	import '../app.css';
	import Header from '$components/Header.svelte';
	import Nav from '$components/Nav.svelte';
	import TableOfContent from '$components/TableOfContent.svelte';
	import Icon from '@iconify/svelte';
	import linkedinIcon from '@iconify/icons-mdi/linkedin';
	import githubIcon from '@iconify/icons-mdi/github';
	import type { MenuGroup } from '$lib/typings';

	export let data;

	const menuGroups = [
		{
			title: 'Getting Started',
			children: [
				{ title: 'Introduction', slug: '' },
				{ title: 'Work experience', slug: 'work-experience' },
				{ title: 'Volunteering', slug: 'volunteering' }
			]
		},
		{
			title: 'Projects',
			slug: 'projects',
			children: [{ title: 'Overview', slug: 'overview' }, ...data.projectMenuItems]
		}
	] satisfies MenuGroup[];
</script>

<div class="min-h-screen bg-stone-100">
	<Header />
	<div class="relative mx-auto flex max-w-7xl justify-center gap-12 px-8 py-12">
		<aside class="hidden w-72 lg:relative lg:block lg:flex-none">
			<div class="sticky top-[6.5rem] h-0">
				<Nav {menuGroups} />
				<div class="mt-8 flex gap-2 text-primary">
					<a
						href="https://www.linkedin.com/in/newton-yan-7a6722199/"
						target="_blank"
						rel="nofollow noreferrer"
					>
						<Icon class="text-4xl" icon={linkedinIcon} />
					</a>
					<a href="https://github.com/newtonyan" target="_blank" rel="nofollow noreferrer">
						<Icon class="text-4xl" icon={githubIcon} />
					</a>
				</div>
			</div>
		</aside>
		<main class="relative mx-auto min-w-0 max-w-4xl flex-auto">
			<article
				class="prose max-w-none prose-h1:bg-gradient-to-r prose-h1:from-primary prose-h1:via-indigo-500 prose-h1:to-primary prose-h1:bg-clip-text prose-h1:pb-2 prose-h1:text-transparent"
			>
				<slot />
			</article>
		</main>
		<!-- <aside class="hidden w-44 flex-none xl:relative xl:block">
			<TableOfContent class="sticky top-[6.5rem] h-0" />
		</aside> -->
	</div>
</div>
