# Troubleshooting Guide

This document lists solutions for common issues when running and building MapWork.

---

## 🛠️ Local Development Server Issues

### 1. Port Conflict (`EADDRINUSE: address already in use :::3080`)
*   **Cause**: Another node process or server is already running on port 3080.
*   **Solution**:
    *   **Windows (PowerShell)**: Find and kill the process:
        ```powershell
        Get-NetTCPConnection -LocalPort 3080 | Select-Object -ExpandProperty OwningProcess | ForEach-Object { Stop-Process -Id $_ -Force }
        ```
    *   **Mac/Linux**: Terminate the process using:
        ```bash
        kill -9 $(lsof -t -i:3080)
        ```
    *   Or, edit `package.json` to change the dev script port (e.g., `next dev -p 3090`).

---

## 🏗️ Production Build Failures

### 1. Windows Cache Symlink Crash (`errno -4071`)
*   **Cause**: Next.js cache conflicts with Windows directory permissions when scanning node_modules.
*   **Solution**:
    *   Clear the cache and rebuild using:
        ```powershell
        Remove-Item -Recurse -Force .next
        npm run build
        ```
    *   Make sure `next.config.js` sets the root directory:
        ```javascript
        outputFileTracingRoot: __dirname
        ```

### 2. Linter Violations Blocking Builds
*   **Cause**: Oxford Oxlint linter reports styling or formatting errors.
*   **Solution**:
    *   Verify lint issues before building by running:
        ```bash
        npx oxlint
        ```
    *   Verify Next.js config has ESLint ignore rules configured to prevent linting during compilation:
        ```javascript
        eslint: {
          ignoreDuringBuilds: true,
        }
        ```
