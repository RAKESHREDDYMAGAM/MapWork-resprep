# Logging & Monitor

This document details the console logging and diagnostic practices in MapWork.

---

## 📋 Client Console Logs
Currently, MapWork has **no external logging system or trackers**. 

Diagnostics are output using the standard browser console:
*   `console.warn()`: Displays warning boundaries.
*   `console.error()`: Highlights click path failures or script blocks.

---

## 🔮 Recommended Runtime Monitoring
As the application expands to support user actions and APIs, we recommend introducing a monitoring setup to capture errors and track performance:

```text
MapWork Monitoring
 ├── Frontend Error Logs (Sentry SDK integration)
 ├── User Interaction & Analytics (PostHog or Google Analytics)
 └── Serverless API Metrics (Vercel Axiom / OpenTelemetry)
```

### 1. Sentry Integration
*   Purpose: Detect and group javascript crashes in real-time, matching browser types and stack traces.
*   Setup: Initialize Sentry integration inside Next.js config files:
    ```bash
    npm install @sentry/nextjs
    ```

### 2. Log Levels Configuration
For future API endpoints, implement structured backend logs (using libraries like `pino` or `winston`):
*   `INFO`: Route entry queries.
*   `WARN`: Rate limit warnings, invalid logins.
*   `ERROR`: Database timeout exceptions, server action failures.
