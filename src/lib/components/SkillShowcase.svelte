<script lang="ts">
	import type { Stack } from "$lib/types";
	import Icon, { type IconifyIcon } from "@iconify/svelte";
	import { colorTheme } from "$lib/store";

	function isString(icon: any): icon is string {
		return typeof icon === "string";
	}

	export let list: Stack[];
</script>

<div class={`not-prose grid grid-cols-1 gap-8 rounded-lg bg-code p-8 sm:grid-cols-5`}>
	{#each list as skill}
		{@const icon = skill.icon[$colorTheme] ?? skill.icon.light}
		{@const attributes = skill.website ? { target: "_blank", rel: "nofollow noreferrer" } : {}}
		<svelte:element
			this={skill.website ? "a" : "div"}
			href={skill.website}
			{...attributes}
			class="rounded-lg p-2 text-code-foreground transition duration-200 ease-in-out hover:scale-105"
		>
			<div class="flex flex-1 flex-col items-center">
				{#if isString(icon)}
					<img src={icon} alt={`${skill.name} icon`} class="h-14" />
				{:else}
					<Icon class="text-5xl" {icon} />
				{/if}
				<span class="mt-3 text-center font-mono text-sm">{skill.name}</span>
			</div>
		</svelte:element>
	{/each}
</div>
