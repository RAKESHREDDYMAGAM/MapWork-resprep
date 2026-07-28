# Development Setup

This document provides step-by-step instructions to set up the MapWork development environment locally.

---

## 📋 Prerequisites
Confirm the following tools are preset:
*   **Node.js**: Version **v18.x** or above (v20.x LTS recommended). You can verify your version by running:
    ```bash
    node -v
    ```
*   **npm**: Included with Node.js. Verified with:
    ```bash
    npm -v
    ```
*   **Git**: Required for version control.

---

## ⚙️ Initial Startup & Dependency Installation

### Step 1: Clone Repository
Clone the repository and enter the directory in your shell:
```bash
git clone https://github.com/RAKESHREDDYMAGAM/MapWork-resprep.git
cd MapWork-resprep
```

### Step 2: Install Package Packages
Run npm to install the dependencies:
```bash
npm install
```

---

## 🚀 Running the Platform

### Running the Development Environment
Start Next.js in hot-reloading dev mode on port **3080**:
```bash
npm run dev
```
Open [http://localhost:3080](http://localhost:3080) to test the local client (it compiles pages dynamically as the browser accesses routes).

### Building for Production
Verify that the codebase builds cleanly to standalone pages:
1.  Clear the local compiler cache (safeguard against Windows symlink blocks):
    ```powershell
    Remove-Item -Recurse -Force .next
    ```
2.  Trigger the compilation:
    ```bash
    npm run build
    ```

### Starting the Production Server
Once the build concludes successfully, launch the web server on port **3080**:
```bash
npm start
```

---

## 🔍 Quality Controls & Linting
Ensure code style standards are maintained before committing:
```bash
npx oxlint
```
If errors are reported, resolve them in your code editors before attempting production builds.

---

## 💡 Troubleshooting Tips

### Port Conflict (`EADDRINUSE`)
If port `3080` is in use:
*   Identify running node processes and terminate them.
*   Alternatively, edit `"dev"` and `"start"` scripts inside `package.json` to assign another port, such as `-p 3090`.
