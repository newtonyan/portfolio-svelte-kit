---
title: Project Overview
description: A brief overview of projects I have done in the past
---

<script lang="ts">
    import ProjectShowcase from '$components/ProjectShowcase.svelte'
    export let data;
</script>

<svelte:head>

<title>{title} | Newton Yan</title>
<meta property="og:type" content="article" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="description" content={description} />
</svelte:head>

# Overview

As a full stack web developer, I specialize in creating responsive web applications using various web frameworks. I have a passion for creating intuitive and user-friendly interfaces that are optimized for all devices. My projects are designed and developed with the latest technologies and trends in mind, ensuring that they are not only functional, but also visually appealing.

## Showcase

<ProjectShowcase projects={data.projects}/>
