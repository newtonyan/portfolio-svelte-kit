---
title: Introduction
description: To get you started, this article will provide an overview of my education, languages, skills and certificates.
---

<script lang="ts">
    import SkillShowcase from '$components/SkillShowcase.svelte';
	import { AspectRatio } from "$components/ui/aspect-ratio";
	export let data;
</script>

<svelte:head>

<title>{title} | Newton Yan</title>
<meta property="og:type" content="article" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="description" content={description} />
</svelte:head>

# Introduction

To get you started, this article will provide an overview of my education, languages, skills and certificates. This information will help you get to know me better and give you an idea of my background.

## Overview

<div class="not-prose">
		<img class="h-56 w-56 rounded-lg ring-primary/70 ring-4 bg-secondary" src="/avatar.png">
</div>

I’m `Newton Yan` from Hong Kong, currently based in `Toronto, ON, Canada`. A passionate full stack web developer with 3 years of experience in creating high quality website and responsive web
application. I have experience working with and have solid understanding in various web frameworks such as `Angular` and `SvelteKit`. Strong problem-solving skills and
able to work collaboratively in a team environment. I'm eager to continue learning new technologies and adapting to new challenges.

## Education

The Chinese University of Hong Kong `(2015-2019)`

```js
education.push({
	program: "B.Eng. in Systems Engineering and Engineering Management",
	honors: "Second Class Upper Division",
	awards: [
		"Outstanding Students Awards 2019",
		"The Professor Julie Hung Hsua Yu Scholarship for Intellectual Excel-leration",
		"The Yen Scholarship for Academic Excellence"
	];
})
```

## Languages

I am fluent in `Cantonese` (native proficiency), `English`, and `Mandarin`.

## Skills

Over the years, I have experimented with different technologies. My current `favorite tech stack` includes:
<SkillShowcase list={data.favouriteStack}/>

In addition to my current favorite tech stack, I also have experience working with the following technologies:
<SkillShowcase list={data.intermediateStack}/>

And here are some of the technologies which I have learned in my free time. Although they may not be directly related to my job, I believe they are valuable skills to have in my toolkit:
<SkillShowcase list={data.otherTools}/>

## Certificates

<SkillShowcase list={data.certificates}/>
