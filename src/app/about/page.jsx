import React from 'react';
import About from '../../components/About';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'About Us | MapWork',
    description: 'Learn about MapWork - our mission, vision, and how we are bridging coordinates accuracy and operations.'
};

export default function AboutPage() {
    return (
        <>
            <Navbar activeSection="about" />
            <main style={{ marginTop: '80px' }}>
                <About />
            </main>
            <Footer />
        </>
    );
}
