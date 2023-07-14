---
title: LOCUS
description: Created a augmented reality mobile game prototype inspired by Pokemon Go with Unity.
skills:
  - unity
published: true
category: Website
tags:
  - Mobile Game
  - AR
thumbnail: thumbnail.png
date: 2018-12-15
---

<script lang="ts">
import SkillShowcase from '$components/SkillShowcase.svelte';
import { AspectRatio } from "$components/ui/aspect-ratio";
</script>

## Overview

This is the one of my `final year projects` in the university. This game is designed mainly for `newly admitted students` who are going to join the orientation day. The objective of the game is to provide an engaging and interactive way for them to explore CUHK's campus, history and culture.

We present the campus as an `overworld map` and allow the player to complete mini-games and collect gems in checkpoints while navigating through the campus. Some checkpoints also provides interesting stories and background
information about the places. For example, the shape of The Gate of Wisdom is designed like
two people fighting with each other, symbolizing the intellectual interactions between
scholars.

## Role

This is a group project that involves a team of four people studying different majors. As the only engineering student in the team, I am responsible for most of the the `programming tasks`. In addition, I also involved heavily in the `UI and graphics design` process.

## Features

The game is built with `Unity`, a cross platform game engine. Unity has a large and active development community, which provides access to a vast library of assets and resources.

### Overworld

The overworld of the game is generated in real time based on the GPS location of the player.
The buildings and the landscape on the map are based on the real-life environment of CUHK
using the Maps SDK from `Mapbox`.

### Augmented Reality

We use the `Vuforia Engine SDK` for creating mini-games with augmented reality (AR) functionality. We implemented `Image Target Tracking` and `Extended Tracking` in our mini-games.

#### Image Target Tracking

We created a mini-game based on the myth that a student will not be able to graduate from
the university if they passes through the `Gate of Wisdom`, a sculpture by Ju Ming, a famous Taiwanese sculptor, located in the CUHK.

In order to play the mini-game, the user has to scan the plaque fixed in front of the Gate of Wisdom. Once they scan the plaque, a virtual Gate of Wisdom will be mounted to the screen using `Image Target Tracking` and the user can start playing the game.

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
    <div class="grid gap-4 content-start">
      <AspectRatio ratio={223 / 400}>
            <img class="h-auto max-w-full rounded-sm bg-secondary" src="/projects/locus/gate-of-wisdom-tracking.gif" alt="Gif of image target tracking"/>
        </AspectRatio>
    </div>
    <div class="grid gap-4 content-start col-span-2">
        <AspectRatio ratio={16 / 9}>
            <img class="h-auto max-w-full rounded-sm bg-secondary" src="/projects/locus/gate-of-wisdom.jpg" alt="Picture of Gate of Wisdom"/>
        </AspectRatio>
    </div>
</div>

#### Extended Tracking

"Dem Beat", short for "Demostration of beat" is a unique culture originated at CUHK. It usually involves a group of people creating rhythmic beats by clapping their hands and stomping on the ground. We recreate the famous "Woo Sing Beat" into a rhythm game integrated with AR. With `Extended Tracking`, users can place the avatar on the ground and the avatar will still be fixed to the same spot as they move around.

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
    <div class="grid gap-4 content-start">
      <AspectRatio ratio={223 / 400}>
            <img class="h-auto max-w-full rounded-sm bg-secondary" src="/projects/locus/dem-beat.gif" alt="Gif of dem beat"/>
        </AspectRatio>
    </div>
    <div class="grid gap-4 content-start md:col-span-2">
    <AspectRatio ratio={16 / 9}>
      <iframe class="aspect-video w-full" src="https://www.youtube.com/embed/EIbXvGFBNYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </AspectRatio>
    </div>
</div>
