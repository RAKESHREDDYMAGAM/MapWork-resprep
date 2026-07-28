# Search Engine Optimization (SEO)

This document details the search metadata, robots policies, and canonical configs in MapWork.

---

## 📋 Global Metadata

Global metadata values are defined in [layout.jsx](file:///c:/Users/laptop/OneDrive/Desktop/mapwork/src/app/layout.jsx):

*   **HTML Title**: `MapWork | Geo Intelligence Platform for Field Sales & Territory Management`
*   **Description**: `Discover markets, optimize field ops, and execute with precision. MapWork is the geo-intelligence platform built for professional field operations, discovery, map intelligence, and route planning.`
*   **Theme Favicon**: `/favicon.svg` with scalable formatting.

---

## 📡 Open Graph & Social Cards

*   **Types**: `website`
*   **URLs**: `https://mapwork.com`
*   **Twitter Card Configs**: `summary_large_image` to render rich cards in timelines.

---

## 🤖 Crawlers and Indexing
Robots metadata is defined in `layout.jsx` to tell search engines to index the landing page:
```javascript
export const metadata = {
  robots: {
    index: true,
    follow: true,
  }
}
```

---

## 🔮 Recommended SEO Additions

1.  **Sitemap Generation (`sitemap.xml`)**:
    Create a static or dynamic `src/app/sitemap.js` to crawl active pages (like blog articles) and export XML schema.
2.  **Robots Configuration File (`robots.txt`)**:
    Create `public/robots.txt`:
    ```text
    User-agent: *
    Allow: /
    Sitemap: https://mapwork.com/sitemap.xml
    ```
