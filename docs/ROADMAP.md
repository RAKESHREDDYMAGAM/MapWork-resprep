# Platform Roadmap

This document outlines the development roadmap and planned features for MapWork.

---

## 🗺️ Implementation Phases

### Phase 1: Core Landing Page Recovery (Completed)
*   [x] Migrate from Vite React SPA to Next.js 15 App Router.
*   [x] Fix build crashes caused by Windows environment path locks.
*   [x] Boost footer font size and readability contrast.

### Phase 2: Page Expansion (In Progress)
*   [ ] Add **About Us** page to list the team and product mission.
*   [ ] Add **Contact Us** page with local email validation and honeypot spam protection.
*   [ ] Add **Blog** directory with categories filters and responsive post card layouts.

### Phase 3: Interactive Maps & Leads (Upcoming)
*   [ ] Integrate Mapbox GL JS inside the Geo Discovery Engine to display live coordinate grids.
*   [ ] Build mock lead dashboard pages to allow coordinators to view local placements lists.
*   [ ] Connect PostgreSQL database using Prisma ORM to save scanned search records.

---

## ⚠️ Known Technical Debt
*   **Vanilla CSS size**: The single `globals.css` stylesheet is very large. Consider grouping styles into Next.js CSS Modules (e.g., `Navbar.module.css`) to reduce CSS size per route.
*   **Large Images**: Layout illustrations (`hero.png`, `discovery.png`) should be converted to optimized WebP format to speed up performance.
*   **Server Component Migrations**: Currently, pages in `src/app/page.jsx` are marked with `"use client";` to handle scroll actions. Breaking the page down so parts render as Client Components and others as Server Components will improve page loading speeds.
