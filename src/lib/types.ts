import type { IconifyIcon } from "@iconify/svelte";

export type Project = {
	title: string;
	shortTitle?: string;
	slug: string;
	description: string;
	tags: string[];
	published: boolean;
	url?: string;
	displayUrl?: string;
	githubRepo?: string;
	thumbnail?: string;
	date: string;
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
	icon: { light: IconifyIcon | string; dark?: IconifyIcon | string };
	website?: string;
};

export type ColorTheme = "light" | "dark";
