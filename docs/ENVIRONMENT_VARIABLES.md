# Environment Variables

This document lists environment variables configured or suggested for the MapWork project.

---

## 📋 Current Configuration
MapWork is packaged as a static-compiled landing page application. Therefore, there are **no environment variables actively used or required in the runtime code**.

All values (ports, routes, styling variables) are declared statically inside configuration files (`package.json`, `next.config.js`) or core stylesheets (`src/app/globals.css`).

---

## 🚀 Future Options & Environment Configurations
As features like contact form backends, dynamic database connections, or AI APIs are introduced, configuration is recommended through a `.env.local` or `.env.production` file.

The table below outlines proposed parameters for future development:

| Variable Name | Required | Default Value | Description / Scope |
| :--- | :--- | :--- | :--- |
| **`PORT`** | Optional | `3080` | Local development and server start port |
| **`NEXT_PUBLIC_API_URL`** | Optional | `http://localhost:3080/api` | The base URL of API endpoints for forms |
| **`CONTACT_EMAIL_RECEIVER`**| Optional | `info@resultprep.com` | Receives feedback from the contact form |
| **`DATABASE_URL`** | Optional | None | Database connection string (PostgreSQL/MySQL) |
| **`SESSION_SECRET`** | Optional | None | Secret key used to sign session cookies |

---

## 🔒 Security Practices
*   Never commit any `.env` files storing secret keys directly to Git repositories.
*   Add `.env*.local` to the `.gitignore` rules.
*   Avoid adding client-exposed public prefixes (`NEXT_PUBLIC_`) to variables storing secure database credentials or third-party mailing API keys. Only prefix parameters that are meant to be accessed inside browser React components.
