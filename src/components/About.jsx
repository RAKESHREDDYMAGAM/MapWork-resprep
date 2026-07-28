"use client";

import React from 'react';

export default function About() {
    return (
        <section id="about" style={{ backgroundColor: 'var(--color-bg-white)', padding: '100px 0', borderTop: '1px solid var(--color-border)' }}>

            {/* Visual Navy Theme statement fold */}
            <div className="container" style={{ marginBottom: '80px' }}>
                <div style={{
                    backgroundColor: 'var(--color-primary-navy)',
                    color: '#FFFFFF',
                    borderRadius: 'var(--radius-lg)',
                    padding: '60px 40px',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    <span className="eyebrow" style={{ color: 'var(--color-accent-red)', fontWeight: 800 }}>Our Vision</span>
                    <h2 style={{
                        fontSize: '2.4rem',
                        color: '#FFFFFF',
                        fontWeight: 800,
                        maxWidth: '850px',
                        margin: '16px auto',
                        lineHeight: 1.25,
                        fontFamily: 'var(--font-heading)'
                    }}>
                        Our Mission: Bridging data accuracy and geo-operations.
                    </h2>
                    <p style={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: '1.05rem',
                        maxWidth: '650px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        MapWork is built to provide developers, logistics teams, and field managers with precise spatial grid controls and custom boundary logic that standard consumer maps cannot support.
                    </p>
                </div>
            </div>

            {/* Grid: Concept Section */}
            <div className="container" style={{ marginBottom: '80px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '50px',
                    alignItems: 'center'
                }}>
                    <div>
                        <span className="eyebrow">The Mapping Problem</span>
                        <h3 style={{
                            fontSize: '2rem',
                            color: 'var(--color-primary-navy)',
                            fontWeight: 800,
                            margin: '10px 0 20px 0',
                            lineHeight: 1.3
                        }}>
                            Legacy Maps Fail at Operating Grids
                        </h3>
                        <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '16px' }}>
                            Most web applications rely on standard consumer GPS mapping providers. However, consumer maps are designed for consumer navigation, causing critical failures for business dispatch systems:
                        </p>
                        <ul style={{ paddingLeft: '20px', listStyleType: 'disc', color: 'var(--color-text-body)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li><strong>Dynamic Geofences:</strong> Difficult to redraw boundaries in real-time.</li>
                            <li><strong>Road Quality Metaphors:</strong> Ignores private roads, access gates, and specialized industrial routing.</li>
                            <li><strong>Data Ownership:</strong> Third-party tracking compromises customer privacy.</li>
                        </ul>
                    </div>

                    <div style={{
                        backgroundColor: 'var(--color-bg-light)',
                        padding: '40px',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)'
                    }}>
                        <h4 style={{ fontSize: '1.3rem', color: 'var(--color-primary-navy)', fontWeight: 750, marginBottom: '16px' }}>
                            The MapWork Solution
                        </h4>
                        <p style={{ fontSize: '0.96rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                            MapWork establishes a private, high-fidelity spatial data engine for your organization. By combining direct custom coordinate grids with real-time GPS asset streams, your operations manager is empowered with accurate data visualization of route status, sales territory borders, and active site boundaries.
                        </p>
                    </div>
                </div>
            </div>

            {/* Grid: Core Pillars */}
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <span className="eyebrow">Core Standards</span>
                    <h2 style={{ fontSize: '2.2rem', color: 'var(--color-primary-navy)', fontWeight: 800 }}>
                        What Sets MapWork Apart
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px'
                }}>
                    {/* Card 1 */}
                    <div className="card" style={{ padding: '30px' }}>
                        <span style={{ fontSize: '2.2rem', color: 'var(--color-accent-red)' }}>🔒</span>
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', margin: '15px 0 10px 0', fontWeight: 750 }}>
                            Privacy-First Philosophy
                        </h3>
                        <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                            Inspired by the privacy systems from carcall.in, we encrypt and isolate your company's location datasets, ensuring zero third-party leaking.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="card" style={{ padding: '30px' }}>
                        <span style={{ fontSize: '2.2rem', color: 'var(--color-accent-red)' }}>🎯</span>
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', margin: '15px 0 10px 0', fontWeight: 750 }}>
                            Pinpoint Accuracy Grid
                        </h3>
                        <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                            Create operational territories with precise polygon coordinates that sync to field dispatchers within milliseconds.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="card" style={{ padding: '30px' }}>
                        <span style={{ fontSize: '2.2rem', color: 'var(--color-accent-red)' }}>⚡</span>
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', margin: '15px 0 10px 0', fontWeight: 750 }}>
                            Real-Time Sync Engine
                        </h3>
                        <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                            Continuous coordinates streaming means dispatch borders and route alterations scale dynamically and load instantly.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}
