# MiniGames

A responsive Single Page Application for browsing, rating and discovering mini web-games. Built as **Story 1** of the RS School MiniGames project: project setup, tooling and the adaptive layout of the Home page and Auth dialog.

## ✨ Stage 1 scope

- Project & tooling setup (Vite, TypeScript, ESLint, Prettier, Husky)
- Sass design tokens & shared style utilities
- Adaptive Home page layout (mobile / tablet / desktop)
- Auth dialog (Login / Registration) layout & interactions

> Backend integration is **out of scope** for this stage. All data on the page is static/mocked.

## 🛠 Tech stack

| Purpose        | Tool                     |
| -------------- | ------------------------ |
| Bundler        | Vite                     |
| Language       | TypeScript               |
| Styles         | Sass (SCSS), CSS Modules-free BEM |
| Linting        | ESLint                   |
| Formatting     | Prettier                 |
| Git hooks      | Husky + lint-staged      |
| Architecture   | Vanilla TS SPA (hash router) |

## 🚀 Getting started

```bash
# install dependencies
npm install

# start dev server
npm run dev

# production build
npm run build

# preview the production build
npm run preview

# lint / format
npm run lint
npm run lint:fix
npm run format
```

## 📁 Project structure

```
minigames/
├── .github/                # PR template
├── .husky/                 # git hooks
├── public/                 # static assets (favicon, etc.)
├── src/
│   ├── components/         # one folder per UI block (markup + styles + logic)
│   ├── pages/               # top level pages (Home, ...)
│   ├── router/              # tiny hash-based SPA router
│   ├── styles/               # design tokens, breakpoints, mixins, global styles
│   ├── types/                # shared TypeScript types
│   ├── utils/                 # shared helpers
│   └── main.ts                # app entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .eslintrc.cjs
└── .prettierrc
```

## 📐 Design tokens

All colors, spacing, font sizes and breakpoints live in `src/styles/_tokens.scss` and `src/styles/_breakpoints.scss`. Components must consume these tokens rather than hard-coded ("magic") values.

Breakpoints used across the app:

| Name    | Range            |
| ------- | ---------------- |
| mobile  | `≤ 768px`         |
| tablet  | `769px – 1279px`  |
| desktop | `≥ 1280px`        |

## 🌿 Branching strategy

- `main` — protected, production-ready code only.
- `develop` — integration branch for the current stage.
- `feature/<task-id>-short-description` — one branch per task (e.g. `feature/RSS-QS-1-4-2-burger-menu`).

Open a Pull Request from your feature branch into `develop`, fill in the PR template, and request a cross-check review before merging.

## ✅ Definition of done (Stage 1)

- [ ] Repo, tooling and scripts configured and working
- [ ] Home page implemented and adaptive at all 3 breakpoints
- [ ] Auth dialog implemented (open/close, switch, validation states)
- [ ] No `console.log`, no `any`, no ESLint/Prettier errors
- [ ] No magic values in CSS — tokens only
- [ ] Favicon present
