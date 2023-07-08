<script>
	import Icon from "@iconify/svelte";
	import linkedinIcon from "@iconify/icons-mdi/linkedin";
	import githubIcon from "@iconify/icons-mdi/github";
</script>

<div {...$$props}>
	<a
		href="https://www.linkedin.com/in/newton-yan-7a6722199/"
		target="_blank"
		rel="nofollow noreferrer"
	>
		<Icon class="text-4xl" icon={linkedinIcon} />
	</a>
	<a href="https://github.com/newtonyan" target="_blank" rel="nofollow noreferrer">
		<Icon class="text-4xl" icon={githubIcon} />
	</a>
</div>
