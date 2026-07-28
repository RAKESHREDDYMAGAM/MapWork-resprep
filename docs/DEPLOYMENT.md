# Deployment Specification

This document details the build output profiles and cloud deployment configurations for MapWork.

---

## 🚀 Pre-configured Hosting Target: Vercel / Netlify
MapWork is a static Next.js App Router project that does not require containerized backend servers. We recommend deploying to **Vercel** (the framework creator) for zero-config integration.

### Deployment Guide (Vercel CLI / Web Portal)
1.  **Repository Link**: Link your GitHub repository (`MapWork-resprep`) directly inside the Vercel dashboard.
2.  **Build Settings**: Next.js configurations are auto-detected:
    *   **Framework Preset**: `Next.js`
    *   **Build Command**: `next build`
    *   **Output Directory**: `.next`
3.  **Environment Setup**: Add fallback ports or production flags if required.
4.  **Launch**: Click **Deploy**. Vercel compiles the pages and serves them over Edge CDNs.

---

## 🔄 Standalone Production Builds
If hosting on standard virtual private servers (like AWS EC2, DigitalOcean Droplets):
1.  Verify the environment has **Node.js (v18+)** active.
2.  Change dependencies in `package.json` to compile to a standalone Next.js build.
3.  Configure `next.config.js` to enable output tracing:
    ```javascript
    module.exports = {
      output: 'standalone',
    }
    ```
4.  Trigger compile: `npm run build`.
5.  Start server using process orchestrators (like PM2):
    ```bash
    pm2 start .next/standalone/server.js --name "mapwork"
    ```
