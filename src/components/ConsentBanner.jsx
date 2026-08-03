"use client";

import React, { useState, useEffect } from "react";
import { getConsentStatus, setConsentStatus } from "../lib/analytics";

export default function ConsentBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show banner after 1.5 seconds if consent status is not set yet
        const timer = setTimeout(() => {
            const current = getConsentStatus();
            if (current === "unset") {
                setIsVisible(true);
            }
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        setConsentStatus("granted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        setConsentStatus("denied");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div
            style={{
                position: "fixed",
                bottom: "24px",
                right: "24px",
                left: "24px",
                maxWidth: "480px",
                // Desktop breakpoint auto adjusts left position via media query normally, but styling via media query is cleaner.
                // We'll use inline responsive styling or fallback to inline rules.
                backgroundColor: "rgba(11, 31, 69, 0.95)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
                color: "#ffffff",
                zIndex: 99999,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "opacity 0.4s ease, transform 0.4s ease",
                animation: "slideInBanner 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
            }}
        >
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes slideInBanner {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @media (min-width: 640px) {
          div[style*="position: fixed"] {
            left: auto !important;
          }
        }
      `}} />

            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div style={{
                    backgroundColor: "rgba(239, 35, 60, 0.15)",
                    padding: "8px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef233c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="M12 6v6"></path>
                        <path d="M12 16h.01"></path>
                    </svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <h4 style={{
                        margin: 0,
                        fontSize: "1rem",
                        fontWeight: 800,
                        letterSpacing: "0.02em",
                        color: "#ffffff",
                        fontFamily: "var(--font-heading)"
                    }}>
                        Privacy Consent & Tracking
                    </h4>
                    <p style={{
                        margin: 0,
                        fontSize: "0.85rem",
                        lineHeight: 1.5,
                        color: "rgba(255, 255, 255, 0.8)",
                        fontFamily: "var(--font-body)"
                    }}>
                        We request permission to enable telemetry, performance analytics, heatmaps (Clarity), and conversion tag tracking (Google, Meta, LinkedIn) to improve territory mapping tools.
                    </p>
                </div>
            </div>

            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "12px",
                marginTop: "4px"
            }}>
                <button
                    onClick={handleDecline}
                    style={{
                        background: "transparent",
                        border: "1.5px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "8px",
                        color: "#ffffff",
                        padding: "8px 16px",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        transition: "all 0.2s"
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                        e.currentTarget.style.backgroundColor = "transparent";
                    }}
                >
                    Decline
                </button>
                <button
                    onClick={handleAccept}
                    style={{
                        background: "linear-gradient(135deg, #ef233c, #ba1833)",
                        border: "none",
                        borderRadius: "8px",
                        color: "#ffffff",
                        padding: "9px 18px",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(239, 35, 60, 0.35)",
                        transition: "all 0.2s"
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.opacity = "0.9";
                        e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.opacity = "1";
                        e.currentTarget.style.transform = "none";
                    }}
                >
                    Accept Analytics
                </button>
            </div>
        </div>
    );
}
