import React from 'react';

export default function Database() {
    const dataPoints = [
        {
            name: 'Business Name',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            )
        },
        {
            name: 'Address',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            )
        },
        {
            name: 'Category',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
            )
        },
        {
            name: 'Latitude & Longitude',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="22" y1="12" x2="18" y2="12" />
                    <line x1="6" y1="12" x2="2" y2="12" />
                    <line x1="12" y1="6" x2="12" y2="2" />
                    <line x1="12" y1="22" x2="12" y2="18" />
                </svg>
            )
        },
        {
            name: 'Google Place ID',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <line x1="7" y1="8" x2="17" y2="8" />
                    <line x1="7" y1="12" x2="17" y2="12" />
                    <line x1="7" y1="16" x2="13" y2="16" />
                </svg>
            )
        },
        {
            name: 'Discovery Date',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            )
        },
        {
            name: 'Contact information & more details',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            )
        }
    ];

    const benefits = [
        {
            title: 'Rapid collection',
            description: 'Real-time analytics for field operations.'
        },
        {
            title: 'Continuously updated',
            description: 'Fresh intelligence you can trust.'
        },
        {
            title: 'Exportable to CRM',
            description: 'Seamless integration with your routing tools.'
        },
        {
            title: 'Ready for Field Operations',
            description: 'Direct translation from discovery to execution.'
        }
    ];

    return (
        <section id="database" className="section alt-bg">
            <div className="container two-col-layout database-layout">
                <div className="reveal active">
                    <span className="eyebrow">DATABASE INTELLIGENCE</span>
                    <h2 className="section-title">Business Intelligence Database</h2>
                    <p className="section-description" style={{ marginBottom: '32px' }}>
                        For every discovered location, MapWork delivers structured profiles ready for your operations.
                    </p>

                    <h4 style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', color: 'var(--color-text-body)', marginBottom: '16px' }}>Comprehensive Data Points</h4>
                    <ul className="checklist">
                        {dataPoints.map((point, idx) => (
                            <li key={idx} className="checklist-item" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'var(--color-accent-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', flexShrink: 0 }}>
                                    {point.icon}
                                </span>
                                <span style={{ fontSize: '0.95rem' }}>{point.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="reveal active">
                    <h4 style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', color: 'var(--color-text-body)', marginBottom: '24px' }}>Platform Benefits</h4>
                    <div className="benefits-grid">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="card">
                                <h3 className="benefit-card-title">{benefit.title}</h3>
                                <p className="benefit-card-desc">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
