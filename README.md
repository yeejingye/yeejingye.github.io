# yeejingye.github.io

Personal portfolio site built with Vite + React + TypeScript.

## Tech

- Vite, React, TypeScript
- React Router (client-side routes)
- Tailwind CSS + shadcn/ui primitives

## Codebase structure

```text
.
├─ src/
│  ├─ main.tsx                  # React entry
│  ├─ App.tsx                   # Router + app providers
│  ├─ pages/                    # Route-level pages
│  │  ├─ Index.tsx
│  │  ├─ About.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Publications.tsx
│  │  ├─ Contact.tsx
│  │  └─ NotFound.tsx
│  ├─ components/
│  │  ├─ layout/                # Navigation, footer, page shell
│  │  ├─ archive/               # Personal Archive components
│  │  ├─ projects/              # Project card(s)
│  │  ├─ education/             # Education list/cards
│  │  ├─ work/                  # Work list/cards
│  │  ├─ ui/                    # shadcn/ui primitives
│  │  └─ NavLink.tsx
│  ├─ utils/                    # Content-ish helpers/data
│  │  ├─ education.ts
│  │  └─ work.ts
│  ├─ hooks/                    # Reusable hooks
│  └─ lib/utils.ts              # Shared utilities (e.g. className helpers)
├─ public/                      # Static assets copied as-is
├─ index.html                   # HTML shell (loads /src/main.tsx)
├─ vite.config.ts               # Vite config (+ base path logic)
├─ tailwind.config.ts           # Tailwind config
└─ .github/workflows/pages.yml  # GitHub Pages build + deploy
```

## Routes

Defined in `src/App.tsx`:

- `/` → `Index`
- `/about` → `About`
- `/projects` → `Projects`
- `/publications` → `Publications`
- `/contact` → `Contact`
- `*` → `NotFound`

## Development

```bash
npm ci
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## GitHub Pages (yeejingye.github.io / custom domain)

- Deploy the built output (`dist/`), not the source root.
- This repo uses GitHub Actions (`.github/workflows/pages.yml`) to build and publish `dist/`.
- The workflow copies `CNAME` into `dist/` and adds `dist/.nojekyll`.

Notes:

- `vite.config.ts` sets `base` from `VITE_BASE` (preferred) and otherwise infers it from `GITHUB_REPOSITORY`.
- `src/App.tsx` configures React Router’s `basename` from `import.meta.env.BASE_URL`.

## Generated / legacy folders

- `dist/` is Vite build output.
- `docs/` contains static site artifacts from an older Pages setup (current deployment uses Actions + `dist/`).
