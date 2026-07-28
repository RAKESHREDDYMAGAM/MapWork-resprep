# Changelog

All notable changes to the MapWork project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] - 2026-07-28

### Added
*   Complete technical documentation system under the `/docs` folder consisting of 30 markdown guides.
*   Production-ready root `README.md` containing dynamic indices linking all markdown folders.
*   Mermaid diagrams within documentation explaining system architecture, page viewport events, and Postgres SQL database models.

### Changed
*   Boosted footer copy elements dimensions by 1px across `globals.css` and `Footer.jsx` inline styles to support readability.
*   Brightened background overlay colors for footer text elements to ensure high contrast compliance.

### Fixed
*   Resolved port conflicts (overriding default Next.js configurations to port 3080).
*   Resolved Windows compiler cache lock issues by configuring `outputFileTracingRoot` inside `next.config.js`.
