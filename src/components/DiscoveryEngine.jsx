import React, { useState } from 'react';
import discoveryImg from '../assets/discovery.png';

export default function DiscoveryEngine() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const capabilities = [
        'Geographic-based Business Discovery',
        'Pinpoint-level Discovery',
        'City-wide discovery',
        'Platform-wide discovery',
        'Custom territory scanning'
    ];

    const categories = [
        { id: 1, name: 'Automobile Workshops', emoji: '🚗' },
        { id: 2, name: 'Petrol Pumps', emoji: '⛽' },
        { id: 3, name: 'Hospitals', emoji: '🏥' },
        { id: 4, name: 'Schools', emoji: '🏫' },
        { id: 5, name: 'Restaurants', emoji: '🍴' },
        { id: 6, name: 'Pharmacies', emoji: '💊' },
        { id: 7, name: 'Retail Stores', emoji: '🛍️' },
        { id: 8, name: 'Hotels', emoji: '🏨' },
        { id: 9, name: 'Any Google Business Category', emoji: '✨', isFeatured: true }
    ];

    return (
        <section id="features-discovery" className="section">
            <div className="container two-col-layout">
                <div className="reveal active">
                    <span className="eyebrow">OUR SOLUTION</span>
                    <h2 className="section-title">Geo Discovery Engine</h2>
                    <p className="section-description" style={{ marginBottom: '24px' }}>
                        MapWork divides a geographic area into intelligent micro-zones and systematically scans each zone to identify businesses.
                    </p>

                    <h4 style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', color: 'var(--color-text-body)', marginBottom: '16px' }}>CAPABILITIES</h4>

                    <ul className="checklist">
                        {capabilities.map((cap, idx) => (
                            <li key={idx} className="checklist-item">
                                <span className="checkmark-circle">
                                    <svg viewBox="0 0 24 24">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                <span style={{ fontSize: '0.95rem' }}>{cap}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="card" style={{ padding: '20px', marginTop: '30px' }}>
                        <h4 className="category-heading">EXAMPLE CATEGORIES</h4>
                        <div className="pills-container">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                                    className={`pill ${cat.isFeatured ? 'pill-featured' : ''} ${selectedCategory === cat.id ? 'active' : ''}`}
                                    style={{
                                        backgroundColor: selectedCategory === cat.id ? (cat.isFeatured ? 'var(--color-accent-red)' : 'var(--color-primary-navy)') : '',
                                        borderColor: selectedCategory === cat.id ? (cat.isFeatured ? 'var(--color-accent-red)' : 'var(--color-primary-navy)') : '',
                                        color: selectedCategory === cat.id ? '#FFF' : '',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    }}
                                >
                                    <span style={{ fontSize: '1rem', display: 'inline-flex', alignItems: 'center' }}>{cat.emoji}</span>
                                    <span>{cat.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="reveal active image-panel-flipped" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '100%', maxWidth: '460px', borderRadius: '12px', overflow: 'hidden', position: 'relative', height: '400px' }}>
                        <img
                            src={discoveryImg}
                            alt="Geo Discovery Engine active scanning map"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '12px',
                                border: '1px solid var(--color-border)',
                                boxShadow: 'var(--shadow-lg)'
                            }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        {/* Beautiful SVG Scanning Area Visualization Fallback */}
                        <div style={{ display: 'none', width: '100%', height: '100%', backgroundColor: '#0B1F45', position: 'relative' }}>
                            {/* Background grid */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                                backgroundSize: '24px 24px'
                            }}></div>

                            {/* Radar scanner sweep indicator */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: '300px',
                                height: '300px',
                                borderRadius: '50%',
                                border: '1px solid rgba(200, 30, 58, 0.3)',
                                transform: 'translate(-50%, -50%)Scale(1)',
                                background: 'radial-gradient(circle, rgba(200,30,58,0) 40%, rgba(200,30,58,0.05) 75%, rgba(200,30,58,0.2) 100%)',
                            }}></div>

                            {/* Scanning radar sweep line */}
                            <svg style={{ position: 'absolute', width: '100%', height: '100%' }}>
                                {/* Concentric helper circles */}
                                <circle cx="50%" cy="50%" r="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                                <circle cx="50%" cy="50%" r="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                                <circle cx="50%" cy="50%" r="150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />

                                {/* Scanning sweep beam */}
                                <line x1="50%" y1="50%" x2="90%" y2="20%" stroke="var(--color-accent-red)" strokeWidth="2" opacity="0.6" />

                                {/* Scan nodes (hexagon microzones) */}
                                <polygon points="230,150 250,140 270,150 270,170 250,180 230,170" fill="none" stroke="rgba(200, 30, 58, 0.4)" strokeWidth="2" />
                                <polygon points="250,180 270,170 290,180 290,200 270,210 250,200" fill="none" stroke="rgba(200, 30, 58, 0.4)" strokeWidth="2" />
                                <polygon points="210,180 230,170 250,180 250,200 230,210 210,200" fill="rgba(200, 30, 58, 0.15)" stroke="var(--color-accent-red)" strokeWidth="2" />

                                {/* Discovered pins */}
                                <g style={{ transform: 'translate(100px, 120px)' }}>
                                    <circle cx="12" cy="12" r="16" fill="rgba(16, 185, 129, 0.15)" />
                                    <circle cx="12" cy="12" r="5" fill="#10B981" />
                                    <text x="25" y="16" fill="#fff" fontSize="10" fontWeight="bold">Hospital</text>
                                </g>

                                <g style={{ transform: 'translate(280px, 90px)' }}>
                                    <circle cx="12" cy="12" r="12" fill="rgba(245, 158, 11, 0.15)" />
                                    <circle cx="12" cy="12" r="4" fill="#F59E0B" />
                                    <text x="25" y="16" fill="#fff" fontSize="10" fontWeight="bold">Fuel Station</text>
                                </g>

                                <g style={{ transform: 'translate(260px, 240px)' }}>
                                    <circle cx="12" cy="12" r="14" fill="rgba(59, 130, 246, 0.15)" />
                                    <circle cx="12" cy="12" r="4" fill="#3B82F6" />
                                    <text x="25" y="16" fill="#fff" fontSize="10" fontWeight="bold">School</text>
                                </g>

                                {/* Coordinates indicators */}
                                <text x="20" y="380" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">GRID SCAN SUBZONE ACTIVE: 28.6139° N, 77.2090° E</text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
