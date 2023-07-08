import type { MenuItem, Project } from "$lib/types";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load: LayoutServerLoad = async ({ fetch, route }) => {
	const response = await fetch("/api/projects");
	const projects: Project[] = await response.json();
	const projectMenuItems: MenuItem[] = projects.map((project) => {
		return {
			title: `Showcase: ${project.shortTitle ?? project.title}`,
			slug: project.slug
		};
	});
	return { projectMenuItems, projects };
};
