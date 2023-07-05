export type Skill = 'svelte' | 'tailwindcss' | 'nextjs';

export type Project = {
	title: string;
	slug: string;
	description: string;
	skills: Skill[];
	published: boolean;
};
