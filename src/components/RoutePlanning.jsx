import React from 'react';
import routePlanningImg from '../assets/hero.png';

export default function RoutePlanning() {
    const routeStats = [
        {
            title: 'More visits per day',
            desc: 'Maximize field efficiency with smart route mapping.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <polyline points="16 11 18 13 22 9"></polyline>
                </svg>
            )
        },
        {
            title: 'Reduce fuel cost',
            desc: 'Avoid duplicate routes and save expense.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z"></path>
                </svg>
            )
        },
        {
            title: 'Reduced travel time',
            desc: 'Optimized route path minimizes travel delay.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
            )
        },
        {
            title: 'Increased productivity',
            desc: 'Empower your field force to achieve more.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
            )
        }
    ];

    return (
        <section id="features-routing" className="section">
            <div className="container two-col-layout">
                <div className="reveal active">
                    <span className="eyebrow">ROUTE OPTIMIZATION</span>
                    <h2 className="section-title">Smart Route Planning</h2>
                    <p className="section-description" style={{ marginBottom: '24px' }}>
                        MapWork automatically plans routes for field teams, ensuring your field force spends less time on the road and more time with customers.
                    </p>

                    <div className="stats-cards-grid">
                        {routeStats.map((stat, idx) => (
                            <div key={idx} className="stat-card" style={{ backgroundColor: 'var(--color-bg-white)' }}>
                                <h3 className="stat-card-title">
                                    {stat.icon}
                                    {stat.title}
                                </h3>
                                <p className="stat-card-value">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="reveal active" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    {/* Image container only, matching mockup */}
                    <div style={{ width: '100%', maxWidth: '460px', borderRadius: '12px', overflow: 'hidden', height: '280px', position: 'relative' }}>
                        <img
                            src={routePlanningImg}
                            alt="MapWork Smart Route Planning mockup showing city routes"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '12px',
                                border: '1px solid var(--color-border)',
                                boxShadow: 'var(--shadow-md)'
                            }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />

                        {/* Roads drawing grid lines Fallback */}
                        <svg width="100%" height="100%" style={{ display: 'none', position: 'absolute', top: 0, left: 0 }}>
                            <path d="M 0 50 L 500 50 M 0 150 L 500 150 M 0 250 L 500 250 M 0 350 L 500 350" stroke="#E5E7EB" strokeWidth="12" />
                            <path d="M 100 0 L 100 400 M 250 0 L 250 400 M 400 0 L 400 400" stroke="#E5E7EB" strokeWidth="12" />

                            <path d="M 0 50 L 500 50 M 0 150 L 500 150 M 0 250 L 500 250 M 0 350 L 500 350" stroke="#FFFFFF" strokeWidth="8" />
                            <path d="M 100 0 L 100 400 M 250 0 L 250 400 M 400 0 L 400 400" stroke="#FFFFFF" strokeWidth="8" />

                            {/* Route drawing */}
                            <path d="M 100 50 L 100 150 L 250 150 L 250 350 L 400 350" fill="none" stroke="rgba(200, 30, 58, 0.2)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M 100 50 L 100 150 L 250 150 L 250 350 L 400 350" fill="none" stroke="var(--color-accent-red)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

                            {/* Markers */}
                            <g style={{ transform: 'translate(100px, 50px)' }}>
                                <circle cx="0" cy="0" r="10" fill="#0B1F45" stroke="#fff" strokeWidth="2" />
                                <text x="-3" y="4" fill="#fff" fontSize="10" fontWeight="bold">S</text>
                                <rect x="15" y="-12" width="60" height="24" rx="4" fill="#0B1F45" />
                                <text x="22" y="4" fill="#fff" fontSize="9" fontWeight="500">Depot Start</text>
                            </g>

                            <g style={{ transform: 'translate(100px, 150px)' }}>
                                <circle cx="0" cy="0" r="8" fill="var(--color-accent-red)" stroke="#fff" strokeWidth="2" />
                                <text x="12" y="3" fill="var(--color-primary-navy)" fontSize="9" fontWeight="700">Stop 1</text>
                            </g>

                            <g style={{ transform: 'translate(250px, 150px)' }}>
                                <circle cx="0" cy="0" r="8" fill="var(--color-accent-red)" stroke="#fff" strokeWidth="2" />
                                <text x="12" y="3" fill="var(--color-primary-navy)" fontSize="9" fontWeight="700">Stop 2</text>
                            </g>

                            <g style={{ transform: 'translate(250px, 350px)' }}>
                                <circle cx="0" cy="0" r="8" fill="var(--color-accent-red)" stroke="#fff" strokeWidth="2" />
                                <text x="12" y="3" fill="var(--color-primary-navy)" fontSize="9" fontWeight="700">Stop 3</text>
                            </g>

                            <g style={{ transform: 'translate(400px, 350px)' }}>
                                <circle cx="0" cy="0" r="10" fill="#10B981" stroke="#fff" strokeWidth="2" />
                                <text x="-3" y="3" fill="#fff" fontSize="10" fontWeight="bold">E</text>
                                <rect x="-85" y="-12" width="75" height="24" rx="4" fill="#10B981" />
                                <text x="-78" y="4" fill="#fff" fontSize="9" fontWeight="500">Route Finish</text>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
