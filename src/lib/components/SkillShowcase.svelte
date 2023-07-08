<script lang="ts">
	import type { Stack } from "$lib/types";
	import Icon from "@iconify/svelte";

	export let list: Stack[];
</script>

<div class={`not-prose grid grid-cols-1 gap-8 rounded-lg bg-primary/5 p-8 sm:grid-cols-5`}>
	{#each list as skill}
		<a
			href={skill.website}
			target="_blank"
			rel="nofollow noreferrer"
			class="rounded-lg p-2 transition duration-200 ease-in-out hover:scale-105"
		>
			<div class="flex flex-1 flex-col items-center">
				<Icon class="text-5xl" icon={skill.icon} />
				<span class="mt-3 text-center text-sm font-semibold">{skill.name}</span>
			</div>
		</a>
	{/each}
</div>
