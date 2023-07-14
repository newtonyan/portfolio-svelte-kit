<script lang="ts">
	import type { Project } from "$lib/types";
	import { AspectRatio } from "$components/ui/aspect-ratio";

	export let projects: Project[];
</script>

<div class="not-prose grid grid-cols-1 gap-20 text-foreground md:grid-cols-2 lg:gap-8">
	{#each projects as project}
		<div>
			<a href={`/projects/${project.slug}`} class="group">
				<AspectRatio ratio={3 / 2} class="bg-secondary">
					{#if project.thumbnail}
						<img
							src={`/projects/${project.slug}/${project.thumbnail}`}
							loading="lazy"
							class="h-full w-full object-cover"
							alt={`Thumbnail for ${project.title}`}
						/>
					{:else}
						<img
							src={`/logo-icon-only.svg`}
							loading="lazy"
							class="h-full w-full object-cover"
							alt={`Placeholder for thumbnail`}
						/>
					{/if}
				</AspectRatio>
				<h3 class="mt-4 text-lg font-semibold leading-6 group-hover:text-primary">
					{project.title}
				</h3>
			</a>
			{#if project.tags}
				<span class="text-sm font-medium text-muted-foreground">
					{project.tags.join(", ")}
				</span>
			{/if}
			<p class="mt-4 line-clamp-3">{project.description}</p>
		</div>
	{/each}
</div>
