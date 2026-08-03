"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
    trackEvent,
    trackPageView,
    identifyUser,
    trackPurchase,
    getConsentStatus,
    setConsentStatus,
    pushToDataLayer
} from "../../lib/analytics";

export default function AnalyticsTestPage() {
    const [logs, setLogs] = useState([]);
    const [consent, setConsent] = useState("unset");
    const [toast, setToast] = useState("");

    useEffect(() => {
        if (typeof window === "undefined") return;
        setConsent(getConsentStatus());

        window.dataLayer = window.dataLayer || [];

        // Intercept dataLayer pushes to show them in the UI in real-time
        const nativePush = window.dataLayer.push.bind(window.dataLayer);
        window.dataLayer.push = function (...args) {
            const result = nativePush(...args);
            setLogs((prev) => [...prev, ...args]);
            return result;
        };

        // Load initial logs
        setLogs([...window.dataLayer]);

        return () => {
            window.dataLayer.push = nativePush;
        };
    }, []);

    const triggerToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(""), 3000);
    };

    const handleUpdateConsent = (status) => {
        setConsentStatus(status);
        setConsent(status);
        triggerToast(`Consent preference updated to ${status}`);
    };

    return (
        <>
            <Navbar activeSection="analytics-test" />
            <main style={{ marginTop: "100px", padding: "40px 24px", minHeight: "80vh", backgroundColor: "var(--color-bg-light)" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

                    {/* Header */}
                    <div style={{ marginBottom: "32px" }}>
                        <span className="eyebrow">Sandbox Cockpit</span>
                        <h1 style={{ fontSize: "2.4rem", color: "var(--color-primary-navy)", fontWeight: 800, margin: "8px 0" }}>
                            MapWork Analytics Verification Dashboard
                        </h1>
                        <p style={{ color: "var(--color-text-body)" }}>
                            Deploy, simulate, and inspect structured dataLayer events instantly. Turn on `<span style={{ fontFamily: "monospace" }}>NEXT_PUBLIC_ANALYTICS_DEBUG=true</span>` to see telemetry stdout in your browser developer console as well.
                        </p>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                        gap: "30px",
                        alignItems: "start"
                    }}>

                        {/* Control Panel */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

                            {/* GDPR State */}
                            <div className="card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                                <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 750, color: "var(--color-primary-navy)" }}>
                                    GDPR & Cookie Consent Setup
                                </h3>
                                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                    <span style={{ fontSize: "0.9rem", color: "var(--color-text-body)" }}>Current Status:</span>
                                    <strong style={{
                                        fontSize: "0.85rem",
                                        padding: "4px 8px",
                                        borderRadius: "4px",
                                        textTransform: "uppercase",
                                        backgroundColor: consent === "granted" ? "rgba(37, 211, 102, 0.15)" : consent === "denied" ? "rgba(239, 35, 60, 0.15)" : "rgba(11, 31, 69, 0.1)",
                                        color: consent === "granted" ? "#25D366" : consent === "denied" ? "var(--color-accent-red)" : "var(--color-primary-navy)"
                                    }}>
                                        {consent}
                                    </strong>
                                </div>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <button
                                        onClick={() => handleUpdateConsent("granted")}
                                        className="btn btn-primary"
                                        style={{ fontSize: "0.8rem", padding: "8px 14px", backgroundColor: "#25D366" }}
                                    >
                                        Set Granted
                                    </button>
                                    <button
                                        onClick={() => handleUpdateConsent("denied")}
                                        className="btn btn-secondary"
                                        style={{ fontSize: "0.8rem", padding: "8px 14px", borderColor: "var(--color-accent-red)", color: "var(--color-accent-red)" }}
                                    >
                                        Set Denied
                                    </button>
                                </div>
                            </div>

                            {/* Simulation triggers */}
                            <div className="card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
                                <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 750, color: "var(--color-primary-navy)" }}>
                                    Trigger Testing Telemetry Events
                                </h3>

                                {/* Section: Authentication */}
                                <div>
                                    <h4 style={{ margin: "0 0 10px 0", fontSize: "0.95rem", color: "var(--color-accent-red)", fontWeight: 700 }}>
                                        1. Authentication & Identity
                                    </h4>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                        <button
                                            onClick={() => {
                                                trackEvent("signup_started", { method: "email" });
                                                triggerToast("Sign up started pushed");
                                            }}
                                            style={{ fontSize: "0.8rem", padding: "6px 12px", border: "1.5px solid var(--color-border)", borderRadius: "6px", backgroundColor: "#ffffff", cursor: "pointer" }}
                                        >
                                            Sign Up Started
                                        </button>
                                        <button
                                            onClick={() => {
                                                trackEvent("signup_completed", { method: "email", userId: "usr_rakesh7" });
                                                identifyUser("usr_rakesh7", { email: "rakesh@resultprep.com", name: "Rakesh Reddy" });
                                                triggerToast("Sign up completed & Identity linked");
                                            }}
                                            style={{ fontSize: "0.8rem", padding: "6px 12px", border: "1.5px solid var(--color-border)", borderRadius: "6px", backgroundColor: "#ffffff", cursor: "pointer" }}
                                        >
                                            Sign Up Complete & Identify
                                        </button>
                                        <button
                                            onClick={() => {
                                                trackEvent("login", { method: "google", userId: "usr_rakesh7" });
                                                identifyUser("usr_rakesh7", { email: "rakesh@resultprep.com", name: "Rakesh Reddy" });
                                                triggerToast("Login completed");
                                            }}
                                            style={{ fontSize: "0.8rem", padding: "6px 12px", border: "1.5px solid var(--color-border)", borderRadius: "6px", backgroundColor: "#ffffff", cursor: "pointer" }}
                                        >
                                            Login Event
                                        </button>
                                        <button
                                            onClick={() => {
                                                trackEvent("logout", { userId: "usr_rakesh7" });
                                                triggerToast("Logout logged");
                                            }}
                                            style={{ fontSize: "0.8rem", padding: "6px 12px", border: "1.5px solid var(--color-border)", borderRadius: "6px", backgroundColor: "#ffffff", cursor: "pointer" }}
                                        >
                                            Logout Event
                                        </button>
                                    </div>
                                </div>

                                {/* Section: Workspaces */}
                                <div>
                                    <h4 style={{ margin: "0 0 10px 0", fontSize: "0.95rem", color: "var(--color-accent-red)", fontWeight: 700 }}>
                                        2. Domain Ops & Workspaces
                                    </h4>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                        <button
                                            onClick={() => {
                                                trackEvent("workspace_created", {
                                                    workspaceId: "ws_hyderabad_hq",
                                                    workspaceName: "Hyderabad Territory Office",
                                                    ownerId: "usr_rakesh7"
                                                });
                                                triggerToast("Workspace Created logged");
                                            }}
                                            style={{ fontSize: "0.8rem", padding: "6px 12px", border: "1.5px solid var(--color-border)", borderRadius: "6px", backgroundColor: "#ffffff", cursor: "pointer" }}
                                        >
                                            Workspace Created
                                        </button>
                                        <button
                                            onClick={() => {
                                                trackEvent("search_performed", {
                                                    query: "Gachibowli tech corridor",
                                                    category: "boundary_search",
                                                    resultsCount: 8
                                                });
                                                triggerToast("Search performed logged");
                                            }}
                                            style={{ fontSize: "0.8rem", padding: "6px 12px", border: "1.5px solid var(--color-border)", borderRadius: "6px", backgroundColor: "#ffffff", cursor: "pointer" }}
                                        >
                                            Search Performed
                                        </button>
                                    </div>
                                </div>

                                {/* Section: Map Operations */}
                                <div>
                                    <h4 style={{ margin: "0 0 10px 0", fontSize: "0.95rem", color: "var(--color-accent-red)", fontWeight: 700 }}>
                                        3. Map Operations
                                    </h4>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                        <button
                                            onClick={() => {
                                                trackEvent("map_created", { mapId: "map_gachibowli_01", mapName: "Outer-Ring Road Logistics Grid", region: "TS-IND" });
                                                triggerToast("Map Created logged");
                                            }}
                                            style={{ fontSize: "0.8rem", padding: "6px 12px", border: "1.5px solid var(--color-border)", borderRadius: "6px", backgroundColor: "#ffffff", cursor: "pointer" }}
                                        >
                                            Create Map
                                        </button>
                                        <button
                                            onClick={() => {
                                                trackEvent("map_edited", { mapId: "map_gachibowli_01", mapName: "Outer-Ring Road Logistics Grid", changeType: "add_polygon_pin" });
                                                triggerToast("Map Edited logged");
                                            }}
                                            style={{ fontSize: "0.8rem", padding: "6px 12px", border: "1.5px solid var(--color-border)", borderRadius: "6px", backgroundColor: "#ffffff", cursor: "pointer" }}
                                        >
                                            Edit Map
                                        </button>
                                        <button
                                            onClick={() => {
                                                trackEvent("map_exported", { mapId: "map_gachibowli_01", format: "geojson" });
                                                triggerToast("Map Exported logged");
                                            }}
                                            style={{ fontSize: "0.8rem", padding: "6px 12px", border: "1.5px solid var(--color-border)", borderRadius: "6px", backgroundColor: "#ffffff", cursor: "pointer" }}
                                        >
                                            Export Map
                                        </button>
                                        <button
                                            onClick={() => {
                                                trackEvent("map_shared", { mapId: "map_gachibowli_01", recipientCount: 3 });
                                                triggerToast("Map Shared logged");
                                            }}
                                            style={{ fontSize: "0.8rem", padding: "6px 12px", border: "1.5px solid var(--color-border)", borderRadius: "6px", backgroundColor: "#ffffff", cursor: "pointer" }}
                                        >
                                            Share Map
                                        </button>
                                        <button
                                            onClick={() => {
                                                trackEvent("map_deleted", { mapId: "map_gachibowli_01", mapName: "Outer-Ring Road Logistics Grid" });
                                                triggerToast("Map Deleted logged");
                                            }}
                                            style={{ fontSize: "0.8rem", padding: "6px 12px", border: "1.5px solid var(--color-accent-red)", borderRadius: "6px", backgroundColor: "#ffffff", color: "var(--color-accent-red)", cursor: "pointer" }}
                                        >
                                            Delete Map
                                        </button>
                                    </div>
                                </div>

                                {/* Section: Subscriptions */}
                                <div>
                                    <h4 style={{ margin: "0 0 10px 0", fontSize: "0.95rem", color: "var(--color-accent-red)", fontWeight: 700 }}>
                                        4. Pricing & Plans Lifecycle
                                    </h4>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                        <button
                                            onClick={() => {
                                                trackEvent("pricing_viewed", { tierSelected: "pro", BillingCycle: "annual" });
                                                triggerToast("Pricing viewed (Pro Annual)");
                                            }}
                                            style={{ fontSize: "0.8rem", padding: "6px 12px", border: "1.5px solid var(--color-border)", borderRadius: "6px", backgroundColor: "#ffffff", cursor: "pointer" }}
                                        >
                                            View Pricing Table
                                        </button>
                                        <button
                                            onClick={() => {
                                                trackEvent("trial_started", { tier: "pro", durationDays: 14 });
                                                triggerToast("Trial Started logged");
                                            }}
                                            style={{ fontSize: "0.8rem", padding: "6px 12px", border: "1.5px solid var(--color-border)", borderRadius: "6px", backgroundColor: "#ffffff", cursor: "pointer" }}
                                        >
                                            Start Free Trial
                                        </button>
                                        <button
                                            onClick={() => {
                                                trackEvent("subscription_upgraded", { fromTier: "free", toTier: "pro", price: 49.0 });
                                                trackPurchase({
                                                    transactionId: `tx_${Date.now()}`,
                                                    value: 49.0,
                                                    currency: "USD",
                                                    items: [{ id: "sku_pro_monthly", name: "Pro Plan Subscription", price: 49.0, quantity: 1, category: "SaaS Plan" }]
                                                });
                                                triggerToast("Sub Upgraded & E-comm Purchase logged");
                                            }}
                                            style={{ fontSize: "0.8rem", padding: "6px 12px", border: "1.5px solid var(--color-border)", borderRadius: "6px", backgroundColor: "#ffffff", cursor: "pointer" }}
                                        >
                                            Upgrade Sub & Purchase
                                        </button>
                                        <button
                                            onClick={() => {
                                                trackEvent("subscription_cancelled", { tier: "pro", remainingDays: 12 });
                                                triggerToast("Subscription Cancelled logged");
                                            }}
                                            style={{ fontSize: "0.8rem", padding: "6px 12px", border: "1.5px solid var(--color-border)", borderRadius: "6px", backgroundColor: "#ffffff", cursor: "pointer" }}
                                        >
                                            Cancel Subscription
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* Logger Output Console */}
                        <div className="card" style={{
                            padding: "24px",
                            backgroundColor: "#0B1F45",
                            color: "#A2C1EA",
                            fontFamily: "monospace",
                            fontSize: "0.85rem",
                            borderRadius: "var(--radius-lg)",
                            minHeight: "440px",
                            maxHeight: "680px",
                            overflowY: "auto",
                            boxShadow: "var(--shadow-lg)",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                                paddingBottom: "12px",
                                marginBottom: "16px"
                            }}>
                                <span style={{ fontWeight: "bold", color: "#FFFFFF", display: "flex", alignItems: "center", gap: "6px" }}>
                                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#25D366", display: "inline-block" }} />
                                    Live window.dataLayer Feed Logger
                                </span>
                                <button
                                    onClick={() => setLogs([])}
                                    style={{
                                        backgroundColor: "transparent",
                                        color: "rgba(255, 255, 255, 0.6)",
                                        border: "1px solid rgba(255, 255, 255, 0.3)",
                                        padding: "4px 8px",
                                        borderRadius: "4px",
                                        fontSize: "0.75rem",
                                        cursor: "pointer"
                                    }}
                                >
                                    Clear Feed
                                </button>
                            </div>

                            <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
                                {logs.length === 0 ? (
                                    <div style={{ color: "rgba(255, 255, 255, 0.4)", textAlign: "center", fontStyle: "italic", marginTop: "40px" }}>
                                        No events captured yet. Click one of the buttons on the left or browse the site to fire analytics!
                                    </div>
                                ) : (
                                    logs.map((log, index) => (
                                        <div key={index} style={{
                                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                                            borderRadius: "6px",
                                            padding: "10px",
                                            borderLeft: "3.5px solid #ef233c"
                                        }}>
                                            <span style={{ color: "#E2E8F0", fontSize: "0.78rem" }}>
                                                [{new Date(log.timestamp || Date.now()).toLocaleTimeString()}] Event:{" "}
                                                <strong style={{ color: "#ef233c" }}>{log.event}</strong>
                                            </span>
                                            <pre style={{ margin: "5px 0 0 0", overflowX: "auto", fontSize: "0.78rem", color: "#A2C1EA" }}>
                                                {JSON.stringify(log, null, 2)}
                                            </pre>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                    </div>

                </div>
            </main>

            {/* Toast Alert */}
            {toast && (
                <div style={{
                    position: "fixed",
                    bottom: "30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "rgba(11,31,69,0.9)",
                    color: "#ffffff",
                    padding: "10px 20px",
                    borderRadius: "30px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    boxShadow: "var(--shadow-md)",
                    zIndex: 100000,
                    transition: "all 0.3s ease"
                }}>
                    {toast}
                </div>
            )}

            <Footer />
        </>
    );
}
