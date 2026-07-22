import React from 'react';

export default function Roadmap() {
    const featured = {
        title: 'AI-Based Lead Scoring',
        desc: 'Predict transaction value and prioritize high-value leads.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                <path d="M2 12h20"></path>
            </svg>
        )
    };

    const midLevel = [
        {
            title: 'Mobile App',
            desc: 'Field agent app with offline sync.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
            )
        },
        {
            title: 'WhatsApp Integration',
            desc: 'Real-time updates and alerts for field teams.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
            )
        },
        {
            title: 'Predictive Territory Analysis',
            desc: 'Forecast market potential accurately.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                    <path d="M3 20h18"></path>
                </svg>
            )
        }
    ];

    const bottomLevel = [
        {
            title: 'CRM Integration',
            desc: 'Deep integration with Salesforce and HubSpot.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
            )
        },
        {
            title: 'Real-Time Team Tracking',
            desc: 'Live location of field operations.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            )
        },
        {
            title: 'Automated Reporting',
            desc: 'Daily digests delivered to your inbox.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            )
        }
    ];

    return (
        <section id="roadmap" className="section">
            <div className="container">
                <span className="eyebrow">FUTURE ROADMAP</span>
                <h2 className="section-title" style={{ marginBottom: '40px' }}>Upcoming Innovations</h2>

                <div className="roadmap-grid">
                    {/* Left Column: AI-Based Lead Scoring */}
                    <div className="roadmap-large-col">
                        <div className="card roadmap-card featured" style={{ textAlign: 'center', height: '100%' }}>
                            <div className="card-icon-container" style={{ margin: '0 auto 16px auto', width: '56px', height: '56px', fontSize: '1.75rem', backgroundColor: 'rgba(200, 30, 58, 0.05)', color: 'var(--color-accent-red)', borderRadius: '50%' }}>
                                {featured.icon}
                            </div>
                            <h3 className="roadmap-card-title" style={{ fontSize: '1.4rem', fontWeight: '800' }}>
                                {featured.title}
                            </h3>
                            <p className="roadmap-card-desc" style={{ fontSize: '1rem', marginTop: '4px' }}>
                                {featured.desc}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: 2 columns of smaller cards */}
                    <div className="roadmap-small-grid">
                        <div className="card roadmap-card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '16px' }}>
                            <div className="card-icon-container" style={{ width: '36px', height: '36px', fontSize: '1.2rem', margin: 0, backgroundColor: 'rgba(200, 30, 58, 0.05)', color: 'var(--color-accent-red)', flexShrink: 0, borderRadius: '4px' }}>
                                {midLevel[0].icon}
                            </div>
                            <div>
                                <h3 className="roadmap-card-title" style={{ margin: '0 0 4px 0' }}>{midLevel[0].title}</h3>
                                <p className="roadmap-card-desc" style={{ margin: 0 }}>{midLevel[0].desc}</p>
                            </div>
                        </div>

                        <div className="card roadmap-card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '16px' }}>
                            <div className="card-icon-container" style={{ width: '36px', height: '36px', fontSize: '1.2rem', margin: 0, backgroundColor: 'rgba(200, 30, 58, 0.05)', color: 'var(--color-accent-red)', flexShrink: 0, borderRadius: '4px' }}>
                                {midLevel[1].icon}
                            </div>
                            <div>
                                <h3 className="roadmap-card-title" style={{ margin: '0 0 4px 0' }}>{midLevel[1].title}</h3>
                                <p className="roadmap-card-desc" style={{ margin: 0 }}>{midLevel[1].desc}</p>
                            </div>
                        </div>

                        <div className="card roadmap-card roadmap-span-full" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '16px' }}>
                            <div className="card-icon-container" style={{ width: '36px', height: '36px', fontSize: '1.2rem', margin: 0, backgroundColor: 'rgba(200, 30, 58, 0.05)', color: 'var(--color-accent-red)', flexShrink: 0, borderRadius: '4px' }}>
                                {midLevel[2].icon}
                            </div>
                            <div>
                                <h3 className="roadmap-card-title" style={{ margin: '0 0 4px 0' }}>{midLevel[2].title}</h3>
                                <p className="roadmap-card-desc" style={{ margin: 0 }}>{midLevel[2].desc}</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row spanning full width */}
                    <div className="roadmap-bottom-row">
                        {bottomLevel.map((item, idx) => (
                            <div key={idx} className="card roadmap-card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '16px' }}>
                                <div
                                    className="card-icon-container"
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        fontSize: '1.2rem',
                                        margin: 0,
                                        backgroundColor: 'rgba(200, 30, 58, 0.05)',
                                        color: 'var(--color-accent-red)',
                                        flexShrink: 0,
                                        borderRadius: '4px'
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="roadmap-card-title" style={{ margin: '0 0 4px 0' }}>{item.title}</h3>
                                    <p className="roadmap-card-desc" style={{ margin: 0 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
