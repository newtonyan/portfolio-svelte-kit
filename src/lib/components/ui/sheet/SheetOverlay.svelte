<script lang="ts">
	import { Dialog as SheetPrimitive } from "radix-svelte";
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<SheetPrimitive.Overlay
	class={cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm", className)}
	{...$$restProps}
/>
