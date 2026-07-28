"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Mock Blog Posts Dataset directly embedded to avoid page directory conflicts
export const BLOG_POSTS = [
    {
        slug: 'optimizing-last-mile-logistics-metropolitan-cities',
        title: 'Optimizing Last-Mile Logistics in Metropolitan Cities',
        date: 'July 24, 2026',
        category: 'Field Operations',
        author: 'Elena Rostova',
        readTime: '6 min read',
        summary: 'Analyze grid boundaries, route bottlenecks, and traffic coordination layers to achieve 98.6% on-time dispatch efficiency.',
        content: `# Optimizing Last-Mile Logistics in Metropolitan Cities

Urban last-mile delivery is widely recognized as the most expensive, complex, and inefficient leg of the logistics journey. As metropolitan densities increase, logistics operators face rising challenges with congestion, strict regulatory constraints, and high customer expectations.

### The Urban Bottleneck

In metropolitan routing, traditional GPS tracking struggles due to:
* **The Canyon Effect:** Tall buildings causing satellite signal bounce, resulting in tracking drift of up to 40 meters.
* **Unpredictable Access Points:** Loading bays, pedestrian zones, and lock boxes that aren't mapped on commercial GPS networks.
* **Complex Multi-floor Routing:** Couriers spending up to 30% of their street-level dispatch time searching for offices in high-rises.

## Implementing Spatial Boundary Solutions

To solve mapping discrepancies, operational teams are establishing custom geofenced terminals. By defining local loading circles and vehicle-specific access coordinates, dispatchers can route trucks directly to active cargo docks.

### key takeaways:
1. **Dynamic Micro-hubs:** Staging shipping containers in parking zones based on daily shipping volumes.
2. **Access Koordinaten Mapping:** Isolating building access nodes and mapping paths to freight elevators.
3. **Encrypted Routing Streams:** Protecting proprietary distribution paths from tracking scrapers.

> "Data accuracy in route coordinates is the singular difference between a 12-minute delivery stop and a 45-minute parking fine."
`
    },
    {
        slug: 'increasing-field-sales-productivity-territory-design',
        title: 'Increasing Field Sales Productivity with Territory Design',
        date: 'July 20, 2026',
        category: 'Sales Strategy',
        author: 'Marcus Vance',
        readTime: '4 min read',
        summary: 'How custom polygon boundaries avoid sales team overlap, map leads clearly, and maximize regional coverage.',
        content: `# Increasing Field Sales Productivity with Territory Design

In multi-regional field sales, undefined coverage boundaries lead to team conflicts, doubled efforts, and overlooked opportunities. Structured territory mapping organizes territories to keep sales agents productive.

### The Problem with ZIP Codes

Typical companies assign territories using radial circles or ZIP codes. This design exhibits critical pitfalls:
* **Asymmetric Commutes:** A ZIP code split by a river or highway might require a 40-minute detour.
* **Density Variances:** One ZIP code may contain 15 corporate headquarters, while another contains 3.
* **Bidding Overlap:** Sales agents attempting to pitch to different contacts at the same organization.

## Modern Coordinate Boundary Mapping

By deploying custom coordinate polygons, regional managers can design maps around local infrastructure realities and client counts. 

* **Commute-Balanced Grids:** Draw borders aligned with actual highways and bridges.
* **Equal Opportunity Grids:** Align boundaries such that each agent has access to a similar sales volume value.
* **Dynamic Re-shaping:** Drag and drop coordinates to re-allocate zones as sales accounts expand.

> "A balanced sales region prevents competitive conflicts and maximizes lead touchpoints."
`
    },
    {
        slug: 'building-resilient-spatial-geofencing-systems',
        title: 'Building Resilient Spatial Geofencing Systems',
        date: 'July 15, 2026',
        category: 'Mapping Intelligence',
        author: 'Sean O\'Connor',
        readTime: '8 min read',
        summary: 'A technical exploration of coordinate mathematics, geofence check triggers, and optimizing cell queries.',
        content: `# Building Resilient Spatial Geofencing Systems

Geofencing—detecting when a device enters or exits a predefined coordinate boundary—powers fleet dispatch notifications, safety alerts, and operations triggers. 

### Performance Challenges at Scale

Running geofence polygon checks for 10,000 active devices every 10 seconds is computationally intense:
1. **Ray-Casting Algorithm Limits:** Checking if a coordinate lies inside a complex polygon with 50 points requires extensive CPU cycles.
2. **Battery Drain:** Continuous high-interval GPS queries deplete device batteries quickly.
3. **Network Latency:** Running checks on servers causes delayed triggers.

## Optimizing Boundary Queries

To optimize geofencing calculations, engineers employ **Spatial Indexes**:

### 1. Spatial Partitioning
Instead of checking all polygons, partition coordinates into H3 Hexagonal or S2 grids. Match the device to its local cell, and only query geofences within that cell.

### 2. Radial Pre-filtering
Perform a cheap distance check from the device to the geofence bounding box. Run detailed ray-casting only if the device is within range.

### 3. Edge Computing
Deploy localized boundaries onto mobile devices, running checks client-side to avoid server trip lag.
`
    },
    {
        slug: 'announcing-mapwork-v2-enhanced-coordinate-grids',
        title: 'Announcing MapWork v2.0: Enhanced Coordinate Grids',
        date: 'June 30, 2026',
        category: 'Product Updates',
        author: 'Diana Prince',
        readTime: '3 min read',
        summary: 'Explore our newly launched spatial boundary tools, custom polygon rendering speeds, and REST API updates.',
        content: `# Announcing MapWork v2.0: Enhanced Coordinate Grids

We are excited to release MapWork 2.0. This release enhances dynamic coordinates rendering and reduces API sync latency.

### Key New Features

* **Sub-Millisecond Rendering:** Canvas polygon rendering speeds increased by 400% for complex operations grids.
* **REST API v2:** Access GPS asset coordinates logs, boundary intersections, and territory profiles in single calls.
* **Self-Healing Polygons:** Automatic snapping fixes overlay gaps, preventing boundary cracks.

## Getting Started

Updating is simple. Change your system endpoint hooks to call \`https://api.mapwork.com/v2\` and read the documentation for new grid schemas.
            `
    }
];

