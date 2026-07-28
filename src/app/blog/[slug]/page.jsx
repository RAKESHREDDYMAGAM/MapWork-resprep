"use client";

import React, { use } from 'react';
import BlogDetail from '../../../components/BlogDetail';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function BlogDetailPage({ params }) {
    const resolvedParams = use(params);
    const slug = resolvedParams.slug;

    return (
        <>
            <Navbar activeSection="blog" />
            <main style={{ marginTop: '80px' }}>
                <BlogDetail slug={slug} />
            </main>
            <Footer />
        </>
    );
}
