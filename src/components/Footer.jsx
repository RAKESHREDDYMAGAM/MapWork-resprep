"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [isWaHovered, setIsWaHovered] = useState(false);

    const handleLinkClick = (e, href) => {
        // If it's a hash anchor and we are currently on the home page, perform smooth scroll
        if (href.startsWith('/#') && typeof window !== 'undefined' && window.location.pathname === '/') {
            e.preventDefault();
            const targetId = href.replace('/#', '');
            const element = document.getElementById(targetId);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <footer className="footer-wrapper">
            <div className="container footer">
                <div className="footer-brand">
                    <Link href="/#home" onClick={(e) => handleLinkClick(e, '/#home')} className="navbar-logo-link" style={{ gap: '14px' }}>
                        <svg className="logo-icon-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '48px', height: '48px', flexShrink: 0 }}>
                            <rect width="100" height="100" rx="22" fill="rgba(255, 255, 255, 0.1)" />
                            <polygon points="35,52 6,85 35,85" fill="#ef233c" />
                            <polygon points="35,52 35,85 50,70" fill="#ba1833" />
                            <polygon points="65,52 50,70 65,85" fill="#ef233c" />
                            <polygon points="65,52 65,85 94,85" fill="#ba1833" />
                            <path d="M 6 85 L 35 52 L 50 70 L 65 52 L 94 85" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            <path d="M 50 66 C 41 58 35 48 35 36 C 35 27.7 41.7 21 50 21 L 50 66 Z" fill="#ef233c" />
                            <path d="M 50 66 L 50 21 C 58.3 21 65 27.7 65 36 C 65 48 59 58 50 66 Z" fill="#ba1833" />
                            <circle cx="50" cy="36" r="6.5" fill="#ffffff" />
                        </svg>
                        <div className="logo-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <div style={{ fontSize: '1.6rem', fontWeight: 700, lineHeight: 1.1 }}>
                                <span style={{ color: '#FFFFFF' }}>Map</span>
                                <span style={{ color: 'var(--color-accent-red)' }}>Work</span>
                            </div>
                            <span className="logo-subtext" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255, 255, 255, 0.7)', marginTop: '2px' }}>DISCOVER. MAP. EXECUTE.</span>
                        </div>
                    </Link>
                    <p className="footer-attribution" style={{ marginTop: '8px', fontSize: '1.18rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                        A product of ResultPrep Systems.
                    </p>
                </div>

                <div className="footer-col">
                    <h3 className="footer-col-title">Legal</h3>
                    <ul className="footer-col-links">
                        <li>
                            <Link href="#privacy" className="footer-link">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#terms" className="footer-link">Terms of Service</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3 className="footer-col-title">Company</h3>
                    <ul className="footer-col-links">
                        <li>
                            <Link href="/about" className="footer-link">About Us</Link>
                        </li>
                        <li>
                            <Link href="/blog" className="footer-link">Blog & Insights</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="footer-link">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3 className="footer-col-title">Support</h3>
                    <ul className="footer-col-links" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <li>
                            <Link href="/contact" className="footer-link">Contact Support</Link>
                        </li>
                        <li>
                            <Link href="#docs" className="footer-link">API Documentation</Link>
                        </li>
                        <li style={{ marginTop: '20px' }}>
                            {/* WhatsApp Quick Support Block matching image */}
                            <a
                                href="https://wa.me/918970007467?text=Hello%20MapWork,%20we%20need%20assistance."
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setIsWaHovered(true)}
                                onMouseLeave={() => setIsWaHovered(false)}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    textDecoration: 'none'
                                }}
                            >
                                {/* Icon Wrapper */}
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '16px',
                                    backgroundColor: isWaHovered ? 'var(--color-accent-red)' : 'rgba(255, 255, 255, 0.08)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    transition: 'background-color 0.25s ease'
                                }}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>

                                {/* Text labels */}
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{
                                        fontSize: '0.88rem',
                                        fontWeight: 700,
                                        color: isWaHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        lineHeight: 1.1,
                                        transition: 'color 0.25s ease'
                                    }}>
                                        WHATSAPP
                                    </span>
                                    <span style={{
                                        fontSize: '1.38rem',
                                        fontWeight: 800,
                                        color: isWaHovered ? 'var(--color-accent-red)' : '#FFFFFF',
                                        letterSpacing: '0.01em',
                                        marginTop: '2px',
                                        lineHeight: 1.1,
                                        transition: 'color 0.25s ease'
                                    }}>
                                        +91 89700 07467
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3 className="footer-col-title">Connect</h3>
                    <div className="footer-socials" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <a href="mailto:info@resultprep.com" className="footer-social-icon" aria-label="Email MapWork Support" style={{ color: '#E2E8F0', display: 'flex', alignItems: 'center' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </a>
                        <a href="https://x.com/MapWork_Geo" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Follow MapWork on X (Twitter)" style={{ color: '#E2E8F0', display: 'flex', alignItems: 'center' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '24px 24px 0 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <p>&copy; {currentYear} ResultPrep Systems. All rights reserved.</p>
                <p>Geo Intelligence Platform</p>
            </div>
        </footer>
    );
}
