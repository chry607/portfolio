# Portfolio Content Guide

This file shows where to edit your portfolio content quickly.

## Main Content Files

- `app/data/portfolio.ts`
  - Edit all core portfolio content:
    - project titles, descriptions, metrics
    - project categories via `projectCategories`
    - project `category` per project (`swe`, `ai-ds`, `quant`, `research`, or your own custom id)
    - project tech stack tags
    - project `githubUrl` and `liveUrl`
    - contact links via `profile` (`email`, `github`, `linkedin`)
    - resume links via `profile` (`resumeSwe`, `resumeDataAi`)
    - talks and extracurricular entries (`talks`, `activities`)
- `app/pages/index.vue`
  - Homepage structure and section ordering.
- `app/pages/projects.vue`
  - Projects listing page layout.
- `app/pages/projects/[slug].vue`
  - Project detail page layout.
- `app/pages/about.vue`
  - About page copy and sections.
- `app/pages/contact.vue`
  - Contact CTA and profile links.
- `app/pages/about.vue`
  - Includes mission, focus areas, talks/seminars, and extracurricular sections.

## Layout and App Shell

- `app/layouts/default.vue`
  - Main navbar, footer, and global shell.
- `app/layouts/focus.vue`
  - Alternate layout for project case-study pages.
- `app/app.vue`
  - Global meta/SEO and `NuxtLayout` mount point.

## Theme and Visual Styling

- `app/assets/css/main.css`
  - Light mode + dark mode theme styles
  - Grid background, panel surfaces, glow/orb effects
- `app/app.config.ts`
  - Nuxt UI color configuration (primary/neutral).

## Quick Edit Checklist

1. Replace placeholder links in `app/data/portfolio.ts` under `profile`.
2. Update project details, categories, and links in `app/data/portfolio.ts`.
3. Adjust nav labels in `app/layouts/default.vue` if needed.
4. Update talks and extracurricular entries in `app/data/portfolio.ts`.
5. Tune colors/contrast in `app/assets/css/main.css`.

## Run Locally

- `npm run dev`
- `npm run lint`
- `npm run typecheck`
