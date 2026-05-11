> [!Warning]
> The site is in active development. Some information is placeholder / wrong.

# Q-Neko Website

The public website for the Q-Neko project (Nippon-Europe Quantum Koraborēshon) — a Horizon Europe / EuroHPC JU / Japan SIP funded collaboration advancing hybrid HPC+AI+QC.

Built with [Astro 6](https://astro.build), Tailwind CSS v4, React, and Pagefind for static search.

## Quick start

Requires Node.js ≥ 22.12.0. It is recommended to use (nvm)[https://github.com/nvm-sh/nvm#installing-and-updating] to install node.

Once nvm is installed run:

```sh
nvm install 24
nvm use 24
```

Then clone this repository and navigate to it and run:

```sh
npm install
npm run dev        # dev server at localhost:4321
npm run build      # production build to ./dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
├── components/
│   ├── layout/        # Nav, Footer, LanguageSwitcher, NavMobile (React)
│   ├── mainPage/      # Hero, Mission, Partners, Funding, RecentActivity
│   ├── pages/         # Shared page-body components (used by both EN and JA routes)
│   ├── blog/          # PostContent (renders a single news post)
│   └── ui/            # EntryCard (reusable card for news, events, results)
├── content/
│   └── news/          # Markdown news posts (.md / .mdx)
├── i18n/
│   ├── types.ts       # Translations interface - add keys here first
│   ├── en.ts          # English strings
│   ├── ja.ts          # Japanese strings (placeholders until translated)
│   └── index.ts       # useTranslations(locale) helper
├── layouts/           # Layout.astro, PageLayout.astro
├── pages/             # English routes (no prefix)
│   ├── index.astro
│   ├── news/[page].astro
│   ├── news/[title].astro
│   ├── events.astro
│   ├── results.astro
│   ├── media.astro
│   ├── newsletter.astro
│   ├── contact.astro
│   └── search/
└── pages/ja/          # Japanese routes (/ja/...)
    └── (mirrors pages/ structure)
```

## Internationalization (i18n)

The site supports English (`/`) and Japanese (`/ja/`) via Astro's built-in i18n routing with `prefixDefaultLocale: false`.

**To add or update a translated string:**

1. Add the key to `src/i18n/types.ts` (TypeScript will error on any locale missing the key)
2. Add the English value to `src/i18n/en.ts`
3. Add the Japanese value (or placeholder) to `src/i18n/ja.ts`

**To use translations in a component:**

```astro
---
const { lang } = Astro.props;
const t = useTranslations(lang);
---
<h1>{t.hero.headline1}</h1>
```

Locale-aware hrefs use a `base` prefix:

```ts
const base = lang === "ja" ? "/ja" : "";
// then: href={`${base}/news`}
```

## Content collections

News posts live in `src/content/news/` as Markdown files. Required frontmatter:

```yaml
---
title: "Post title"
slug: "url-slug"
date: 2026-01-01
description: "Short description shown in cards"
author: "Author name"
type: "News"          # displayed as the card meta label
tags: ["tag1", "tag2"]
lang: en              # en or ja
---
```

English posts use `lang: en`, Japanese posts use `lang: ja`. Each language's paginated listing only shows posts matching its language.

## Recent Activity section

`src/components/mainPage/RecentActivity.astro` pulls the newest items from configured sources and shows them on the homepage. To change which sources are included, edit the `ENABLED_SOURCES` array near the top of that file:

```ts
const ENABLED_SOURCES = [
  "news",
  // "events",   // uncomment when events become a content collection
  // "results",  // uncomment when results become a content collection
] as const satisfies ReadonlyArray<"news" | "events" | "results">;
```

## Adding a new page

1. Create `src/components/pages/MyPage.astro` with `lang` prop and your content
2. Create `src/pages/my-page.astro` (EN) and `src/pages/ja/my-page.astro` (JA) as thin wrappers:

```astro
---
import PageLayout from "../../layouts/PageLayout.astro";
import MyPage from "../../components/pages/MyPage.astro";
const lang = Astro.currentLocale ?? "en";
---
<PageLayout title="My Page"><MyPage lang={lang} /></PageLayout>
```

3. Add the nav link to `src/components/layout/Nav.astro`
4. Add the page title string to the `Translations` interface and both locale files
