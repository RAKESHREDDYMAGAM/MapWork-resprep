# MapWork — Geo Intelligence Platform

MapWork is a premium, high-fidelity Geo Intelligence and Territory Management landing page built utilizing modern React and Vite. It serves as the frontend showcase for a field sales operations platform, highlighting tools like the Geo Discovery Engine, Business Intelligence Database, and automated Route Planning.

---

## 🚀 Key Features

*   **Custom Brand Identity**: High-fidelity custom SVG peaks logo paired with the active slogan `DISCOVER. MAP. EXECUTE.`.
*   **Geo Discovery Engine**: High-fidelity mapping component featuring interactive category filters (Automobile Workshops, Petrol Pumps, Hospitals, etc.) and exact Capability specifications.
*   **Business Intelligence Database**: Detailed listing of discovered geographic data points (Address, GPS, Place IDs, Calendar Dates, Contact info) accompanied by custom, tailored red SVG outline iconography (no generic list bullet icons).
*   **Platform Benefits**: Interactive feature highlights for field operation team workflows, focusing on real-time collection, automated routing, and CRM exports.
*   **Problem Solver Matrix**: 7-card response board styled in a precise 4+3 grid layout featuring fine-border animations and custom red outline SVGs.

---

## 🛠️ Development Setup & Scripts

Ensure you have [Node.js](https://nodejs.org) installed on your system.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Dev Server
```bash
npm run dev
```
The server will boot by default on `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```
Generates a production-ready bundled folder in `/dist`.

---

## 📂 Project Structure

```text
├── src/
│   ├── assets/           # Static image mockups (route_planning.png, hero.png)
│   ├── components/       # React showcase segments
│   │   ├── Navbar.jsx    # Responsive header with custom branding
│   │   ├── Hero.jsx      # Header landing point with product visualization
│   │   ├── Problem.jsx   # 7-card problem matrix with custom outline icons 
│   │   ├── DiscoveryEngine.jsx  # Interactive filter demo with category keys
│   │   ├── Database.jsx  # Structured profile listing & platform benefits
│   │   ├── RoutePlanning.jsx # Map routing preview layouts
│   │   └── Footer.jsx    # Clean, 4-column structured footer link matrix
│   ├── App.jsx           # Master container orchestrating the segments
│   ├── main.jsx          # Entry point mounting App to the DOM
│   └── index.css         # Custom CSS tokens, colors, layout components, and animations
├── index.html            # Main HTML document template
├── package.json          # Node dependencies and scripts configuration
└── vite.config.js       # Vite configuration parameters
```

---

## 🎨 Tech Stack & Styling Guidelines

*   **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/) (with Hot Module Replacement).
*   **Styling**: Pure CSS (`src/index.css`) containing all global typography tokens, HSL color palettes, active outline animations, hover transitions, and responsive grid layouts.
*   **Aesthetics**: Sleek Dark theme elements combined with stark red accent accents (`#c81e3a` / `hsl(351, 74%, 48%)`) to convey professional precision and premium SaaS aesthetics.