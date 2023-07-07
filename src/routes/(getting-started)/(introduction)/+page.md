<script lang="ts">
    import SkillShowcase from '$components/SkillShowcase.svelte';
	export let data;
</script>

<svelte:head>
<title>Introduction | Newton Yan</title>
</svelte:head>

# Introduction

To get you started, this article will provide an overview of my education, languages and skills. This information will help you get to know me better and give you an idea of my background.

## Overview

I’m Newton Yan from `Hong Kong`, currently based in `Toronto, ON, Canada`. A passionate frontend web developer with 3 years of experience in creating visually engaging and responsive web
application. Proficient in various web frameworks such as Angular and SvelteKit. Strong problem-solving skills and
able to work collaboratively in a team environment. Eager to continue learning new technologies and adapting to new
challenges.

## Education

The Chinese University of Hong Kong (2015-2019)

```js {1-3}
education = {
	program: "B.Eng. in Systems Engineering and Engineering Management",
	honors: "Second Class Upper Division",
	awards: [
		"Outstanding Students Awards 2019",
		"The Professor Julie Hung Hsua Yu Scholarship for Intellectual Excel-leration",
		"The Yen Scholarship for Academic Excellence"
	];
}
```

## Languages

I am fluent in Cantonese (native proficiency), Mandarin, and English.

## Skills

Over the years, I have experimented with different technologies. My current favorite tech stack includes:
<SkillShowcase list={data.favouriteStack}/>

In addition to my current favorite tech stack, I also have experience working with the following technologies:
<SkillShowcase list={data.intermediateStack}/>

And here are some of the technologies which I have learned in my free time. Although they may not be directly related to my job, I believe they are valuable skills to have in my toolkit:
<SkillShowcase list={data.otherTools}/>
