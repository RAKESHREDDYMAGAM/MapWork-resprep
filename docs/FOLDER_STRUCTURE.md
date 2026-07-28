# Folder Structure

This document details the file structures and directory responsibilities inside the MapWork project.

---

## 📂 Root File Structure Overview

```text
mapwork/
├── .next/                    # Auto-generated Next.js build cache output
├── docs/                     # Technical documentation system
├── node_modules/             # Dependency modules directory
├── public/                   # Public assets (icons, static images)
│   ├── favicon.svg           # MapWork browser favicon
│   └── icons.svg             # Web logo graphics vector
├── src/                      # Source code folder
│   ├── app/                  # Application Router folders
│   │   ├── globals.css       # Core design styles and custom CSS variables
│   │   ├── layout.jsx        # Root layout, meta cards, and fonts loader
│   │   └── page.jsx          # Entry page coordinates and scroll observers
│   ├── assets/               # Local images imported as media components
│   │   ├── discovery.png     # Scan simulator image
│   │   ├── hero.png          # App dashboard hero image
│   │   └── route_planning.png# Smart route illustration
│   └── components/           # Reusable functional section components
│       ├── Database.jsx      # Database capability list
│       ├── DiscoveryEngine.jsx# Core Scan microzone categories and details
│       ├── Footer.jsx        # Landing page dark footer grid
│       ├── Hero.jsx          # Opening Fold and CTA
│       ├── Industries.jsx    # Sector segments details
│       ├── Navbar.jsx        # Sticky navigation header
│       ├── Problem.jsx       # Problem grid cards
│       ├── Roadmap.jsx       # Long-term feature cards
│       └── RoutePlanning.jsx # Routing benefits details
├── .gitignore                # Untracked files configurations
├── .oxlintrc.json            # Oxlint speed-linter specifications
├── next.config.js            # Standalone build settings and ESLint ignore triggers
├── package-lock.json         # Pinned packages lock file
├── package.json              # Compilation scripts and dependencies configs
└── README.md                 # Project entry point card
```

---

## 📁 Key Directory Details

### `src/app/`
Contains the Next.js App Router files:
*   `globals.css`: Contains CSS variables, color declarations, font configurations (`Outfit`, `Inter`), responsive media breakpoints, and standard classes (`.container`, `.card`).
*   `layout.jsx`: Defines the HTML layout frame, parses fonts, and sets global metadata tags.
*   `page.jsx`: Runs client-side loops (`use client`), listens to page scrolls, triggers reveal animations, and mounts section components.

### `src/components/`
Each file in this folder contains a React component corresponding to a section of the landing page:
*   These files must remain modular: all local components must accept standard props and manage inside-section triggers cleanly.

---

## 📐 Folder Conventions & Best Practices

1.  **Adding New Pages**: 
    Create subfolders inside `src/app/` (e.g., `src/app/about/page.jsx`) containing a template React default export page.
2.  **Asset Handling**:
    *   Put layout illustration assets inside `src/assets/` to import them inside React code (utilizing bundler pathing).
    *   Place direct browser assets (like favicon, sitemap, or robots metadata) in `/public/`.
3.  **Imports Ordering**:
    *   React hook imports (`useState`, `useEffect`).
    *   Next.js core utilities (`Link`, `Image`).
    *   Custom layout components.
    *   Local assets/logos.
