import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex, escapeSvelte } from "mdsvex";
import shiki from "shiki";
import rehypeSlug from "rehype-slug";

async function highlighter(code, lang) {
	const highlighter = await shiki.getHighlighter({ theme: "css-variables" });
	const tokens = highlighter.codeToThemedTokens(code, lang);

	const html = escapeSvelte(
		shiki.renderToHtml(tokens, {
			bg: "var(--shiki-color-background)"
		})
	);
	return `{@html \`${html}\` }`;
}

/** @type {import('@jsdevtools/rehype-toc').Options} */
const rehypeTocOptions = {
	headings: ["h2"]
};

/** @type {import('mdsvex').MdsvexOptions}*/
const mdsvexOptions = {
	extensions: [".md"],
	highlight: {
		highlighter
	},
	rehypePlugins: [rehypeSlug],
	remarkPlugins: []
};

/** @type {import('@sveltejs/kit').Config}*/
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$components: "src/lib/components",
			"$components/*": "src/lib/components/*"
		}
	},
	extensions: [".svelte", ".md"],
	shadcn: {
		componentPath: "./src/lib/components/ui"
	}
};
export default config;
