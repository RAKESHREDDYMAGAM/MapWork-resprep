# Security Guidelines

This document outlays the security practices and protections set up in MapWork.

---

## 📋 Current Protections

### 1. Element Inject Containment (XSS Blockers)
MapWork is built on React 19. All values mapped or injected inside React tags are sanitized automatically by the engine, blocking standard Cross-Site Scripting (XSS) snippet injections.

### 2. Dependency Auditing
*   No heavy external frameworks or unsecured plugins are imported.
*   Run the script below weekly to scan for known package vulnerabilities:
    ```bash
    npm audit
    ```

---

## 🔮 Future Security Implementations

As interactive forms and dynamic endpoints are introduced to MapWork, we recommend implementing the following security measures:

### 1. Spam Prevention (Honeypot Integration)
For the Contact Form, add a hidden honeypot field. Real users cannot see it because it is hidden via CSS, but automated spam bots will fill it in, letting the server easily identify spam:
```javascript
// Example component snippet
<input 
  type="text" 
  name="website_url" 
  style={{ display: 'none' }} 
  tabIndex={-1} 
  autoComplete="off" 
/>
```
If this field has a value on form submission, discard the request as spam.

### 2. HTTP Security Headers
Configure Content Security Policies (CSP) inside `next.config.js` to prevent unauthorized resource requests:
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;" },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
        ],
      },
    ]
  },
};
```
