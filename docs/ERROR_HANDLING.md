# Error Handling Strategy

This document details the error handling practices and recovery strategies used in MapWork.

---

## 📋 Runtime Error Control

### 1. Client Rendering Protection
*   Next.js catches exceptions in client-side React rendering during development and displays an overlay.
*   In production, minor errors on interaction trigger a browser fail-soft state without crashing the document layout.

### 2. Resource Resolution Fallback
*   If static images (like `discovery.png`) fail to load or return 404, the browser displays standard alt text without breaking layout flows.

---

## 🔮 Recommended Error Boundaries
To prevent the entire page layout from crashing if a single section component fails, we recommend wrapping sections in **React Error Boundaries**:
1.  Create a fallback component page `error.jsx` in `src/app/`.
2.  Use React `ErrorBoundary` classes to wrap complex components:
    ```javascript
    // Example wrapper
    class SectionErrorBoundary extends React.Component {
      state = { hasError: false };
      static getDerivedStateFromError() {
        return { hasError: true };
      }
      render() {
        if (this.state.hasError) {
          return <div className="error-fallback">Something went wrong loading this section.</div>;
        }
        return this.props.children;
      }
    }
    ```
