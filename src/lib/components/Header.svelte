<script lang="ts">
	import { Menu } from "lucide-svelte";
	import { Sheet, SheetContent, SheetTrigger } from "$components/ui/sheet";
	import Nav from "./Nav.svelte";
	import type { MenuGroup } from "$lib/types";
	import SocialMedia from "./SocialMedia.svelte";
	import ThemeToggle from "./ThemeToggle.svelte";

	let open: boolean;
	export let menuGroups: MenuGroup[];
</script>

<header class="sticky top-0 z-10 border-b border-foreground/10 bg-background/95 backdrop-blur-sm">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
		<a href="/" class="flex items-center gap-2">
			<img class="h-10" src="/logo-icon-only.svg" alt="logo" />
		</a>
		<ThemeToggle />
	</div>
	<div
		class="mx-auto flex max-w-7xl items-center border-t border-foreground/10 px-8 py-2 lg:hidden"
	>
		<Sheet bind:open>
			<SheetTrigger class="flex w-full items-center gap-2 text-primary">
				<Menu /> <span class="font-bold">Menu</span>
			</SheetTrigger>
			<SheetContent size="full" position="left" class="bg-background">
				<div class="p-4">
					<Nav {menuGroups} bind:dialogOpen={open} />
					<SocialMedia class="mt-8" />
				</div>
			</SheetContent>
		</Sheet>
	</div>
</header>
