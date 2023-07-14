---
title: Raleigh Challenge - Mountain Marathon
shortTitle: RCMM
description: Developed a static website using a headless CMS, plus a full stack web application for race registration.
published: true
tags:
  - Full Stack
  - Website
url: https://www.raleighmountainmarathon.hk
displayUrl: raleighmountainmarathon.hk
thumbnail: thumbnail.png
date: 2023-04-15
---

<script lang="ts">
import SkillShowcase from '$components/SkillShowcase.svelte';
import { AspectRatio } from "$components/ui/aspect-ratio";
import type { Stack } from "$lib/types";
import svelteIcon from "@iconify/icons-skill-icons/svelte";
import mongoIcon from "@iconify/icons-skill-icons/mongodb";
import prismaIcon from "@iconify/icons-skill-icons/prisma";
import tailwindIconDark from "@iconify/icons-skill-icons/tailwindcss-dark";
import tailwindIcon from "@iconify/icons-skill-icons/tailwindcss-light";
import nextIconDark from "@iconify/icons-skill-icons/nextjs-dark";
import nextIcon from "@iconify/icons-skill-icons/nextjs-light";
import sanityIcon from "@iconify/icons-devicon/sanity";
import vercelIconDark from "@iconify/icons-skill-icons/vercel-dark";
import vercelIcon from "@iconify/icons-skill-icons/vercel-light";
const website: Stack[] = [
		{
			name: "SvelteKit",
			icon: { light: svelteIcon }
		}, 
        {
			name: "Sanity",
			icon: { light: sanityIcon },
		},
        {
			name: "Tailwind CSS",
			icon: { light: tailwindIconDark, dark: tailwindIcon },
		},
        {
			name: "Vercel",
			icon: { light: vercelIconDark, dark: vercelIcon },
		},
	];
const registrationPage: Stack[] = [
		{
			name: "SvelteKit",
			icon: { light: svelteIcon }
		}, 
        {
			name: "Prisma",
			icon: { light: prismaIcon }
		},
        {
			name: "MongoDB",
			icon: { light: mongoIcon }
		},
        {
			name: "Tailwind CSS",
			icon: { light: tailwindIconDark, dark: tailwindIcon },
		},
        {
			name: "Vercel",
			icon: { light: vercelIconDark, dark: vercelIcon },
		},
	];
const adminDashboard: Stack[] = [
		{
			name: "Next.js",
			icon: { light: nextIconDark, dark: nextIcon },
		}, 
        {
			name: "Prisma",
			icon: { light: prismaIcon }
		},
        {
			name: "MongoDB",
			icon: { light: mongoIcon }
		},
        {
			name: "Tailwind CSS",
			icon: { light: tailwindIconDark, dark: tailwindIcon },
		},
        {
			name: "Vercel",
			icon: { light: vercelIconDark, dark: vercelIcon },
		},
	];
</script>

## Overview

This is a `voluntary project` for Raleigh Hong Kong (RHK), a registered charity committed to inspiring Hong Kong youth to explore their full potential through participation in programmes held locally and internationally.

I have developed a `Website` and a `Registration System` for the upcoming event of RHK, Raleigh Challenge - Mountain Marathon, a charitable orienteering competition which is making a comeback in 2023 after its last iteration in 2013.

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
    <div class="grid gap-4 content-start">
        <AspectRatio ratio={9 / 16} class="bg-secondary rounded-sm">
            <img class="h-auto max-w-full" src="/projects/rcmm/full-page.png" alt="Website mockup - full page"/>
        </AspectRatio>
        <AspectRatio ratio={4 / 3} class="bg-secondary rounded-sm">
            <img class="h-auto max-w-full" src="/projects/rcmm/registration-mobile.png" alt="Registration system mockup - mobile"/>
        </AspectRatio>
    </div>
    <div class="grid gap-4 content-start">
		<AspectRatio ratio={4 / 3} class="bg-secondary rounded-sm">
			<img class="h-auto max-w-full" src="/projects/rcmm/mobile.png" alt="Website mockup - mobile"/>
		</AspectRatio>
        <AspectRatio ratio={4 / 3} class="bg-secondary rounded-sm">
			<img class="h-auto max-w-full" src="/projects/rcmm/example-page.png" alt="Website mockup - example page"/>
		</AspectRatio>  
		<AspectRatio ratio={4 / 3} class="bg-secondary rounded-sm">
			<img class="h-auto max-w-full" src="/projects/rcmm/dashboard.png" alt="Registration system mockup - dashboard"/>
		</AspectRatio> 
    </div>
</div>

## Role

I am the `sole developer` for this project. I am responsible for both frontend and backend. In addition to my responsibilities as the developer for this project, I actively contribute to the UI design process.

## Website

<SkillShowcase list={website}/>

The website is built with `SvelteKit`, integrated with `Sanity`, a headless CMS, for dynamic content management. The website is built using Static Site Generation (SSG) and deployed to `Vercel`, taking advantage of the fast loading speed and better SEO performance that static site provides.

To style the website efficiently, I used `Tailwind CSS` for the user interface, which enable me to create adaptive user interfaces with ease.

## Registration System

The registration system is comprised of two parts: the user-facing registration page and the admin dashboard. Both components are integrated with `Prisma`, a TypeScript ORM that connects the frontend with the `MongoDB` database. The type-safety provided by `Prisma` improves the development experience and makes the application less error-prone.

User will be receiving automatic emails from the organizer during the registration process, this is made possible by `Resend`, an email API.

### Registration Page

<SkillShowcase list={registrationPage}/>

The registration page is built using `SvelteKit` and features a registration form that is powered by the `Superforms`, a SvelteKit library. To ensure data integrity, the form is integrated with `Zod`, a validation library that helps to validate the user inputs.

### Admin Dashboard

<SkillShowcase list={adminDashboard}/>

The admin dashboard is built with `Next.js`. The user interface is built with `shadcn/ui`, which is a collection of re-usable components built using Radix UI and Tailwind CSS. I used `NextAuth` to implement passwordless authentication with Magic Links. `Nivo` is used to create simple data visualization in the dashboard.
