<script lang="ts">
	import type { Project } from "$lib/types";
	import Badge from "./ui/badge/Badge.svelte";

	export let projects: Project[];
</script>

<div class="not-prose grid grid-cols-2 gap-8">
	{#each projects as project}
		<div>
			<a href={`/projects/${project.slug}`}>
				<img src="/projects/test.png" loading="lazy" />
				<h3 class="mt-4 text-lg font-semibold leading-4">{project.title}</h3>
			</a>
			{#if project.tags}
				<span class="text-sm font-medium text-primary">
					{project.tags.join(", ")}
				</span>
			{/if}
			<p class="mt-4 line-clamp-3">{project.description}</p>
		</div>
	{/each}
</div>
