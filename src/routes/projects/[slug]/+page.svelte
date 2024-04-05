<script lang="ts">
	import { Calendar, ExternalLink, Github, Hash, Link } from "lucide-svelte";
	import dayjs from "dayjs";
	export let data;
</script>

<svelte:head>
	<title>Showcase: {data.meta.shortTitle ?? data.meta.title} | Newton Yan</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta name="description" content={data.meta.description} />
</svelte:head>

<div role="doc-subtitle" class="font-bold text-foreground">Project showcase</div>
<h1>{data.meta.title}</h1>
<div class="not-prose mb-8">
	<ul class="break-all font-medium text-muted-foreground">
		{#if data.meta.url}
			<li class="">
				<Link size={16} class="mr-2 inline-block" /><a
					href={data.meta.url}
					target="_blank"
					rel="nofollow noreferrer"
					><span class="align-middle">{data.meta.displayUrl ?? data.meta.url}</span></a
				>
			</li>
		{/if}
		{#if data.meta.githubRepo}
			<li class="">
				<Github size={16} class="mr-2 inline-block" /><a
					href={data.meta.githubRepo}
					target="_blank"
					rel="nofollow noreferrer"><span class="align-middle">GitHub repository</span></a
				>
			</li>
		{/if}
		{#if data.meta.date}
			<li class="">
				<Calendar size={16} class="mr-2 inline-block" /><span class="align-middle"
					>{dayjs(data.meta.date).format("MMMM YYYY")}</span
				>
			</li>
		{/if}
		{#if data.meta.tags && data.meta.tags.length}
			<li class="">
				<Hash size={16} class="mr-2 inline-block" /><span class="align-middle"
					>{data.meta.tags.join(", ")}</span
				>
			</li>
		{/if}
	</ul>
</div>
<svelte:component this={data.content} />
