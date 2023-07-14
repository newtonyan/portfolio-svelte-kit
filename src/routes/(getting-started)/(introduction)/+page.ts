import type { Stack } from "$lib/types";
import type { PageLoad } from "./$types";
import typescriptIcon from "@iconify/icons-skill-icons/typescript";
import svelteIcon from "@iconify/icons-skill-icons/svelte";
import angularIconDark from "@iconify/icons-skill-icons/angular-dark";
import angularIcon from "@iconify/icons-skill-icons/angular-light";
import reactIconDark from "@iconify/icons-skill-icons/react-dark";
import reactIcon from "@iconify/icons-skill-icons/react-light";
import nextIconDark from "@iconify/icons-skill-icons/nextjs-dark";
import nextIcon from "@iconify/icons-skill-icons/nextjs-light";
import tailwindIconDark from "@iconify/icons-skill-icons/tailwindcss-dark";
import tailwindIcon from "@iconify/icons-skill-icons/tailwindcss-light";
import mongoIcon from "@iconify/icons-skill-icons/mongodb";
import expressIconDark from "@iconify/icons-skill-icons/expressjs-dark";
import expressIcon from "@iconify/icons-skill-icons/expressjs-light";
import prismaIcon from "@iconify/icons-skill-icons/prisma";
import javaIconDark from "@iconify/icons-skill-icons/java-dark";
import javaIcon from "@iconify/icons-skill-icons/java-light";
import unityIconDark from "@iconify/icons-skill-icons/unity-dark";
import unityIcon from "@iconify/icons-skill-icons/unity-light";
import sanityIcon from "@iconify/icons-devicon/sanity";
import ionicIcon from "@iconify/icons-logos/ionic-icon";
import photshopIcon from "@iconify/icons-skill-icons/photoshop";
import premiereIcon from "@iconify/icons-skill-icons/premiere";
import afterEffectsIcon from "@iconify/icons-skill-icons/aftereffects";
import mysqlIconDark from "@iconify/icons-skill-icons/mysql-dark";
import mysqlIcon from "@iconify/icons-skill-icons/mysql-light";

export const load = (() => {
	const favouriteStack: Stack[] = [
		{
			name: "TypeScript",
			icon: { light: typescriptIcon },
			website: "https://www.typescriptlang.org/"
		},
		{
			name: "SvelteKit",
			icon: { light: svelteIcon },
			website: "https://kit.svelte.dev/"
		},
		{
			name: "Tailwind CSS",
			icon: { light: tailwindIconDark, dark: tailwindIcon },
			website: "https://tailwindcss.com/"
		},
		{
			name: "MongoDB",
			icon: { light: mongoIcon },
			website: "https://www.mongodb.com/"
		},
		{
			name: "Prisma",
			icon: { light: prismaIcon },
			website: "https://www.prisma.io/"
		}
	];
	const intermediateStack: Stack[] = [
		{
			name: "Ionic",
			icon: { light: ionicIcon },
			website: "https://ionicframework.com/"
		},
		{
			name: "Angular",
			icon: { light: angularIconDark, dark: angularIcon },
			website: "https://angular.io/"
		},
		{
			name: "React",
			icon: { light: reactIconDark, dark: reactIcon },
			website: "https://react.dev/"
		},
		{
			name: "Next.js",
			icon: { light: nextIconDark, dark: nextIcon },
			website: "https://nextjs.org/"
		},
		{
			name: "Express",
			icon: { light: expressIconDark, dark: expressIcon },
			website: "https://expressjs.com/"
		},
		{
			name: "Sanity",
			icon: { light: sanityIcon },
			website: "https://www.sanity.io/"
		},
		{
			name: "Java",
			icon: { light: javaIconDark, dark: javaIcon },
			website: "https://www.java.com/en/"
		},
		{
			name: "Unity",
			icon: { light: unityIconDark, dark: unityIcon },
			website: "https://unity.com/"
		},
		{
			name: "MySQL",
			icon: { light: mysqlIconDark, dark: mysqlIcon },
			website: "https://www.mysql.com/"
		}
	];
	const otherTools: Stack[] = [
		{
			name: "Photoshop",
			icon: { light: photshopIcon }
		},
		{
			name: "Premiere Pro",
			icon: { light: premiereIcon }
		},
		{
			name: "After Effects",
			icon: { light: afterEffectsIcon }
		}
	];
	const certificates: Stack[] = [
		{
			name: "Professional Scrum Master II",
			icon: { light: "/psmii.png" }
		}
	];
	return { favouriteStack, intermediateStack, otherTools, certificates };
}) satisfies PageLoad;
