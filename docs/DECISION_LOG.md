# Decision Log

This log lists the main architectural decisions made during MapWork development.

---

## ADR 01: Migration from React Vite SPA to Next.js App Router

### Context
MapWork was originally created as a pure client-side React Single Page Application compiled by Vite (using `vite.config.js` and `index.html` entries). This approach led to layout shifts during loading, complex routing configuration, and poor SEO visibility.

### Decision
Migrated to **Next.js 15.5 App Router**. 
*   Removed `vite.config.js`, `index.html`, `src/App.css`, `src/App.jsx`, and `src/main.jsx`.
*   Created App template structures inside `src/app/`: `layout.jsx` and `page.jsx`.

### Trade-offs & Consequences
*   **Pros**: Instant server pre-rendering (SSG), standard SEO metadata config, simplified layout nesting.
*   **Cons**: Increased node package dependencies and longer initial compilation times during development.

---

## ADR 02: Relocation of CSS Styles to `globals.css`

### Context
In the early Vite setup, layout styles were split across `src/App.css`, `src/index.css`, and various local component sheets.

### Decision
Merged styles into a single **`src/app/globals.css`** file.

### Trade-offs & Consequences
*   **Pros**: Clear visual token definitions, easier access to color classes, and zero overhead from stylesheet compilation.
*   **Cons**: The single stylesheet is large, requiring careful sectioning of classes.

---

## ADR 03: Standalone Trace Output Port configuration (Port 3080)

### Context
Standard Next.js defaults to port 3000, which often collides with local client APIs, Docker containers, or parallel developer servers.

### Decision
Configured the local server to run on port **3080** via `package.json` package scripts (`dev` and `start` flags).

### Trade-offs & Consequences
*   **Pros**: Avoids port collisions.
*   **Cons**: Developers must remember to configure external web reverse-proxies to target port 3080.
