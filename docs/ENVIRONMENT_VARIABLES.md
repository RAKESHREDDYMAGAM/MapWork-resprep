# Environment Variables

This document lists environment variables configured or suggested for the MapWork project.

---

## 📋 Current Configuration
MapWork has configured a production-grade analytics suite. The following environment variables configure Google Tag Manager, Sentry, Microsoft Clarity, and local development testing toggles.

| Variable Name | Required | Default Value | Description / Scope |
| :--- | :--- | :--- | :--- |
| **`NEXT_PUBLIC_GTM_ID`** | **Yes** | `GTM-PBQSHKLQ` | Google Tag Manager Container ID |
| **`NEXT_PUBLIC_CLARITY_ID`** | Optional | None | Microsoft Clarity Project Tracker ID |
| **`NEXT_PUBLIC_META_PIXEL_ID`** | Optional | None | Meta Pixel tracking identifier |
| **`NEXT_PUBLIC_LINKEDIN_PARTNER_ID`**| Optional | None | LinkedIn Insight Partner ID |
| **`NEXT_PUBLIC_SENTRY_DSN`** | **Yes** | None | Sentry SDK Client DSN for error logs |
| **`NEXT_PUBLIC_ANALYTICS_DEBUG`** | Optional | `false` | Set `true` to print telemetry triggers in console |
| **`NEXT_PUBLIC_FORCE_ENABLE_ANALYTICS`**| Optional | `false` | Set `true` to force pushes to dataLayer in dev mode |
| **`PORT`** | Optional | `3080` | Local development and server start port |
| **`NEXT_PUBLIC_API_URL`** | Optional | `http://localhost:3080/api` | The base URL of API endpoints for forms |
| **`CONTACT_EMAIL_RECEIVER`**| Optional | `info@resultprep.com` | Receives feedback from the contact form |
| **`DATABASE_URL`** | Optional | None | Database connection string (PostgreSQL/MySQL) |
| **`SESSION_SECRET`** | Optional | None | Secret key used to sign secure session cookies |

---

## 🔒 Security Practices
*   Never commit any `.env` files storing secret keys directly to Git repositories.
*   Add `.env*.local` to the `.gitignore` rules.
*   Avoid adding client-exposed public prefixes (`NEXT_PUBLIC_`) to variables storing secure database credentials or third-party mailing API keys. Only prefix parameters that are meant to be accessed inside browser React components.
