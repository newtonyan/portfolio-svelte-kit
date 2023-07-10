import type { Skill, Stack } from "$lib/types";
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

export const load = (() => {
	const favouriteStack: Stack[] = [
		{
			name: "TypeScript",
			level: "proficient",
			icon: { light: typescriptIcon },
			website: "https://www.typescriptlang.org/"
		},
		{
			name: "SvelteKit",
			level: "proficient",
			icon: { light: svelteIcon },
			website: "https://kit.svelte.dev/"
		},
		{
			name: "Tailwind CSS",
			level: "proficient",
			icon: { light: tailwindIconDark, dark: tailwindIcon },
			website: "https://tailwindcss.com/"
		},
		{
			name: "MongoDB",
			level: "proficient",
			icon: { light: mongoIcon },
			website: "https://www.mongodb.com/"
		},
		{
			name: "Prisma",
			level: "proficient",
			icon: { light: prismaIcon },
			website: "https://www.prisma.io/"
		}
	];
	const intermediateStack: Stack[] = [
		{
			name: "Ionic",
			level: "intermediate",
			icon: { light: ionicIcon },
			website: "https://ionicframework.com/"
		},
		{
			name: "Angular",
			level: "intermediate",
			icon: { light: angularIconDark, dark: angularIcon },
			website: "https://angular.io/"
		},
		{
			name: "React",
			level: "intermediate",
			icon: { light: reactIconDark, dark: reactIcon },
			website: "https://react.dev/"
		},
		{
			name: "Next.js",
			level: "intermediate",
			icon: { light: nextIconDark, dark: nextIcon },
			website: "https://nextjs.org/"
		},
		{
			name: "Express",
			level: "intermediate",
			icon: { light: expressIconDark, dark: expressIcon },
			website: "https://expressjs.com/"
		},
		{
			name: "Sanity",
			level: "intermediate",
			icon: { light: sanityIcon },
			website: "https://www.sanity.io/"
		},
		{
			name: "Java",
			level: "intermediate",
			icon: { light: javaIconDark, dark: javaIcon },
			website: "https://www.java.com/en/"
		},
		{
			name: "Unity",
			level: "intermediate",
			icon: { light: unityIconDark, dark: unityIcon },
			website: "https://unity.com/"
		}
	];
	const otherTools: Stack[] = [
		{
			name: "Photoshop",
			level: "proficient",
			icon: { light: photshopIcon }
		},
		{
			name: "Premiere Pro",
			level: "proficient",
			icon: { light: premiereIcon }
		},
		{
			name: "After Effects",
			level: "proficient",
			icon: { light: afterEffectsIcon }
		}
	];
	return { favouriteStack, intermediateStack, otherTools };
}) satisfies PageLoad;
