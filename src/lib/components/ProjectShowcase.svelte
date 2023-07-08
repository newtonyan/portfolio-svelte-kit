<script lang="ts">
	import type { Project } from "$lib/types";
	import { AspectRatio } from "$components/ui/aspect-ratio";

	export let projects: Project[];
</script>

<div class="not-prose grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-8">
	{#each projects as project}
		<div>
			<a href={`/projects/${project.slug}`}>
				<AspectRatio ratio={3 / 2} class="bg-primary/10">
					{#if project.thumbnail}
						<img
							src={`/projects/${project.slug}/${project.thumbnail}`}
							loading="lazy"
							class="object-cover"
							alt={`Thumbnail for ${project.title}`}
						/>
					{/if}
				</AspectRatio>
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