// Helper to render markdown text inside component modal
function renderModalMarkdown(content) {
    if (!content) return null;
    const lines = content.split('\n');
    let currentList = [];
    const renderedElements = [];

    const flushList = (key) => {
        if (currentList.length > 0) {
            renderedElements.push(
                <ul key={`list- ${key}`} style={{ paddingLeft: '24px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {currentList}
                </ul>
            );
            currentList = [];
        }
    };

    const parseBold = (text) => {
        if (!text.includes('**')) return text;
        return text.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} style={{ color: 'var(--color-primary-navy)' }}>{part}</strong> : part);
    };

    lines.forEach((line, index) => {
        const trimmed = line.trim();
        if (!trimmed) {
            flushList(index);
            return;
        }

        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
            currentList.push(
                <li key={`li - ${index}`} style={{ fontSize: '0.98rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                    {parseBold(trimmed.substring(2))}
                </li>
            );
        } else if (trimmed.startsWith('### ')) {
            flushList(index);
            renderedElements.push(
                <h3 key={`h3 - ${index}`} style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', marginTop: '28px', marginBottom: '12px', fontWeight: 700 }}>
                    {trimmed.substring(4)}
                </h3>
            );
        } else if (trimmed.startsWith('## ')) {
            flushList(index);
            renderedElements.push(
                <h2 key={`h2 - ${index}`} style={{ fontSize: '1.5rem', color: 'var(--color-primary-navy)', marginTop: '36px', marginBottom: '16px', fontWeight: 750, borderBottom: '1px solid var(--color-border)', paddingBottom: '6px' }}>
                    {trimmed.substring(3)}
                </h2>
            );
        } else if (trimmed.startsWith('# ')) {
            flushList(index);
            renderedElements.push(
                <h1 key={`h1 - ${index}`} style={{ fontSize: '1.9rem', color: 'var(--color-primary-navy)', marginTop: '20px', marginBottom: '20px', fontWeight: 800 }}>
                    {trimmed.substring(2)}
                </h1>
            );
        } else if (trimmed.startsWith('> ')) {
            flushList(index);
            renderedElements.push(
                <blockquote key={`bq - ${index}`} style={{ borderLeft: '4px solid var(--color-accent-red)', paddingLeft: '16px', margin: '20px  0', fontStyle: 'italic', color: 'var(--color-primary-navy)' }}>
                    {trimmed.substring(2)}
                </blockquote>
            );
        } else {
            flushList(index);
            renderedElements.push(
                <p key={`p - ${index}`} style={{ fontSize: '0.98rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '16px' }}>
                    {parseBold(trimmed)}
                </p>
            );
        }
    });

    flushList(lines.length);
    return renderedElements;
}

export default function Blog() {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentCategory, setCurrentCategory] = useState('All');
    const [activePost, setActivePost] = useState(null);

    // Categories list
    const categories = ['All', 'Field Operations', 'Mapping Intelligence', 'Sales Strategy', 'Product Updates'];

    const filteredPosts = BLOG_POSTS.filter(post => {
        const matchesCategory = currentCategory === 'All' || post.category === currentCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Handle ESC key to close modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setActivePost(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section id="blog" style={{ backgroundColor: 'var(--color-bg-white)', padding: '100px 0', borderTop: '1px solid var(--color-border)' }}>
            <div className="container" style={{ maxWidth: '1100px' }}>

                {/* Header Title Fold */}
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <span className="eyebrow">MapWork Resources</span>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary-navy)', fontWeight: 800, marginBottom: '16px' }}>
                        Operations & Mapping Intelligence
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-body)' }}>
                        Discover industry best practices for route optimization, commercial fleet management, and spatial boundary systems.
                    </p>
                </div>

                {/* Filter Controls Panel */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    margin: '0 0 40px 0',
                    padding: '24px',
                    backgroundColor: 'var(--color-bg-light)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border)'
                }}>
                    {/* Search bar */}
                    <div style={{ position: 'relative', width: '100%' }}>
                        <div style={{
                            position: 'absolute',
                            left: '16px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'var(--color-text-body)',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search guides, operations templates, and product updates..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px 14px 12px 44px',
                                borderRadius: 'var(--radius-sm)',
                                border: '1.5.px solid var(--color-border)',
                                fontSize: '0.92rem',
                                outline: 'none',
                                backgroundColor: '#FFFFFF',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    {/* Categories Pill bar */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-primary-navy)', marginRight: '10px' }}>
                            Filter By Topic:
                        </span>
                        {categories.map((cat) => {
                            const isActive = currentCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setCurrentCategory(cat)}
                                    style={{
                                        padding: '6px 14px',
                                        borderRadius: '20px',
                                        border: '1px solid',
                                        borderColor: isActive ? 'var(--color-accent-red)' : 'var(--color-border)',
                                        backgroundColor: isActive ? 'var(--color-accent-red)' : '#FFFFFF',
                                        color: isActive ? '#FFFFFF' : 'var(--color-text-body)',
                                        fontSize: '0.82rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>

                </div>

                {/* Cards Grid */}
                {filteredPosts.length === 0 ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '50px 20px',
                        backgroundColor: 'var(--color-bg-light)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)'
                    }}>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-navy)', marginBottom: '8px' }}>
                            No Articles Found
                        </h3>
                        <p style={{ color: 'var(--color-text-body)', fontSize: '0.9rem' }}>
                            Try checking code spelling or selecting another topic filter.
                        </p>
                    </div>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '30px'
                    }}>
                        {filteredPosts.map((post) => (
                            <article key={post.slug} className="card" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '100%',
                                padding: '30px'
                            }}>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                                        <span style={{
                                            fontSize: '0.7rem',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                            color: 'var(--color-accent-red)',
                                            backgroundColor: 'rgba(200, 30, 58, 0.08)',
                                            padding: '4px 8px',
                                            borderRadius: '20px'
                                        }}>
                                            {post.category}
                                        </span>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-body)' }}>{post.readTime}</span>
                                    </div>

                                    <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary-navy)', marginBottom: '10px', fontWeight: 700, lineHeight: 1.35 }}>
                                        {post.title}
                                    </h3>

                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.5, marginBottom: '20px' }}>
                                        {post.summary}
                                    </p>
                                </div>

                                <div style={{
                                    borderTop: '1px solid var(--color-border)',
                                    paddingTop: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 650, color: 'var(--color-primary-navy)' }}>{post.author}</span>
                                        <span style={{ fontSize: '0.74rem', color: 'var(--color-text-body)' }}>{post.date}</span>
                                    </div>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        style={{
                                            textDecoration: 'none',
                                            fontSize: '0.84rem',
                                            fontWeight: 700,
                                            color: 'var(--color-accent-red)',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px'
                                        }}
                                    >
                                        Read Article <span>→</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

            </div>

            {/* Reader Modal Overlay */}
            {activePost && (
                <div
                    onClick={() => setActivePost(null)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(11, 31, 69, 0.7)',
                        backdropFilter: 'blur(5px)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}
                >
                    {/* Modal Container */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: 'var(--radius-lg)',
                            width: '100%',
                            maxWidth: '780px',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            boxShadow: 'var(--shadow-lg)',
                            position: 'relative',
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Modal Header Actions (Close Button) */}
                        <div style={{
                            position: 'sticky',
                            top: 0,
                            backgroundColor: '#FFFFFF',
                            borderBottom: '1px solid var(--color-border)',
                            padding: '16px 24px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            zIndex: 10
                        }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-body)', fontWeight: 600 }}>
                                MapWork Insights • {activePost.category}
                            </span>
                            <button
                                onClick={() => setActivePost(null)}
                                style={{
                                    backgroundColor: 'var(--color-bg-light)',
                                    border: '1px solid var(--color-border)',
                                    color: 'var(--color-primary-navy)',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    transition: 'background-color 0.2s'
                                }}
                                aria-label="Close article modal"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Scrollable Content Body */}
                        <div style={{ padding: '32px 40px 48px 40px' }}>

                            {/* Meta details */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--color-primary-navy)',
                                    color: '#FFFFFF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '0.9rem'
                                }}>
                                    {activePost.author.charAt(0)}
                                </div>
                                <div>
                                    <p style={{ margin: 0, fontSize: '0.88rem', fontWeight: 650, color: 'var(--color-primary-navy)' }}>
                                        {activePost.author}
                                    </p>
                                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-body)' }}>
                                        Published on {activePost.date} • {activePost.readTime}
                                    </p>
                                </div>
                            </div>

                            {/* Parsed Body */}
                            <div className="article-body">
                                {renderModalMarkdown(activePost.content)}
                            </div>

                            {/* Closing footer check */}
                            <div style={{
                                marginTop: '40px',
                                paddingTop: '24px',
                                borderTop: '1px solid var(--color-border)',
                                textAlign: 'center'
                            }}>
                                <button
                                    onClick={() => setActivePost(null)}
                                    className="btn btn-secondary"
                                    style={{ padding: '10px 24px', fontSize: '0.9rem' }}
                                >
                                    Close Article
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            )}

        </section>
    );
}
