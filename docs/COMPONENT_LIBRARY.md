# Component Library References

This library details the props, structure, states, and properties of the reusable React components in the MapWork application.

---

## 1. Navbar (`src/components/Navbar.jsx`)
Creates sticky site navigation, tracks dynamic scroll locations, and handles mobile menu triggers:
*   **Props**:
    *   `activeSection`: (String) Identifies which page section is currently scrolled into view (toggles active link visual states).
*   **Local States**:
    *   `isScrolled`: (Boolean) True if user scrolled down > 20px (toggles `.scrolled` styling, adding glassmorphism blur and lower navbar heights).
    *   `isDrawerOpen`: (Boolean) Controls mobile menu navigation overlay visible state.
*   **Accessibility**: Responsive hamburger toggle buttons maintain explicit `aria-expanded` and `aria-label` tag selectors.

---

## 2. Hero (`src/components/Hero.jsx`)
The entry fold containing branding headlines and conversion CTA links:
*   **Visual Assets**: Loads local dashboard mockup `src/assets/hero.png` inside an optimized container.
*   **Actions**:
    *   "Get Started": Routes user to the contact support section page.
    *   "Watch Demo": Scrolling anchor trigger.

---

## 3. Problem Grid (`src/components/Problem.jsx`)
Displays a flex-wrap card container list of challenges MapWork targets (e.g., Identifying business targets, path delays):
*   **Interactivity**: Hover events scale cards slightly and inject drop-shadow accents (`transform: translateY(-1.5px)`).

---

## 4. Discovery Engine (`src/components/DiscoveryEngine.jsx`)
Highlights geographical scanning routines and business target pill grids:
*   **Props**: None.
*   **Local States**:
    *   `activeTab`: (String) Manages coordinates categories (Pills toggle list).
*   **Layout**: Displays a split flex column. The category links support active outline styling.

---

## 5. Route Planning (`src/components/RoutePlanning.jsx`)
Presents statistical route improvements and travel optimizations:
*   **Layout**: Renders a stats metrics overview cards container. Icons feature hover rotation effects.

---

## 6. Footer (`src/components/Footer.jsx`)
Displays copy attributions, support links, legal guidelines, and social routing targets:
*   **Hover Events**: Links transition dynamically (`padding-left: 4px` translation effect).
*   **Contrast Settings**: Uses bright text indicators to sustain readability against dark background colors.
