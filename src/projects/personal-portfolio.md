---
title: Personal Portfolio
description: Static personal portfolio site using SvelteKit and Markdown
published: true
tags:
  - Website
url: https://www.newtonyan.com
displayUrl: newtonyan.com
githubRepo: https://github.com/newtonyan/portfolio-svelte-kit
thumbnail: thumbnail.png
date: 2023-07-15
---

<script lang="ts">
import SkillShowcase from '$components/SkillShowcase.svelte';
import { AspectRatio } from "$components/ui/aspect-ratio";
import type { Stack } from "$lib/types";
import svelteIcon from "@iconify/icons-skill-icons/svelte";
import tailwindIconDark from "@iconify/icons-skill-icons/tailwindcss-dark";
import tailwindIcon from "@iconify/icons-skill-icons/tailwindcss-light";
import vercelIconDark from "@iconify/icons-skill-icons/vercel-dark";
import vercelIcon from "@iconify/icons-skill-icons/vercel-light";
import markdownIconDark from "@iconify/icons-skill-icons/markdown-dark";
import markdownIcon from "@iconify/icons-skill-icons/markdown-light";
const website: Stack[] = [
		{
			name: "SvelteKit",
			icon: { light: svelteIcon }
		}, 
    {
			name: "Markdown",
			icon: { light: markdownIconDark, dark: markdownIcon }
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

This is the website you are seeing right now. It aims to give a brief introduction of myself, highlighting my education, skills, work experience.

## Stack

<SkillShowcase list={website}/>

The website is built using `SvelteKit` and use `Markdown` as the content source. Using `Tailwind` made it easy to create adaptive user interfaces, as well as dark mode support. It is deployed to `Vercel` as a static website.
