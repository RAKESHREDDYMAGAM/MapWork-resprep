"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import DiscoveryEngine from '../components/DiscoveryEngine';
import Database from '../components/Database';
import RoutePlanning from '../components/RoutePlanning';
import Industries from '../components/Industries';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';

export default function Page() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        // Scroll event listener to handle active state of nav links
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset for navbar and early detection

            const homeSection = document.getElementById('home');
            const featuresSection = document.getElementById('features');
            const pricingSection = document.getElementById('pricing');
            const contactSection = document.getElementById('contact');

            if (contactSection && scrollPosition >= contactSection.offsetTop) {
                setActiveSection('contact');
            } else if (pricingSection && scrollPosition >= pricingSection.offsetTop) {
                setActiveSection('pricing');
            } else if (featuresSection && scrollPosition >= featuresSection.offsetTop) {
                setActiveSection('features');
            } else {
                setActiveSection('home');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Simple intersection observer to add active class to scroll reveal items
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Animates once per reload
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar activeSection={activeSection} />
            <main>
                {/* Section 1: Hero */}
                <Hero />

                {/* Feature Sections Group */}
                <div id="features">
                    {/* Section 2: Problem */}
                    <Problem />

                    {/* Section 3: Geo Discovery Engine */}
                    <DiscoveryEngine />

                    {/* Section 4: Business Intelligence Database */}
                    <Database />

                    {/* Section 5: Smart Route Planning */}
                    <RoutePlanning />
                </div>

                {/* Section 6: Tailored Sector Solutions */}
                <Industries />

                {/* Section 7: Future Roadmap */}
                <Roadmap />
            </main>
            <Footer />
        </>
    );
}

