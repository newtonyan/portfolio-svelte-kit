<script lang="ts">
	import { Button } from "$components/ui/button";
</script>

<Button
	on:click={() => {
		localStorage.setItem("colorTheme", "light");
		document.body.classList.remove("light", "dark");
		document.body.classList.add("light");
	}}>Light</Button
>
<Button
	on:click={() => {
		localStorage.setItem("colorTheme", "dark");
		document.body.classList.remove("light", "dark");
		document.body.classList.add("dark");
	}}>Dark</Button
>
