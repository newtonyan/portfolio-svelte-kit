<script lang="ts">
	import { browser } from "$app/environment";
	import { Button } from "$components/ui/button";
	import { Moon, Sun } from "lucide-svelte";
	import { Switch } from "radix-svelte";
	import type { ResolvedProps } from "radix-svelte/internal/helpers";

	let rootChecked: boolean = (browser && localStorage.getItem("colorTheme") === "dark") ?? false;

	const setColorTheme = (theme: "light" | "dark") => {
		localStorage.setItem("colorTheme", theme);
		document.body.classList.remove("light", "dark");
		document.body.classList.add(theme);
	};

	$: {
		if (browser) {
			if (rootChecked) setColorTheme("dark");
			else setColorTheme("light");
		}
	}
</script>

<Switch.Root
	class="relative h-7 w-12 cursor-default rounded-full bg-accent outline-none ring-2 ring-primary/40 focus:ring-primary"
	bind:checked={rootChecked}
>
	<Switch.Thumb
		class="peer absolute bottom-0 left-1 top-0 z-10 my-auto block h-5 w-5 rounded-full bg-primary shadow-xl transition-transform will-change-transform duration-500 data-[state=checked]:translate-x-5"
	/>
	<div class="group relative z-20 mx-1.5 flex items-center justify-between">
		<Sun
			class="h-4 w-4 fill-primary-foreground text-primary-foreground will-change-transform duration-500 motion-safe:peer-data-[state=unchecked]:group-[]:animate-spin motion-safe:peer-data-[state=unchecked]:group-[]:ease-in-out motion-safe:peer-data-[state=unchecked]:group-[]:repeat-1 dark:fill-transparent dark:text-muted-foreground"
		/>
		<Moon
			class="h-4 w-4 text-muted-foreground will-change-transform duration-500 motion-safe:peer-data-[state=checked]:group-[]:animate-spin motion-safe:peer-data-[state=checked]:group-[]:ease-in-out motion-safe:peer-data-[state=checked]:group-[]:repeat-1 dark:fill-primary-foreground dark:text-primary-foreground"
		/>
	</div>
</Switch.Root>
