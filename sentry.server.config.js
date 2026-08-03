import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN;

if (SENTRY_DSN) {
    Sentry.init({
        dsn: SENTRY_DSN,

        // Enable debug mode in development if analytics/sentry debugging is set
        debug: process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === 'true',

        // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,

        // Ignore development logs/errors unless analytics is forced
        enabled: process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_FORCE_ENABLE_ANALYTICS === "true",
    });
}
