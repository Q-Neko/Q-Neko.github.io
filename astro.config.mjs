// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), pagefind()],

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },

  redirects: {
    "/posts": "/posts/1",
  },

  vite: {
    plugins: [tailwindcss()]
  }
});