import React from 'react';
import Contact from '../../components/Contact';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Contact Us | MapWork',
    description: 'Reach out to our spatial coordinate engineers, schedule an operations audit, or access live support.'
};

export default function ContactPage() {
    return (
        <>
            <Navbar activeSection="contact" />
            <main style={{ marginTop: '80px' }}>
                <Contact />
            </main>
            <Footer />
        </>
    );
}
