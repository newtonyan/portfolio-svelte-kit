<script>
	import Icon from "@iconify/svelte";
	import linkedinIcon from "@iconify/icons-mdi/linkedin";
	import githubIcon from "@iconify/icons-mdi/github";
</script>

<div {...$$props}>
	<div class="flex gap-2 text-muted-foreground">
		<a
			href="https://github.com/newtonyan"
			target="_blank"
			rel="nofollow noreferrer"
			class="rounded-md p-0.5 hover:bg-gradient-to-r hover:from-primary hover:to-indigo-500 hover:text-primary-foreground"
		>
			<Icon
				class="text-4xl transition duration-200 ease-in-out hover:scale-105"
				icon={githubIcon}
			/>
		</a>
		<a
			href="https://www.linkedin.com/in/newton-yan-7a6722199/"
			target="_blank"
			rel="nofollow noreferrer"
			class="rounded-md p-0.5 hover:bg-gradient-to-r hover:from-primary hover:to-indigo-500 hover:text-primary-foreground"
		>
			<Icon
				class="text-4xl transition duration-200 ease-in-out hover:scale-105"
				icon={linkedinIcon}
			/>
		</a>
	</div>
</div>
