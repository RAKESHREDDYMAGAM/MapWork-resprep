# Testing Strategy

This document outlines the testing strategy, tools, and configurations recommended for MapWork.

---

## 📋 Current Implementation Status
Currently, there are **no automated test suites, test configurations, or spec files implemented** in the MapWork project.

Checking layout logic, responsive boundaries, and page loading is performed manually by starting the local dev server and testing the interface in the browser.

---

## 🔮 Recommended Testing Stack & Structure
To prevent regression bugs as components are modified, we recommend setting up a standard testing hierarchy:

```text
MapWork Testing
 ├── Unit Tests (React Testing Library & Vitest)
 ├── Integration Tests (Mock Page Routing & Lifecycle events)
 └── End-to-End Tests (Playwright Browser Tests)
```

### 1. Unit Testing (Components & Hooks)
*   **Tools**: Vitest + React Testing Library (faster than Jest).
*   **Target**: Validate that components render correctly based on props (e.g., that `Navbar` shows the mobile drawer when `isDrawerOpen` is set to true).
*   **Sample Structure**:
    ```javascript
    // src/components/__tests__/Navbar.test.jsx
    import { render, screen } from '@testing-library/react';
    import Navbar from '../Navbar';

    test('renders brand text logo', () => {
      render(<Navbar activeSection="home" />);
      expect(screen.getByText('Map')).toBeInTheDocument();
    });
    ```

### 2. End-to-End Testing (E2E)
*   **Tool**: Playwright.
*   **Target**: Automate real actions to verify cross-browser rendering:
    *   Verify routing between sections.
    *   Test mobile responsiveness by simulating mobile viewport limits (like 375px screens).
    *   Assert that contact form submissions successfully invoke target endpoints.

---

## 📈 Coverage Targets
*   Core Layout Components: **80%** lines coverage.
*   Routing & Integrations: **95%** path coverage.
