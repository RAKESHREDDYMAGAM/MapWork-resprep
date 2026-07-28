"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar({ activeSection, onLinkClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsDrawerOpen(false);

    // Smooth scroll to element or trigger callback
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar">
        <Link href="#home" onClick={(e) => handleNavClick(e, '#home')} className="navbar-logo-link" aria-label="MapWork Home" style={{ gap: '10px' }}>
          <svg className="logo-icon-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '32px', height: '32px', flexShrink: 0 }}>
            <rect width="100" height="100" rx="22" fill="#0B1F45" />
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
            <div style={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.1 }}>
              <span style={{ color: 'var(--color-primary-navy)' }}>Map</span>
              <span style={{ color: 'var(--color-accent-red)' }}>Work</span>
            </div>
            <span className="logo-subtext" style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(11, 31, 69, 0.65)', marginTop: '2px' }}>DISCOVER. MAP. EXECUTE.</span>
          </div>
        </Link>

        <nav>
          <ul className="nav-links">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="navbar-cta">
          <Link href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="btn btn-primary">
            Get Started
          </Link>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          aria-expanded={isDrawerOpen}
          aria-label="Toggle Navigation Menu"
        >
          {isDrawerOpen ? (
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`} aria-hidden={!isDrawerOpen}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="mobile-nav-link"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="btn btn-primary"
          style={{ width: '100%', textAlign: 'center' }}
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
