export type Skill = 'svelte' | 'tailwindcss' | 'nextjs';
export type Category = 'Website' | 'Web app';

export type Project = {
	title: string;
	shortTitle?: string;
	slug: string;
	description: string;
	skills: Skill[];
	published: boolean;
	category: Category;
};

export interface MenuItem {
	title: string;
	slug: string;
}

export interface MenuGroup {
	title: string;
	slug?: string;
	children: MenuItem[];
}
