<script lang="ts">
	import { Calendar, ExternalLink, Github, Hash } from "lucide-svelte";
	export let data;
</script>

<svelte:head>
	<title>Showcase: {data.meta.title} | Newton Yan</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="description" content={data.meta.description} />
</svelte:head>

<div role="doc-subtitle" class="font-bold text-foreground">Project showcase</div>
<h1>{data.meta.title}</h1>
<div class="not-prose mb-8">
	<ul class="font-medium text-muted-foreground">
		{#if data.meta.url}
			<li class="flex items-center gap-2">
				<ExternalLink size={16} /><a href={data.meta.url} target="_blank" rel="nofollow noreferrer"
					>{data.meta.url}</a
				>
			</li>
		{/if}
		{#if data.meta.githubRepo}
			<li class="flex items-center gap-2">
				<Github size={16} /><a href={data.meta.githubRepo} target="_blank" rel="nofollow noreferrer"
					>GitHub repository</a
				>
			</li>
		{/if}
		{#if data.meta.date}
			<li class="flex items-center gap-2">
				<Calendar size={16} />
				<span>{data.meta.date}</span>
			</li>
		{/if}
		{#if data.meta.tags && data.meta.tags.length}
			<li class="flex items-center gap-2">
				<Hash size={16} />
				<span>{data.meta.tags.join(", ")}</span>
			</li>
		{/if}
	</ul>
</div>
<svelte:component this={data.content} />
