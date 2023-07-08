<script lang="ts">
	import { Menu } from "lucide-svelte";
	import {
		Sheet,
		SheetClose,
		SheetContent,
		SheetDescription,
		SheetHeader,
		SheetTitle,
		SheetTrigger
	} from "$components/ui/sheet";
	import Nav from "./Nav.svelte";
	import type { MenuGroup } from "$lib/types";

	export let menuGroups: MenuGroup[];
</script>

<header class="sticky top-0 z-10 border-b border-foreground/10 bg-stone-100">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
		<a href="/" class="flex items-center gap-2">
			<img class="h-10" src="/logo-icon-only.svg" alt="logo" />
		</a>
		<Sheet>
			<SheetTrigger>
				<Menu class="text-primary lg:hidden" />
			</SheetTrigger>
			<SheetContent size="full">
				<Nav {menuGroups} />
			</SheetContent>
		</Sheet>
	</div>
</header>
