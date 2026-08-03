import * as Sentry from "@sentry/nextjs";

const isProduction = process.env.NODE_ENV === "production";
const isForceEnabled = process.env.NEXT_PUBLIC_FORCE_ENABLE_ANALYTICS === "true";
const isDebug = process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true";
const isBrowser = typeof window !== "undefined";

const LOG_PREFIX = "[MapWork Analytics]";
const CONSENT_STORAGE_KEY = "mapwork_consent_status";

export function getConsentStatus(): "granted" | "denied" | "unset" {
    if (!isBrowser) return "unset";
    const status = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (status === "granted") return "granted";
    if (status === "denied") return "denied";
    return "unset";
}

export function setConsentStatus(status: "granted" | "denied") {
    if (!isBrowser) return;
    localStorage.setItem(CONSENT_STORAGE_KEY, status);

    // Push consent update to GTM dataLayer
    pushToDataLayer({
        event: "consent_updated",
        consentState: status,
    });

    const win = window as any;
    if (win.dataLayer) {
        win.dataLayer.push({
            "consent_status": status,
        });
    }

    if (isDebug) {
        console.log(`${LOG_PREFIX} Consent preference updated: ${status}`);
    }
}

function logDebug(message: string, data?: any) {
    if (isDebug) {
        if (data) {
            console.log(`${LOG_PREFIX} ${message}`, data);
        } else {
            console.log(`${LOG_PREFIX} ${message}`);
        }
    }
}

export function pushToDataLayer(payload: Record<string, any>) {
    if (!isBrowser) return;

    const isTrackingAllowed = isProduction || isForceEnabled;
    if (!isTrackingAllowed) {
        logDebug("Skipping dataLayer push (running in development and not force enabled)", payload);
        return;
    }

    const win = window as any;
    win.dataLayer = win.dataLayer || [];

    const enrichedPayload = {
        ...payload,
        timestamp: new Date().toISOString(),
        consentState: getConsentStatus(),
    };

    win.dataLayer.push(enrichedPayload);
    logDebug("Pushed to dataLayer", enrichedPayload);
}

export function trackPageView(url: string, title?: string, referrer?: string) {
    pushToDataLayer({
        event: "page_view",
        page: {
            url,
            title: title || (typeof document !== "undefined" ? document.title : ""),
            referrer: referrer || (typeof document !== "undefined" ? document.referrer : ""),
            path: url.split("?")[0],
        },
    });
}

export function trackEvent(eventName: string, params?: Record<string, any>) {
    pushToDataLayer({
        event: eventName,
        ...params,
    });
}

export function identifyUser(userId: string, traits?: Record<string, any>) {
    pushToDataLayer({
        event: "identify",
        userId,
        userTraits: traits,
    });

    Sentry.setUser({
        id: userId,
        email: traits?.email,
        username: traits?.name,
        ...traits,
    });

    logDebug(`Identified user: ${userId}`, traits);
}

export function trackPurchase(purchaseData: {
    transactionId: string;
    value: number;
    currency: string;
    items: Array<{
        id: string;
        name: string;
        price: number;
        quantity: number;
        category?: string;
    }>;
}) {
    pushToDataLayer({
        event: "purchase",
        ecommerce: {
            transaction_id: purchaseData.transactionId,
            value: purchaseData.value,
            currency: purchaseData.currency,
            items: purchaseData.items.map((item) => ({
                item_id: item.id,
                item_name: item.name,
                price: item.price,
                quantity: item.quantity,
                item_category: item.category,
            })),
        },
    });

    Sentry.addBreadcrumb({
        category: "analytics",
        message: `Purchase completed: ${purchaseData.transactionId} - Value: ${purchaseData.value}`,
        level: "info",
    });
}
