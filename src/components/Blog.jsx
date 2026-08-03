"use client";

import React, { useState } from 'react';
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


export default function Blog() {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentCategory, setCurrentCategory] = useState('All');

    // Categories list
    const categories = ['All', 'Field Operations', 'Mapping Intelligence', 'Sales Strategy', 'Product Updates'];

    const filteredPosts = BLOG_POSTS.filter(post => {
        const matchesCategory = currentCategory === 'All' || post.category === currentCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });


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

        </section>
    );
}
