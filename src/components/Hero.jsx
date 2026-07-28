"use client";

import React from 'react';
import Image from 'next/image';
import heroImg from '../assets/route_planning.png';

export default function Hero() {
    const handleScrollToContact = (e) => {
        e.preventDefault();
        const element = document.getElementById('contact');
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="section container" style={{ paddingTop: '120px' }}>
            <div className="hero-grid">
                <div className="hero-content reveal active">
                    <h1 className="hero-heading">
                        Discover Markets.<br />
                        Optimize Field Ops.<br />
                        <span className="highlight">Execute with Precision.</span>
                    </h1>
                    <p className="hero-subhead">
                        The all-in-one geo-intelligence platform for discovery, mapping, and territory management designed for professional field operations.
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" onClick={handleScrollToContact} className="btn btn-primary">
                            Get Started
                        </a>
                        <a href="#demo" className="btn btn-secondary">
                            <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polygon points="10 8 16 12 10 16 10 8"></polygon>
                            </svg>
                            Watch Demo
                        </a>
                    </div>
                </div>
                <div className="hero-image-container reveal active">
                    {/* Photographic Device Mockup */}
                    <Image
                        src={heroImg}
                        alt="MapWork Geo Intelligence Platform Tablet Interface Mockup"
                        className="hero-photo-mockup"
                        priority
                    />
                    {/* SVG Map Fallback Container */}
                    <div style={{ display: 'none', width: '100%', maxWidth: '500px', transform: 'rotate(1deg)' }}>
                        <svg viewBox="0 0 500 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
                            <rect width="500" height="380" fill="#f0f3f8" />
                            {/* Map grid lines */}
                            <path d="M50 0V380M100 0V380M150 0V380M200 0V380M250 0V380M300 0V380M350 0V380M400 0V380M450 0V380" stroke="#e1e6ef" strokeWidth="1" />
                            <path d="M0 50H500M0 100H500M0 150H500M0 200H500M0 250H500M0 300H500M0 350H500" stroke="#e1e6ef" strokeWidth="1" />
                            {/* Topographic height contours */}
                            <path d="M40 80C100 60 200 120 280 80C360 40 420 90 460 70" stroke="#d5deeb" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                            <path d="M30 180C140 140 220 230 300 190C380 150 430 220 470 170" stroke="#d5deeb" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                            {/* Route line */}
                            <path d="M120 240 L210 160 L290 270 L380 150" stroke="var(--color-primary-navy)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M120 240 L210 160 L290 270 L380 150" stroke="var(--color-accent-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 4" />
                            {/* Marker Points */}
                            <circle cx="120" cy="240" r="8" fill="var(--color-accent-red)" stroke="#fff" strokeWidth="2" />
                            <circle cx="210" cy="160" r="8" fill="var(--color-primary-navy)" stroke="#fff" strokeWidth="2" />
                            <circle cx="290" cy="270" r="8" fill="var(--color-primary-navy)" stroke="#fff" strokeWidth="2" />
                            <circle cx="380" cy="150" r="8" fill="var(--color-accent-red)" stroke="#fff" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
