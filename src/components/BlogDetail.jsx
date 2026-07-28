"use client";

import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from './Blog';

// Helper to render markdown text inside component
function renderArticleMarkdown(content) {
    if (!content) return null;
    const lines = content.split('\n');
    let currentList = [];
    const renderedElements = [];

    const flushList = (key) => {
        if (currentList.length > 0) {
            renderedElements.push(
                <ul key={`list-${key}`} style={{ paddingLeft: '24px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                <li key={`li-${index}`} style={{ fontSize: '0.98rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                    {parseBold(trimmed.substring(2))}
                </li>
            );
        } else if (trimmed.startsWith('### ')) {
            flushList(index);
            renderedElements.push(
                <h3 key={`h3-${index}`} style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', marginTop: '28px', marginBottom: '12px', fontWeight: 700 }}>
                    {trimmed.substring(4)}
                </h3>
            );
        } else if (trimmed.startsWith('## ')) {
            flushList(index);
            renderedElements.push(
                <h2 key={`h2-${index}`} style={{ fontSize: '1.5rem', color: 'var(--color-primary-navy)', marginTop: '36px', marginBottom: '16px', fontWeight: 750, borderBottom: '1px solid var(--color-border)', paddingBottom: '6px' }}>
                    {trimmed.substring(3)}
                </h2>
            );
        } else if (trimmed.startsWith('# ')) {
            flushList(index);
            renderedElements.push(
                <h1 key={`h1-${index}`} style={{ fontSize: '1.9rem', color: 'var(--color-primary-navy)', marginTop: '20px', marginBottom: '20px', fontWeight: 800 }}>
                    {trimmed.substring(2)}
                </h1>
            );
        } else if (trimmed.startsWith('> ')) {
            flushList(index);
            renderedElements.push(
                <blockquote key={`bq-${index}`} style={{ borderLeft: '4px solid var(--color-accent-red)', paddingLeft: '16px', margin: '20px  0', fontStyle: 'italic', color: 'var(--color-primary-navy)' }}>
                    {trimmed.substring(2)}
                </blockquote>
            );
        } else {
            flushList(index);
            renderedElements.push(
                <p key={`p-${index}`} style={{ fontSize: '0.98rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '16px' }}>
                    {parseBold(trimmed)}
                </p>
            );
        }
    });

    flushList(lines.length);
    return renderedElements;
}

export default function BlogDetail({ slug }) {
    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
                <h2 style={{ color: 'var(--color-primary-navy)' }}>Article Not Found</h2>
                <p style={{ color: 'var(--color-text-body)' }}>The requested resources article could not be resolved.</p>
                <Link href="/blog" className="btn btn-secondary" style={{ marginTop: '20px', display: 'inline-block' }}>
                    Back to Blog
                </Link>
            </div>
        );
    }

    // Get recommended articles (exclude current one)
    const recommended = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2);

    return (
        <article style={{ backgroundColor: 'var(--color-bg-white)', padding: '60px 0 100px 0' }}>
            <div className="container" style={{ maxWidth: '850px' }}>

                {/* Navigation Breadcrumbs */}
                <div style={{ marginBottom: '32px' }}>
                    <Link href="/blog" style={{ color: 'var(--color-accent-red)', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
                        ← Back to Blog & Insights
                    </Link>
                </div>

                {/* Heading */}
                <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: 'var(--color-accent-red)',
                    backgroundColor: 'rgba(200, 30, 58, 0.08)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    marginBottom: '16px'
                }}>
                    {post.category}
                </span>

                <h1 style={{
                    fontSize: '2.5rem',
                    color: 'var(--color-primary-navy)',
                    fontWeight: 800,
                    lineHeight: 1.2,
                    marginBottom: '20px',
                    fontFamily: 'var(--font-heading)'
                }}>
                    {post.title}
                </h1>

                {/* Meta Author Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', borderBottom: '1px solid var(--color-border)', paddingBottom: '24px' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-primary-navy)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold'
                    }}>
                        {post.author.charAt(0)}
                    </div>
                    <div>
                        <p style={{ margin: 0, fontSize: '0.94rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                            {post.author}
                        </p>
                        <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--color-text-body)' }}>
                            {post.date} • {post.readTime}
                        </p>
                    </div>
                </div>

                {/* Markdown Content */}
                <div className="article-body">
                    {renderArticleMarkdown(post.content)}
                </div>

                {/* Related Posts section */}
                <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid var(--color-border)' }}>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-navy)', marginBottom: '24px', fontWeight: 750 }}>
                        Recommended Reading
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        {recommended.map(item => (
                            <div key={item.slug} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--color-accent-red)', textTransform: 'uppercase' }}>{item.category}</span>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-navy)', margin: '8px 0 12px 0', fontWeight: 700 }}>{item.title}</h4>
                                </div>
                                <Link href={`/blog/${item.slug}`} style={{ color: 'var(--color-accent-red)', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem' }}>
                                    Read Article →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </article>
    );
}
