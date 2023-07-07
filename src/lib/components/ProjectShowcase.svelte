<script lang="ts">
	import type { Project } from '$lib/typings';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$components/ui/card';

	export let projects: Project[];
</script>

<div class="not-prose grid grid-cols-2 gap-4">
	{#each projects as project}
		<a href={`/projects/${project.slug}`}>
			<Card>
				<CardHeader>
					<CardTitle>{project.title}</CardTitle>
					<CardDescription>{project.description}</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
			</Card>
		</a>
	{/each}
</div>
