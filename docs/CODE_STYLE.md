# Code Style & Quality Standards

This document describes the naming standards, styling conventions, and developer guidelines for MapWork.

---

## 🏷️ Naming Standards

*   **Files**:
    *   React Components: PascalCase (e.g., `DiscoveryEngine.jsx`, `RoutePlanning.jsx`).
    *   Pages and layouts: lowercase (e.g., `page.jsx`, `layout.jsx`, `globals.css`).
*   **Variables & Functions**: camelCase (e.g., `activeSection`, `handleScroll`).
*   **CSS Classes**: kebab-case (e.g., `.logo-subtext`, `.mobile-drawer`, `.navbar-wrapper`).

---

## ⚡ React Component Templates
Every layout section component should reside inside `src/components/` and adopt the structure below:
```javascript
"use client"; // Include only when using hooks, refs, or DOM observers

import React from 'react';

export default function ComponentName({ propA, propB }) {
  return (
    <section className="section-wrapper" id="target-id">
      <div className="container">
        <h2>Header Text</h2>
      </div>
    </section>
  );
}
```

---

## 🛠️ Imports Order Guidelines
1.  React and official dependencies (`useState`, `next/link`).
2.  Internal components (`src/components/...`).
3.  Static graphics and assets (`src/assets/...`).
4.  Global stylesheet rules (`globals.css`).

---

## 🔍 Linter Rules (Oxlint Verification)
Code must resolve all linter rules in `.oxlintrc.json` cleanly. Avoid using empty catch clauses or leaving debugging indicators (like `console.log`) in production code.
