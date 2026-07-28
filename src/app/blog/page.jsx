import React from 'react';
import Blog from '../../components/Blog';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Blog & Insights | MapWork',
    description: 'Discover spatial indexing, logistics coordinates, operations routing grids, and product release updates.'
};

export default function BlogListingPage() {
    return (
        <>
            <Navbar activeSection="blog" />
            <main style={{ marginTop: '80px' }}>
                <Blog />
            </main>
            <Footer />
        </>
    );
}
