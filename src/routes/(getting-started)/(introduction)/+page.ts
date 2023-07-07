import type { Skill, Stack } from '$lib/typings';
import type { IconifyIcon } from '@iconify/svelte';
import type { PageLoad } from './$types';
import htmlIcon from '@iconify/icons-skill-icons/html';
import cssIcon from '@iconify/icons-skill-icons/css';
import javascriptIcon from '@iconify/icons-skill-icons/javascript';
import typescriptIcon from '@iconify/icons-skill-icons/typescript';
import svelteIcon from '@iconify/icons-skill-icons/svelte';
import angularIcon from '@iconify/icons-skill-icons/angular-dark';
import reactIcon from '@iconify/icons-skill-icons/react-dark';
import nextIcon from '@iconify/icons-skill-icons/nextjs-dark';
import tailwindIcon from '@iconify/icons-skill-icons/tailwindcss-dark';
import mongoIcon from '@iconify/icons-skill-icons/mongodb';
import expressIcon from '@iconify/icons-skill-icons/expressjs-dark';
import prismaIcon from '@iconify/icons-skill-icons/prisma';
import javaIcon from '@iconify/icons-skill-icons/java-dark';
import sanityIcon from '@iconify/icons-devicon/sanity';
import ionicIcon from '@iconify/icons-logos/ionic-icon';
import photshopIcon from '@iconify/icons-skill-icons/photoshop';
import premiereIcon from '@iconify/icons-skill-icons/premiere';
import afterEffectsIcon from '@iconify/icons-skill-icons/aftereffects';

export const load = (() => {
	const favouriteStack: Stack[] = [
		{
			name: 'typescript',
			level: 'proficient',
			icon: typescriptIcon,
			website: 'https://www.typescriptlang.org/'
		},
		{
			name: 'SvelteKit',
			level: 'proficient',
			icon: svelteIcon,
			website: 'https://kit.svelte.dev/'
		},
		{
			name: 'Tailwind CSS',
			level: 'proficient',
			icon: tailwindIcon,
			website: 'https://tailwindcss.com/'
		},
		{ name: 'MongoDB', level: 'proficient', icon: mongoIcon, website: 'https://www.mongodb.com/' },
		{ name: 'Prisma', level: 'proficient', icon: prismaIcon, website: 'https://www.prisma.io/' }
	];
	const intermediateStack: Stack[] = [
		{ name: 'Ionic', level: 'proficient', icon: ionicIcon, website: 'https://ionicframework.com/' },
		{ name: 'Angular', level: 'proficient', icon: angularIcon, website: 'https://angular.io/' },
		{ name: 'React', level: 'proficient', icon: reactIcon, website: 'https://react.dev/' },
		{ name: 'Next.js', level: 'proficient', icon: nextIcon, website: 'https://nextjs.org/' },
		{ name: 'Express', level: 'proficient', icon: expressIcon, website: 'https://expressjs.com/' },
		{ name: 'Sanity', level: 'proficient', icon: sanityIcon, website: 'https://www.sanity.io/' },
		{ name: 'Java', level: 'proficient', icon: javaIcon, website: 'https://www.java.com/en/' }
	];
	const otherTools: Stack[] = [
		{
			name: 'Photoshop',
			level: 'proficient',
			icon: photshopIcon,
			website: 'https://ionicframework.com/'
		},
		{
			name: 'Premiere Pro',
			level: 'proficient',
			icon: premiereIcon,
			website: 'https://angular.io/'
		},
		{
			name: 'After Effects',
			level: 'proficient',
			icon: afterEffectsIcon,
			website: 'https://react.dev/'
		}
	];
	return { favouriteStack, intermediateStack, otherTools };
}) satisfies PageLoad;
