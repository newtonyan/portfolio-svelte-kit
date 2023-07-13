import type { MenuItem, Project } from "$lib/types";
import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load: LayoutServerLoad = async ({ fetch, route, url }) => {
	const response = await fetch("/api/projects");
	const projects: Project[] = await response.json();
	const projectMenuItems: MenuItem[] = projects
		.sort((prev, current) => (prev.date > current.date ? -1 : 1))
		.map((project) => {
			return {
				title: `Showcase: ${project.shortTitle ?? project.title}`,
				slug: project.slug
			};
		});
	return { projectMenuItems, projects, url: url.pathname };
};
