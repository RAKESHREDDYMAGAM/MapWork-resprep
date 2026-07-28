# Performance Guidelines

This document provides optimization targets and image/script budgets to maintain fast pages loading.

---

## 📈 Current Best Practices

### 1. Image Optimization
All visual layouts (e.g. `hero.png`, `discovery.png`, `route_planning.png` in `src/assets/`) are imported and compiled using standard React image handlers:
*   Always keep image asset files compressed (under 200kb) and trace raw images cleanly.
*   We recommend migrating core images to the Next.js `<Image>` component (`next/image`) for automatic WebP conversion and lazy-loading support.

### 2. CSS Size Budgets
Vanilla CSS custom variables inside `globals.css` prevent styles compile bloat.
*   Keep files clean and avoid duplicating declarations.
*   Responsive styles are scoped inside mobile media queries (`@media (max-width: 640px)`) to limit styles evaluation complexity on mobile viewports.

---

## 🚀 Performance Metrics (Lighthouse Budgets)
To ensure the website loads instantly even on slow 3G networks, aim for the following Lighthouse scores:

| Diagnostic Metric | Target | Action to Support Target |
| :--- | :--- | :--- |
| **First Contentful Paint (FCP)**| < 0.8s | Keep CSS small; load essential fonts early. |
| **Largest Contentful Paint (LCP)**| < 1.2s | Optimize hero image sizes; set high priority tags. |
| **Cumulative Layout Shift (CLS)** | < 0.05 | Declare width/height bounds on images. |
| **Total Blocking Time (TBT)** | < 100ms | Keep inline JS listeners to a minimum. |
