<script lang="ts">
	import type { Project } from "$lib/typings";

	export let projects: Project[];
</script>

<div class="not-prose grid grid-cols-2 gap-8">
	{#each projects as project}
		<a href={`/projects/${project.slug}`}>
			<img src="/projects/test.png" loading="lazy" />
			<h3 class="mt-4 text-lg font-semibold leading-8">{project.title}</h3>
			<p>{project.description}</p>
		</a>
	{/each}
</div>
