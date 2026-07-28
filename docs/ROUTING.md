# Routing Specification

MapWork uses Next.js App Router-based page structure to compile layout streams.

---

## 🗺️ Current Path Architecture

The application is structured as a **Single Page Application (SPA)** that routes all traffic through the root address `/`:

| Path | Layout Entry | Render Type | Core Functionality |
| :--- | :--- | :--- | :--- |
| **`/`** | `src/app/page.jsx` | SSG (Static) | Primary landing page orchestrator |

All sub-sections rely on relative anchor links inside the client page:
*   `#home` -> Opening Hero fold.
*   `#features` -> Technical modules (Problem, Discovery Engine, Database, Route Planning).
*   `#pricing` -> Planned pricing modules.
*   `#about` -> Platform target sectors.
*   `#contact` -> Support links.

---

## 🔮 Future Multi-page Route Expansion Plan
To add standalone pathways (About Us, Contact Us, Blog), the folder structure inside `src/app/` will be extended as follows:

```text
src/app/
├── layout.jsx
├── page.jsx
├── about/
│   └── page.jsx        # Routes as /about
├── contact/
│   └── page.jsx        # Routes as /contact
└── blog/
    ├── page.jsx        # Routes as /blog (Listing page)
    └── [slug]/
        └── page.jsx    # Routes as /blog/:slug (Article details)
```

---

## 🔄 Shared Layout & Root Styling
*   All routes inherit properties from `src/app/layout.jsx`.
*   Page components load and render within the root layout's `{children}` parameter.
*   Shared global styling rules in `globals.css` apply automatically to all pages.
