import React from 'react';

export default function Problem() {
    const problems = [
        {
            id: 1,
            label: 'Identify businesses in a target geography',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="3"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                </svg>
            )
        },
        {
            id: 2,
            label: 'Build accurate prospect database',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
                </svg>
            )
        },
        {
            id: 3,
            label: 'Monitor field teams effectively',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.062 12C3.393 7.828 7.378 5 12 5c4.622 0 8.607 2.828 9.938 7-1.313 4.155-5.289 7-9.938 7-4.649 0-8.625-2.845-9.938-7z"></path>
                    <circle cx="12" cy="11.5" r="2.5"></circle>
                    <path d="M8.5 16.5c0-1.5 1.5-2.5 3.5-2.5s3 1 3.5 2.5"></path>
                </svg>
            )
        },
        {
            id: 4,
            label: 'Plan efficient daily routes',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H16" />
                    <circle cx="5" cy="19" r="1.8" fill="currentColor" />
                    <circle cx="19" cy="5" r="1.8" fill="currentColor" />
                </svg>
            )
        },
        {
            id: 5,
            label: 'Measure territory change',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                    <line x1="9" y1="3" x2="9" y2="18"></line>
                    <line x1="15" y1="6" x2="15" y2="21"></line>
                </svg>
            )
        },
        {
            id: 6,
            label: 'Track visit outcomes',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    <rect x="9" y="10" width="6" height="6" rx="1"></rect>
                    <path d="M11 13l1 1 2-2"></path>
                </svg>
            )
        },
        {
            id: 7,
            label: 'Maintain fresh market intelligence',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
                </svg>
            )
        }
    ];

    return (
        <section id="features" className="section alt-bg">
            <div className="container">
                <span className="eyebrow">THE PROBLEM</span>
                <h2 className="section-title">Organizations Struggle To</h2>

                <div className="cards-grid-7" style={{ marginTop: '40px' }}>
                    {problems.map((prob) => (
                        <div key={prob.id} className="card problem-card">
                            <div className="card-icon-container">
                                {prob.icon}
                            </div>
                            <h3 className="problem-card-title">{prob.label}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
