# Common Ground — Demo

A parent support platform concept for autism families, by Texas ABA Centers. This is a self-contained demo with mock data — no backend, no auth, no environment variables required.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (Texas ABA Centers brand palette)
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Language:** TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

That's it — no env vars, no database, no setup needed.

## What's in the Demo

- **Landing page** — Hero, stats, feature cards, empathy section, CTA
- **Dashboard home** — Welcome banner, quick-action cards, featured resources
- **Resource Hub** — 10 mock resources with category filters, search, and save/bookmark
- **Guided Next Steps** — 4 phased pathways with interactive checklists and progress tracking
- **Support Services** — Provider directory with type filters (therapists, groups, hotlines, respite, advocacy)
- **Community** — Local groups, online communities, and event listings

## Project Structure

```
src/
├── app/
│   ├── dashboard/
│   │   ├── page.tsx           # Dashboard home
│   │   ├── layout.tsx         # Sidebar shell
│   │   ├── resources/         # Resource hub
│   │   ├── next-steps/        # Guided pathways
│   │   ├── support/           # Provider directory
│   │   └── community/         # Groups & events
│   ├── globals.css            # Tailwind + brand styles
│   ├── layout.tsx             # Root layout + fonts
│   └── page.tsx               # Landing page
├── components/
│   └── layout/
│       └── DashboardShell.tsx # Sidebar navigation
└── lib/
    ├── data.ts                # All mock data + types
    └── utils.ts               # cn(), formatDate(), etc.
```

## Brand Palette

| Token               | Hex       | Usage                  |
|----------------------|-----------|------------------------|
| `brand-navy-500`     | `#1a3264` | Primary actions, links  |
| `brand-red-500`      | `#c8364c` | Accent, CTAs, alerts    |
| `brand-burgundy-500` | `#8c2040` | Secondary accent        |
| `brand-purple-500`   | `#3c2264` | Tertiary accent         |
| `brand-warm-500`     | `#f0cf8e` | Warm backgrounds        |
