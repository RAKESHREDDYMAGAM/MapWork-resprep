# Contribution Guidelines

This document outlays the collaboration rules, commit conventions, and pull request procedures for MapWork.

---

## 🌿 Git Branching Strategy
We recommend using a simplified Git Flow for features deployment:

```text
  main (production code, protected)
   ▲
   └── release/* (pre-production release verification branch)
        ▲
        └── feature/* or bugfix/* (developers active branches)
```

1.  **Branch Naming Rules**:
    *   Features: `feature/short-description` (e.g. `feature/about-page`)
    *   Fixes: `bugfix/issue-description` (e.g. `bugfix/footer-contrast`)
2.  **Merging**: Direct pushes to the `main` branch are blocked. All adjustments must enter via a Pull Request (PR).

---

## 💬 Commit Styling Conventions
Commits must use the **Conventional Commits** standard (inspired by Vercel/Angular):
*   `feat: [description]`: Adding a new feature or endpoint.
*   `fix: [description]`: Resolving a bug.
*   `docs: [description]`: Editing documentation files.
*   `style: [description]`: Code formatting updates (tabs, trailing spaces).
*   `refactor: [description]`: Internal code adjustments without visual changes.

*Example*: `feat: add Google fonts dynamic fetching to root layout`

---

## 🔍 Pull Request & Code Review Checklist
Before marking PRs ready for review:
*   [ ] Verify the application builds successfully locally (`npm run build`).
*   [ ] Confirm code syntax contains no errors (`npx oxlint`).
*   [ ] Add corresponding descriptive comments to custom variables or functions.
*   [ ] Double-check layout integrity across standard mobile viewport limits.
