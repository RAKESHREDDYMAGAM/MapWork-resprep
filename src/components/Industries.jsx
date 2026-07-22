import React from 'react';

export default function Industries() {
    const industries = [
        {
            id: 1,
            name: 'Automotive',
            useCase: 'Dealer networks, Warehouse/parts distributors',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
            )
        },
        {
            id: 2,
            name: 'Banking & NBFCs',
            useCase: 'Merchant acquisition, Loan collection',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="10" width="18" height="11" rx="2"></rect>
                    <path d="M12 2L2 9h20L12 2zM6 14v4M10 14v4M14 14v4M18 14v4"></path>
                </svg>
            )
        },
        {
            id: 3,
            name: 'FMCG',
            useCase: 'Depot Expansion & Distributor Mapping',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
            )
        },
        {
            id: 4,
            name: 'Telecom',
            useCase: 'Retailer Onboarding',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 22h20L12 2z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                    <line x1="12" y1="7" x2="12" y2="8"></line>
                </svg>
            )
        },
        {
            id: 5,
            name: 'Healthcare',
            useCase: 'Pharmacy & Lab Networks',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            )
        },
        {
            id: 6,
            name: 'Education',
            useCase: 'School Network & Student Acquisition',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
            )
        },
        {
            id: 7,
            name: 'Government',
            useCase: 'Public Works, Field Projects',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18"></path>
                    <path d="M10 22v-4h4v4M18 10h-2M18 14h-2M8 10h2M8 14h2"></path>
                </svg>
            )
        }
    ];

    return (
        <section id="industries" className="section alt-bg">
            <div className="container">
                <span className="eyebrow">INDUSTRIES</span>
                <h2 className="section-title">Tailored Solution for Every Sector</h2>

                <div className="industries-grid" style={{ marginTop: '40px' }}>
                    {industries.map((ind) => (
                        <div key={ind.id} className="card industry-card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '16px' }}>
                            <div
                                className="card-icon-container"
                                style={{
                                    backgroundColor: 'rgba(11, 31, 69, 0.05)',
                                    color: 'var(--color-primary-navy)',
                                    width: '40px',
                                    height: '40px',
                                    fontSize: '1.25rem',
                                    flexShrink: 0
                                }}
                            >
                                {ind.icon}
                            </div>
                            <div>
                                <h3 className="industry-title" style={{ marginTop: 0, marginBottom: '4px' }}>{ind.name}</h3>
                                <p className="industry-desc">{ind.useCase}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
