/// <reference types="astro/client" />

interface FrontMatter {
    title: string;
    heroImage: string;
    description: string;
}

interface Post {
    frontmatter: FrontMatter;
    url: string;
}
