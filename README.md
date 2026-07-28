# MapWork — Geo Intelligence Platform

MapWork is a production-grade geo-intelligence and mapping platform designed for professional field operations, remote business discovery, territory management, and smart route optimization.

## 📌 Product Vision
Organizations with field operations teams (e.g., sales, distributors, logistics, collections) waste significant resources due to unstructured travel, lack of coordinate mapping, and stale lead lists. MapWork divides custom geographies into micro-zones and scans for local business placements, generating comprehensive lead databases and routing teams along optimized paths.

---

## 🚀 Key Features

*   **Geo Discovery Engine**: Divide target cities into scanning grids to locate physical business pins.
*   **Business Intelligence Database**: Structured location profiles including Name, Coordinates, Categorization, and CRM-ready Place IDs.
*   **Smart Route Planning**: Automatically plots path grids to minimize travel delay and fuel cost.
*   **Tailored Sector Solutions**: Custom configurations for Automotive, Banking/NBFCs, FMCG, Telecom, and Healthcare.
*   **Future AI Lead Scoring**: Dynamic prediction of lead value and engagement probabilities.

---

## 🛠️ Technology Stack

*   **Framework**: Next.js 15.1.6 (App Router structure)
*   **Runtime / Language**: Node.js & modern ES Modules Javascript
*   **State & Rendering**: React 19 (Server/Client boundary layout coordination)
*   **Styling**: Pure CSS Custom Variables (`globals.css`)
*   **Quality & Linting**: Oxlint (`.oxlintrc.json`)

---

## 📂 Project Structure

```text
mapwork/
├── docs/                 # Technical documentation system
├── public/               # Public serving SVG assets & icons
├── src/
│   ├── app/              # Next.js App Router entry folds
│   │   ├── globals.css   # Main stylesheet tokens & styling
│   │   ├── layout.jsx    # Document HTML Shell and SEO metadata
│   │   └── page.jsx      # Home section orchestrator and scroll reveals
│   └── components/       # Reusable layout sections (Navbar, Hero, Problem...)
└── package.json          # Node script dependencies
```

---

## 💻 Quick Start & Installation

### 1. Prerequisites
Ensure you have **Node.js (v18.x or above)** and **npm** installed.

### 2. Install Project Dependencies
Run the command below in the project root:
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3080](http://localhost:3080) to view the client locally.

### 4. Build for Production
```bash
npm run build
```

---

## 📖 Complete Documentation Index

All architectural guidelines and operational documents are located inside the `/docs` directory:

1.  **Overview & System Specs**:
    *   [PROJECT_OVERVIEW.md](./docs/PROJECT_OVERVIEW.md) — Mission, Personas, and Core Workflows.
    *   [ARCHITECTURE.md](./docs/ARCHITECTURE.md) — System Layout, Rendering Strategy, & Mermaid Dataflows.
    *   [FOLDER_STRUCTURE.md](./docs/FOLDER_STRUCTURE.md) — Explanation of directories and files.
    *   [TECH_STACK.md](./docs/TECH_STACK.md) — Language, framework, and tool decisions.
2.  **Product Capabilities & Interfaces**:
    *   [FRONTEND.md](./docs/FRONTEND.md) — Pages structural logic and styles.
    *   [COMPONENT_LIBRARY.md](./docs/COMPONENT_LIBRARY.md) — UI Component references (Props & States).
    *   [ROUTING.md](./docs/ROUTING.md) — Nesting layouts and URLs.
    *   [STATE_MANAGEMENT.md](./docs/STATE_MANAGEMENT.md) — Local events and IntersectionObservers.
3.  **Future Implementations (Roadmaps)**:
    *   [DATABASE.md](./docs/DATABASE.md) — Proposed SQL schema and migration guide.
    *   [API_DOCUMENTATION.md](./docs/API_DOCUMENTATION.md) — Draft REST/GraphQL guidelines.
    *   [AUTHENTICATION.md](./docs/AUTHENTICATION.md) — OAuth & JWT recommendations.
    *   [BACKEND.md](./docs/BACKEND.md) — Server Actions and microservices architecture.
4.  **DevOps & Infrastructure**:
    *   [DEVELOPMENT_SETUP.md](./docs/DEVELOPMENT_SETUP.md) — Scripts, debugging, and setups.
    *   [ENVIRONMENT_VARIABLES.md](./docs/ENVIRONMENT_VARIABLES.md) — Variable configurations.
    *   [DEPLOYMENT.md](./docs/DEPLOYMENT.md) — Hosting platforms (Vercel) setup.
    *   [DEVOPS.md](./docs/DEVOPS.md) — CI/CD blueprints.
5.  **Quality & Security**:
    *   [SECURITY.md](./docs/SECURITY.md) — XSS prevention and inputs sanitation.
    *   [PERFORMANCE.md](./docs/PERFORMANCE.md) — Image and size budgets.
    *   [SEO.md](./docs/SEO.md) — Metadata and Canonical settings.
    *   [TESTING.md](./docs/TESTING.md) — Jest & Playwright proposals.
    *   [ERROR_HANDLING.md](./docs/ERROR_HANDLING.md) — Error Boundary rules.
    *   [LOGGING.md](./docs/LOGGING.md) — Browser and console logging rules.
6.  **Integrations & Community**:
    *   [THIRD_PARTY_SERVICES.md](./docs/THIRD_PARTY_SERVICES.md) — Icons, maps, and external fonts.
    *   [CONTRIBUTING.md](./docs/CONTRIBUTING.md) — Git workflows and pull request limits.
    *   [CODE_STYLE.md](./docs/CODE_STYLE.md) — ESLint / naming standards.
    *   [DECISION_LOG.md](./docs/DECISION_LOG.md) — Record of architectural pivots.
    *   [ROADMAP.md](./docs/ROADMAP.md) — Planned modules and technical debt.
    *   [TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md) — Known Windows port/lock fix instructions.
    *   [GLOSSARY.md](./docs/GLOSSARY.md) — Vocabulary dictionary.
    *   [CHANGELOG.md](./docs/CHANGELOG.md) — Versions and release logs.

---

## 📄 License
This project is proprietary and confidential. All rights reserved by ResultPrep Systems.