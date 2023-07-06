<script>
	import '../app.css';
	import Header from '$components/Header.svelte';
	import Nav from '$components/Nav.svelte';
	import TableOfContent from '$components/TableOfContent.svelte';
	import Icon from '@iconify/svelte';
	import linkedinIcon from '@iconify/icons-mdi/linkedin';
	import githubIcon from '@iconify/icons-mdi/github';

	const menuGroups = [
		{
			title: 'Getting Started',
			slug: 'getting-started',
			children: [
				{ title: 'Introduction', slug: 'introduction' },
				{ title: 'Work experience', slug: 'work-experience' },
				{ title: 'Volunteering', slug: 'volunteering' }
			]
		},
		{
			title: 'Projects',
			slug: 'projects',
			children: [
				{ title: 'Overview', slug: 'overview' },
				{ title: 'Project One', slug: 'project-1' },
				{ title: 'Project Two', slug: 'project-2' }
			]
		}
	];
</script>

<div class="min-h-screen bg-stone-100">
	<Header />
	<div class="mx-auto flex max-w-7xl justify-center gap-16 px-4 py-12 lg:justify-between">
		<aside class="hidden lg:block">
			<div class="sticky top-[6.5rem] h-0">
				<Nav {menuGroups} />
				<div class="mt-8 flex gap-2">
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
		<main
			class="prose max-w-3xl flex-1 prose-h1:bg-gradient-to-r prose-h1:from-primary prose-h1:via-indigo-500 prose-h1:to-primary prose-h1:bg-clip-text prose-h1:pb-2 prose-h1:text-transparent"
		>
			<slot />
		</main>
		<aside class="hidden whitespace-nowrap lg:block"><TableOfContent /></aside>
	</div>
</div>
