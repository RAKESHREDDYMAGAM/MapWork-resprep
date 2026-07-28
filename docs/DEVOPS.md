# DevOps & Continuous Integration

This document outlines the CI/CD scripts and workflows in MapWork.

---

## 🛠️ DevOps Script Triggers

The following triggers are defined inside `package.json` scripts:

*   **`npm run dev`**: Starts Next.js development server locally on port 3080.
*   **`npm run build`**: Compiles the React components and creates optimized static assets in `.next/` for production.
*   **`npm start`**: Starts the compiled production server on port 3080.
*   **`npm run lint`**: Triggers static syntax audits.

---

## 🔄 Recommended GitHub Actions CI/CD Pipeline
To ensure that all commits are verified before merging, we recommend creating a file `.github/workflows/verify.yml`:

```yaml
name: Verify Code Integration

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Audit Syntax (Linter)
        run: npx oxlint
        
      - name: Test Build compilation
        run: npm run build
```

---

## 🛡️ Secrets Management
*   Configure sensitive parameters (like databases or third-party webhooks keys) using repository Secret properties inside GitHub developer consoles.
*   Inject credentials during the build steps using container environment integrations.
