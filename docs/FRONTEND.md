# Frontend Architecture

This document outlines the MapWork user interface code structure, style rules, and rendering behaviors.

---

## ⚛️ Page & Component Layouts
MapWork is rendered through `src/app/page.jsx` as a single, compiled landing page containing modular section blocks:

```text
[Root Layout (layout.jsx)]
   │
   └─── [Page Orchestrator (page.jsx)]
           ├── Navbar Component (navbar-wrapper)
           ├── Hero Component (hero-grid)
           ├── Problem Component (cards-grid-7)
           ├── DiscoveryEngine Component (two-col-layout)
           ├── Database Component (database-layout)
           ├── RoutePlanning Component (stats-cards-grid)
           ├── Industries Component (industries-grid)
           ├── Roadmap Component (roadmap-grid)
           └── Footer Component (footer-wrapper)
```

---

## 🎨 Global Styles & Custom Variables
Styling is configured inside `src/app/globals.css`. Design tokens are stored inside the `:root` pseudo-selector, regulating layout colors, fonts, shadow elevations, and transitions:

```css
:root {
  --color-primary-navy: #0B1F45;
  --color-accent-red: #C81E3A;
  --font-heading: 'Outfit', 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow-lg: 0 6px 12px rgba(11, 31, 69, 0.05);
}
```

---

## 🎬 Scroll Reveal Animations
To present a premium SaaS aesthetic, elements throughout the sections transition smoothly as they enter the client's screen.
1.  **CSS Animation Properties**: Classes marked with `.reveal` are hidden initially:
    ```css
    .reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }
    ```
2.  **Observer Trigger**: An `IntersectionObserver` executes inside `src/app/page.jsx` on load, checking when elements display inside the viewport and appending the `.active` class to reveal them.
