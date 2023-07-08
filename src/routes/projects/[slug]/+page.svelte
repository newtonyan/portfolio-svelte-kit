<script lang="ts">
	import { ExternalLink, Hash } from "lucide-svelte";
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<h1>{data.meta.title}</h1>
<div class="not-prose">
	<ul>
		{#if data.meta.url}
			<li class="flex items-center gap-2">
				<ExternalLink size={16} /><a href={data.meta.url} target="_blank" rel="nofollow noreferrer"
					>{data.meta.url}</a
				>
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
