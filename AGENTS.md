# Agent Instructions

## Stack

Astro + Tailwind + pnpm. Use pnpm only, never npm/yarn.

## Styling

Full brand/style rules: see `.ai/styling.md`. Read before any UI work.

Quick refs (full detail in styling.md):

- Colors as Tailwind theme tokens in `tailwind.config.mjs` — use token names (`bg-deep-blue`, `text-neon-yellow`) not raw hex.
- Fonts: Fira Sans (headings), Overpass (body), Fira Code (code).
- Never: yellow bg, red bg, headline in yellow, unapproved logo edits.

## Commands

- `pnpm dev` — local server
- `pnpm build` — prod build
- `pnpm check` — astro type check (run before commit)

## Conventions

- Components: PascalCase `.astro` files in `src/components/`
- Utility classes only, no inline styles
- Images: always wrap in rounded/circle holding shape per style guide
