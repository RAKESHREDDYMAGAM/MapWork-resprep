# Technology Stack

This document details the languages, libraries, compilers, and utilities chosen for the MapWork project, detailing their trade-offs.

---

## 🛠️ Stack Component Index

### Core Framework
*   **Next.js (v15.1.6)**
    *   *Purpose*: Front-end application framework.
    *   *Why Chosen*: Next.js App Router provides built-in code-splitting, SEO metadata support, server-side pre-rendering, and layout rendering right out of the box.
    *   *Alternatives*: Vite + React SPA (used in early development stages).
    *   *Trade-Offs*: App Router adds build-time tracing dependencies, but removes the need for custom routing setups and client-only index files.

### Rendering Engine
*   **React (v19.2.7) / React DOM**
    *   *Purpose*: User interface library.
    *   *Why Chosen*: State hydration, modular updates, and transition support fit MapWork's layout-reveal model.
    *   *Alternatives*: Vue, Svelte.
    *   *Trade-Offs*: Hydration costs, but matches the enterprise developer talent pool.

---

## 🎨 Styling & Presentation Layer

*   **Vanilla CSS with CSS Variables (`globals.css`)**
    *   *Purpose*: Page element styles, dynamic transition keyframes, layout adjustments.
    *   *Why Chosen*: Standard CSS variables allow setting consistent tokens (primary navy `#0B1F45`, accent red `#C81E3A`) without compilation tools. It loads instantly and remains standard across browser iterations.
    *   *Alternatives*: TailwindCSS (not requested for the project design core), CSS Modules.
    *   *Pros*: Zero build utility overhead, pixel-perfect editing.
    *   *Cons*: Writing traditional classes takes longer than utility classes.

*   **Google Fonts (Outfit & Inter)**
    *   *Purpose*: Sans-serif heading and text styles.
    *   *Why Chosen*: Next.js handles Google Font imports directly in `layout.jsx`, fetching and caching them to avoid layout shifts.

---

## 🔍 Validation & Linting Tools

*   **Oxlint (v1.71.0)**
    *   *Purpose*: Code checker.
    *   *Why Chosen*: Oxlint is orders of magnitude faster than standard ESLint configs. It parses syntax errors in milliseconds.
    *   *Alternatives*: Traditional ESLint.
    *   *Pros*: Fast checks.
    *   *Cons*: Limited rules compared to plugin-heavy ESLint suites.

---

## 📈 Summary of Dependencies

From [package.json](file:///c:/Users/laptop/OneDrive/Desktop/mapwork/package.json):

| Dependency | Version | Type | Core Responsibility |
| :--- | :--- | :--- | :--- |
| **next** | `^15.1.6` | Dependency | App core & Router compiler |
| **react** | `^19.2.7` | Dependency | State & rendering UI elements |
| **react-dom** | `^19.2.7` | Dependency | Client DOM renderer |
| **@types/react** | `^19.2.17`| DevDependency | Typing maps |
| **@types/react-dom**| `^19.2.3` | DevDependency | DOM Types |
| **oxlint** | `^1.71.0` | DevDependency | Sub-second linter |
