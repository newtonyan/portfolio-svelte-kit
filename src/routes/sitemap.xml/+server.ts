import type { Project } from "$lib/types";

export async function GET({ fetch }) {
	const response = await fetch("/api/projects");
	const projects: Project[] = await response.json();
	return new Response(
		`
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >
            <url>
                <loc>https://www.newtonyan.com/</loc>
                <priority>1.00</priority>
            </url>
            <url>
                <loc>https://www.newtonyan.com/work-experience</loc>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://www.newtonyan.com/volunteering</loc>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://www.newtonyan.com/projects/overview</loc>
                <priority>0.80</priority>
            </url>
            ${projects
							.map(
								(project) => `<url>
            <loc>https://www.newtonyan.com/projects/${project.slug}</loc>
            <priority>0.80</priority></url>
            `
							)
							.join("")}
            
        </urlset>`.trim(),
		{
			headers: {
				"Content-Type": "application/xml"
			}
		}
	);
}
