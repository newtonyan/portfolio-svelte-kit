<script lang="ts">
	import { Menu } from "lucide-svelte";
	import { Sheet, SheetContent, SheetTrigger } from "$components/ui/sheet";
	import Nav from "./Nav.svelte";
	import type { MenuGroup } from "$lib/types";
	import SocialMedia from "./SocialMedia.svelte";
	import ThemeToggle from "./ThemeToggle.svelte";

	let open: boolean;
	export let menuGroups: MenuGroup[];

	function blur(
		el: MouseEvent & {
			currentTarget: EventTarget & HTMLAnchorElement;
		}
	) {
		(el.target as HTMLElement).blur();
	}
</script>

<header
	class="sticky top-0 z-10 border-b border-foreground/10 bg-background/95 backdrop-blur-sm transition-colors duration-500"
>
	<a
		on:click={(e) => {
			blur(e); // TODO force blur as it is not blurring after the first click
		}}
		href="#main-content"
		class="fixed inset-0 z-30 flex -translate-y-full items-center justify-center bg-gradient-to-r from-primary to-indigo-600 py-1 text-primary-foreground focus:translate-y-0"
		>Skip to main content</a
	>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
		<a href="/" class="flex items-center gap-2 sm:gap-4">
			<img class="h-10 dark:brightness-150" src="/logo.svg" alt="logo" />
		</a>
		<ThemeToggle />
	</div>
	<div
		class="mx-auto flex max-w-7xl items-center border-t border-foreground/10 px-8 py-2 lg:hidden"
	>
		<Sheet bind:open>
			<SheetTrigger class="flex w-full items-center gap-2 text-muted-foreground">
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
