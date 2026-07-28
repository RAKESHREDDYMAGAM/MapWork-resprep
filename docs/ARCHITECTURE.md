# System Architecture

MapWork is architected as an optimized, responsive front-end landing platform utilizing the Next.js 15 App Router architecture.

---

## 🏗️ Overall Architecture

The application is structured as a single-page orchestrator with modular UI viewports:

```mermaid
graph TD
    subgraph Client Browser
        A[Next.js App Router] --> B[Navbar Scroll Coordinator]
        B --> C[Page Orchestrator: src/app/page.jsx]
        C --> D[Reveal Animation Controller]
        C --> E[Section 1: Hero]
        C --> F[Section 2: Problem Grid]
        C --> G[Section 3: Discovery Engine]
        C --> H[Section 4: BI Database]
        C --> I[Section 5: Route Planner]
        C --> J[Section 6: Sector Solutions]
        C --> K[Section 7: Future Roadmap]
        C --> L[Section 8: Footer]
    end
```

---

## 🔄 Rendering Strategy
MapWork utilizes **Static Site Generation (SSG)** to ensure maximum page performance and instant rendering:
*   **Static Layouts**: The document structure is pre-rendered at compile time by Next.js.
*   **Hybrid Hydration**: The UI loads as a static HTML page, then hydrates the interactive JavaScript components (`"use client"`) like observers, mobile drawers, and link-tracking scroll events.
*   **Performance Benefits**: Time to Interactive (TTI) is optimized, and layout shifts (CLS) are minimized because CSS styles are injected server-side.

---

## 📦 Component Communication & Data Flow

### Scroll Synchronization Workflow
When the browser initiates a scroll event, the state and layout components coordinate to identify the active section coordinates:

```mermaid
sequenceDiagram
    participant User as User Scroll Event
    participant Win as browser Window
    participant Page as src/app/page.jsx
    participant Nav as src/components/Navbar.jsx
    
    User->>Win: Scroll page down
    Win->>Page: Trigger handleScroll listener
    Page->>Page: Calculate viewport boundaries (Y-offset + 200px)
    Page->>Page: Check offsets of target IDs (home, features, pricing, contact)
    Page->>Nav: Set activeSection state (e.g., 'features')
    Nav->>Nav: Apply .active styling toggle to links
```

---

## 🛠️ Build & Compilation Flow
The build is compiled into static chunks for cloud deployments:
1.  **Linter Audit**: Runs linter check (`npx oxlint`) to evaluate syntax correctness.
2.  **Compilation (`next build`)**: Next.js parses the code and creates optimized HTML/CSS static files.
3.  **Trace Analysis**: Uses `outputFileTracingRoot` configuration inside `next.config.js` to trace and bundle dependencies into the `.next/` standalone output environment.
