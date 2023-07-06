<script lang="ts">
	import { page } from '$app/stores';
	import clsx from 'clsx';

	interface MenuGroup {
		title: string;
		slug: string;
		children: MenuItem[];
	}

	interface MenuItem {
		title: string;
		slug: string;
	}

	export let menuGroups: MenuGroup[];
</script>

<nav {...$$props}>
	<div class="flex flex-col gap-8">
		{#each menuGroups as group}
			<div>
				<h5 class="font-bold leading-10">{group.title}</h5>
				<ul class="space-y-1 whitespace-nowrap">
					{#each group.children as child}
						<li>
							<a
								href={`/${group.slug}/${child.slug}`}
								class={clsx(
									$page.url.pathname === `/${group.slug}/${child.slug}` &&
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
