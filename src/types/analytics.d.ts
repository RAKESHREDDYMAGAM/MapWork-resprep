interface Window {
    dataLayer: any[];
}

export type ConsentStatus = 'granted' | 'denied';

export interface BaseEventParams {
    timestamp: string;
    url: string;
    path: string;
    consentState: ConsentStatus;
    [key: string]: any;
}

export interface PageViewParams {
    url: string;
    title: string;
    referrer?: string;
    path: string;
}

export interface UserTraits {
    email?: string;
    name?: string;
    orgSize?: string;
    role?: string;
    [key: string]: any;
}

export interface PurchaseData {
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
}

export type AnalyticsEvent =
    | { event: 'page_view'; page: PageViewParams }
    | { event: 'signup_started'; method: string }
    | { event: 'signup_completed'; method: string; userId: string }
    | { event: 'login'; method: string; userId: string }
    | { event: 'logout'; userId: string }
    | { event: 'workspace_created'; workspaceId: string; workspaceName: string; ownerId: string }
    | { event: 'map_created'; mapId: string; mapName: string; region?: string }
    | { event: 'map_edited'; mapId: string; mapName: string; changeType: string }
    | { event: 'map_deleted'; mapId: string; mapName: string }
    | { event: 'map_exported'; mapId: string; format: 'geojson' | 'png' | 'pdf' | 'csv' }
    | { event: 'map_shared'; mapId: string; recipientCount: number }
    | { event: 'search_performed'; query: string; category?: string; resultsCount?: number }
    | { event: 'pricing_viewed'; tierSelected?: string; BillingCycle?: 'monthly' | 'annual' }
    | { event: 'trial_started'; tier: string; durationDays: number }
    | { event: 'subscription_upgraded'; fromTier: string; toTier: string; price: number }
    | { event: 'subscription_downgraded'; fromTier: string; toTier: string; price: number }
    | { event: 'subscription_cancelled'; tier: string; remainingDays: number }
    | { event: 'form_submission'; formId: string; success: boolean; errorMsg?: string;[key: string]: any }
    | { event: 'cta_click'; ctaId: string; label: string; destinationUrl?: string };
