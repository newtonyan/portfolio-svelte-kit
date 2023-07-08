import type { IconifyIcon } from "@iconify/svelte";

export type Skill =
	| "svelte"
	| "tailwindcss"
	| "nextjs"
	| "html"
	| "css"
	| "javascript"
	| "typescript"
	| "angular"
	| "react"
	| "java"
	| "cs"
	| "mongodb"
	| "expressjs"
	| "mysql"
	| "aws"
	| "git";
export type Category = "Website" | "Web app";

export type Project = {
	title: string;
	shortTitle?: string;
	slug: string;
	description: string;
	skills: Skill[];
	tags: string[];
	published: boolean;
	category: Category;
};

export type MenuItem = {
	title: string;
	slug: string;
};

export type MenuGroup = {
	title: string;
	slug?: string;
	children: MenuItem[];
};

export type Stack = {
	name: string;
	level: "intermediate" | "proficient";
	icon: IconifyIcon;
	website?: string;
};
