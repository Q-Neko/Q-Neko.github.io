> [!Warning]
> The site is in active development. Some information is placeholder / wrong.

# Q-Neko Website

The public website for the Q-Neko project (Nippon-Europe Quantum Koraborēshon) — a Horizon Europe / EuroHPC JU / Japan SIP funded collaboration advancing hybrid HPC+AI+QC.

<img width="1200" height="691" alt="image" src="https://github.com/user-attachments/assets/417c8a25-227c-4c6d-9da9-d38f52ab664f" />


Built with [Astro 6](https://astro.build), Tailwind CSS v4, React, and Pagefind for static search.

## Quick start

Requires Node.js ≥ 22.12.0. It is recommended to use [nvm linux/mac](https://github.com/nvm-sh/nvm#installing-and-updating) or [nvm windows](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) to install node.

Once nvm is installed run:

```sh
nvm install 24
nvm use 24
```

Then clone this repository. If you have not done so already set up an ssh key for github: [generate key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=windows), [add to account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

```sh
git clone git@github.com:Q-Neko/Q-Neko.github.io.git
```

and navigate to the directory

```sh
cd Q-Neko.github.io
```

and run:

```sh
npm install
npm run dev        # dev server at localhost:4321 to preview and see live changes
npm run build      # production build to ./dist/. Builds production readu assets
npm run preview    # preview the production build locally, no live changes
```

## Project structure

```
src/
├── assets/            # Images and static assets imported by components
├── components/
│   ├── layout/        # Nav, NavMobile (React), Footer, LanguageSwitcher, Banner, Newsletter
│   ├── mainPage/      # Hero, Mission, Partners, Funding, RecentActivity
│   ├── pages/         # Shared page-body components (used by both EN and JA routes)
│   ├── blog/          # PostContent, EventContent (render a single news post / event)
│   └── ui/            # EntryCard, PartnerCard, Pagination, ContactFormCard, NewsletterFormCard, PreviousNewsletters
├── content/
│   ├── news/          # Markdown news posts, split by locale (en/, ja/)
│   ├── events/        # Markdown event entries, split by locale (en/, ja/)
│   ├── results/       # Markdown results entries, split by locale (en/, ja/)
│   └── partners/      # partners.json
├── content.config.ts  # Astro content collection schemas
├── i18n/
│   ├── types.ts       # Translations interface - add keys here first
│   ├── en.ts          # English strings
│   ├── ja.ts          # Japanese strings (placeholders until translated)
│   └── index.ts       # useTranslations(locale) helper
├── layouts/           # Layout.astro, PageLayout.astro
├── styles/            # Global Tailwind / CSS
├── pages/             # English routes (no prefix)
│   ├── index.astro
│   ├── 404.astro
│   ├── news.astro
│   ├── news/[title].astro
│   ├── events.astro
│   ├── events/[slug].astro
│   ├── results.astro
│   ├── results/[slug].astro
│   ├── media.astro
│   ├── newsletter.astro
│   ├── contact.astro
│   ├── privacy-policy.astro
│   ├── code-of-conduct.astro
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

There are three content collections — `news`, `events`, and `results` — defined in [src/content.config.ts](src/content.config.ts). Each one is split into `en/` and `ja/` subdirectories; **language is determined by the directory**, not by frontmatter. Each language's paginated listing only shows entries from its own subdirectory.

### News

Markdown files in `src/content/news/{en,ja}/`. Frontmatter:

```yaml
---
title: "Post title"
slug: "url-slug"
date: 2026-01-01
description: "Short description shown in cards"
author: "Author name"
type: "News"                 # displayed as the card meta label
tags: ["tag1", "tag2"]
image: "/news/foo/cover.jpg" # optional
---
```

### Events

Markdown files in `src/content/events/{en,ja}/`. Frontmatter:

```yaml
---
title: "Event title"
slug: "url-slug"
description: "Short description shown in cards"
startDate: 2026-01-20
endDate: 2026-01-22
location: "Tokyo, Japan"     # optional, shown as the card meta label
image: "/placeholder-news.svg" # optional
---
```

### Results

JSON files in `src/content/results/{en,ja}/`. Each entry points at a PDF that lives under `public/files/results/`:

```json
{
  "title": "D1.1 — Collaboration Plan",
  "type": "deliverable",
  "date": "2028-02-15",
  "pdf": "d1.1-collaboration-plan.pdf"
}
```

`type` must be one of: `deliverable`, `milestone`, `publication`, `software`, `presentation`, `poster`. The card meta label is the localized version of this type pulled from `t.pageContent.results.filters[type]`. `image` is optional.

## Recent Activity section

[src/components/mainPage/RecentActivity.astro](src/components/mainPage/RecentActivity.astro) pulls the newest items from the enabled collections and shows them on the homepage. To hide a source, remove it from the `ENABLED_SOURCES` array near the top of that file:

```ts
const ENABLED_SOURCES = [
  "news",
  "events",
  "results",
] as const satisfies ReadonlyArray<"news" | "events" | "results">;
```

Entries from all enabled sources are merged, sorted by date (descending), and the top `MAX_ITEMS` (default 4) are rendered. Each enabled source also gets its own "view all" button linking to the corresponding listing page.

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
