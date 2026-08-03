"use client";

import React, { useState } from 'react';
import { trackEvent } from '../lib/analytics';

export default function Contact() {
    // Form input states
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        orgSize: '1-10',
        message: '',
        website_url_field: '' // Honeypot spam bot field
    });

    // Client side validation errors
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Accordion active FAQ state
    const [activeFaq, setActiveFaq] = useState(null);

    // Accordion questions definition
    const faqs = [
        {
            q: "How does MapWork coordinate tracking integrate into my CRM?",
            a: "MapWork exposes RESTful Web APIs and Webhook triggers. You can register URLs that receive JSON coordinate streams whenever a dispatch route starts, finishes, or crosses a territory border."
        },
        {
            q: "Does MapWork support private operations routing?",
            a: "Yes. Unlike typical maps, our grid engine supports custom coordinates. You can overlay private warehouse terminals, oil rig access trails, or dynamic logistics yards that do not exist on commercial roads."
        },
        {
            q: "Are my asset movement logs and coordinate boundaries private?",
            a: "Absolutely. We enforce an encrypted, isolated database policy. Your maps, grids, coordinates, routing metrics, and tracking histories are accessible only to authorized accounts in your organization."
        },
        {
            q: "Is there a limit to the size of routing territories?",
            a: "No. MapWork supports custom spatial bounding circles from a few meters to multi-national operations zones. Scaled coordinates are projected dynamically based on operational density."
        }
    ];

    // RegEx email validator
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Field validation helper
    const checkField = (name, value) => {
        let errorMsg = '';
        if (name === 'name') {
            if (!value.trim()) {
                errorMsg = 'Full name is required.';
            } else if (value.trim().length < 3) {
                errorMsg = 'Name must be at least 3 characters.';
            }
        }
        if (name === 'email') {
            if (!value.trim()) {
                errorMsg = 'Business email is required.';
            } else if (!validateEmail(value)) {
                errorMsg = 'Please enter a valid business email address.';
            }
        }
        if (name === 'message') {
            if (!value.trim()) {
                errorMsg = 'Operational requirements message is required.';
            } else if (value.trim().length < 20) {
                errorMsg = 'Please describe your request in more detail (min 20 characters).';
            }
        }
        return errorMsg;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        const errorMsg = checkField(name, value);
        setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check honeypot field
        if (formData.website_url_field) {
            console.warn("Spam honeypot triggered. Action blocked.");
            return;
        }

        // Trigger validation on all fields
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (key !== 'website_url_field') {
                const errorMsg = checkField(key, formData[key]);
                if (errorMsg) {
                    newErrors[key] = errorMsg;
                }
            }
        });

        setErrors(newErrors);
        setTouched({ name: true, email: true, message: true });

        if (Object.keys(newErrors).length > 0) {
            trackEvent('form_submission', {
                formId: 'contact_audit_request',
                success: false,
                validationErrors: Object.keys(newErrors).join(','),
            });
            return;
        }

        // Submit form (mock success output)
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            trackEvent('form_submission', {
                formId: 'contact_audit_request',
                success: true,
                orgSize: formData.orgSize,
            });
            setFormData({
                name: '',
                email: '',
                orgSize: '1-10',
                message: '',
                website_url_field: ''
            });
            setTouched({});
        }, 1200);
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <section id="contact" style={{ backgroundColor: 'var(--color-bg-light)', padding: '100px 0', borderTop: '1px solid var(--color-border)' }}>
            <div className="container" style={{ maxWidth: '1100px' }}>

                {/* Header Summary */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="eyebrow">Connect with Us</span>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary-navy)', fontWeight: 800, marginBottom: '16px' }}>
                        Schedule an Operations Audit
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-body)' }}>
                        Speak directly with our spatial engineers to overlay boundary logic, deploy grids, or build custom dispatch feeds.
                    </p>
                </div>

                {/* Dynamic two-column forms block */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '40px',
                    alignItems: 'start',
                    marginBottom: '80px'
                }}>

                    {/* Left panel: Quick Contact & Whatsapp */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

                        {/* WhatsApp Quick Connect Banner styled exactly like user request */}
                        <a
                            href="https://wa.me/918970007467?text=Hello%20MapWork,%20we%20need%20assistance%20integrating%20custom%20operational%20grids."
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                                trackEvent('cta_click', {
                                    ctaId: 'whatsapp_contact',
                                    label: 'WhatsApp Contact Form',
                                    destinationUrl: 'https://wa.me/918970007467'
                                });
                            }}

                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                backgroundColor: 'var(--color-primary-navy)',
                                borderRadius: 'var(--radius-lg)',
                                padding: '24px 30px',
                                textDecoration: 'none',
                                boxShadow: 'var(--shadow-md)',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                border: '1px solid rgba(255, 255, 255, 0.08)'
                            }}
                            className="whatsapp-card-hover"
                        >
                            {/* Red Icon Wrapper */}
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '18px', // rounded like a square
                                backgroundColor: 'var(--color-accent-red)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>

                            {/* Text Columns */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                <span style={{
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    color: 'rgba(255, 255, 255, 0.55)',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase'
                                }}>
                                    WHATSAPP
                                </span>
                                <span style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 850,
                                    color: '#FFFFFF',
                                    letterSpacing: '0.01em'
                                }}>
                                    +91 89700 07467
                                </span>
                            </div>
                        </a>

                        {/* General email channels */}
                        <div className="card" style={{ padding: '30px' }}>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', marginBottom: '16px', fontWeight: 750 }}>
                                Direct Communication
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent-red)', textTransform: 'uppercase' }}>Integrated Systems Support</span>
                                    <a href="mailto:support@mapwork.com" style={{ display: 'block', fontSize: '1rem', color: 'var(--color-primary-navy)', fontWeight: 650, marginTop: '2px', textDecoration: 'none' }}>
                                        support@mapwork.com
                                    </a>
                                </div>
                                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent-red)', textTransform: 'uppercase' }}>Commercial & Enterprise Inquiries</span>
                                    <a href="mailto:sales@mapwork.com" style={{ display: 'block', fontSize: '1rem', color: 'var(--color-primary-navy)', fontWeight: 650, marginTop: '2px', textDecoration: 'none' }}>
                                        sales@mapwork.com
                                    </a>
                                </div>
                                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent-red)', textTransform: 'uppercase' }}>Phone Support</span>
                                    <a href="tel:8970007467" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', color: 'var(--color-primary-navy)', fontWeight: 650, marginTop: '4px', textDecoration: 'none' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                        8970007467
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right panel: dynamic lead intake form */}
                    <div style={{
                        backgroundColor: '#FFFFFF',
                        padding: '40px',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-navy)', marginBottom: '22px', fontWeight: 750 }}>
                            Submit Operations Request
                        </h3>

                        {isSubmitted ? (
                            <div style={{
                                backgroundColor: 'rgba(37, 211, 102, 0.08)',
                                border: '1px solid #25D366',
                                borderRadius: 'var(--radius-md)',
                                padding: '30px',
                                textAlign: 'center'
                            }}>
                                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '12px' }}>✅</span>
                                <h4 style={{ color: 'var(--color-primary-navy)', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px' }}>
                                    Inquiry Submitted Successfully
                                </h4>
                                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.5, margin: 0 }}>
                                    Thank you for reaching out. A systems engineer will inspect your target requirements and email a blueprint draft in 12 business hours.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    style={{
                                        marginTop: '20px',
                                        padding: '8px 16px',
                                        backgroundColor: 'transparent',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: 'var(--radius-sm)',
                                        fontSize: '0.85rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Send another inquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                                {/* Honeypot Spam Prevention field - Hidden */}
                                <input
                                    type="text"
                                    name="website_url_field"
                                    value={formData.website_url_field}
                                    onChange={handleInputChange}
                                    style={{ display: 'none' }}
                                    tabIndex="-1"
                                    autoComplete="off"
                                />

                                {/* Name Field */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label htmlFor="name-input" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                                        Your Name *
                                    </label>
                                    <input
                                        id="name-input"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter full name"
                                        style={{
                                            padding: '12px 14px',
                                            borderRadius: 'var(--radius-sm)',
                                            border: touched.name && errors.name ? '2px solid var(--color-accent-red)' : '1.5px solid var(--color-border)',
                                            outline: 'none',
                                            fontSize: '0.94rem'
                                        }}
                                    />
                                    {touched.name && errors.name && (
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-accent-red)', fontWeight: 600 }}>{errors.name}</span>
                                    )}
                                </div>

                                {/* Business Email Field */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label htmlFor="email-input" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                                        Business Email *
                                    </label>
                                    <input
                                        id="email-input"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        placeholder="name@organization.com"
                                        style={{
                                            padding: '12px 14px',
                                            borderRadius: 'var(--radius-sm)',
                                            border: touched.email && errors.email ? '2px solid var(--color-accent-red)' : '1.5px solid var(--color-border)',
                                            outline: 'none',
                                            fontSize: '0.94rem'
                                        }}
                                    />
                                    {touched.email && errors.email && (
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-accent-red)', fontWeight: 600 }}>{errors.email}</span>
                                    )}
                                </div>

                                {/* Organisation Size */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label htmlFor="orgSize-select" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                                        Organization Size
                                    </label>
                                    <select
                                        id="orgSize-select"
                                        name="orgSize"
                                        value={formData.orgSize}
                                        onChange={handleInputChange}
                                        style={{
                                            padding: '12px 14px',
                                            borderRadius: 'var(--radius-sm)',
                                            border: '1.5px solid var(--color-border)',
                                            outline: 'none',
                                            fontSize: '0.94rem',
                                            backgroundColor: '#FFFFFF'
                                        }}
                                    >
                                        <option value="1-10">1 - 10 employees</option>
                                        <option value="11-50">11 - 50 employees</option>
                                        <option value="51-200">51 - 200 employees</option>
                                        <option value="200+">200+ employees</option>
                                    </select>
                                </div>

                                {/* Operations Requirements box */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label htmlFor="message-input" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                                        Describe Your Spatial Routing Grid Requirements *
                                    </label>
                                    <textarea
                                        id="message-input"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        placeholder="We manage coordinates and boundaries for..."
                                        style={{
                                            padding: '12px 14px',
                                            borderRadius: 'var(--radius-sm)',
                                            border: touched.message && errors.message ? '2px solid var(--color-accent-red)' : '1.5px solid var(--color-border)',
                                            outline: 'none',
                                            fontSize: '0.94rem',
                                            resize: 'vertical',
                                            fontFamily: 'inherit'
                                        }}
                                    />
                                    {touched.message && errors.message && (
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-accent-red)', fontWeight: 600 }}>{errors.message}</span>
                                    )}
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary"
                                    style={{
                                        width: '100%',
                                        padding: '14px',
                                        fontSize: '0.95rem',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        opacity: isSubmitting ? 0.7 : 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    {isSubmitting ? 'Submitting Blueprints...' : 'Submit Form'}
                                </button>

                            </form>
                        )}
                    </div>

                </div>

                {/* FAQs Accordion segment */}
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span className="eyebrow">Clear Operations Queries</span>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary-navy)', fontWeight: 800 }}>
                            Frequently Asked Questions
                        </h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {faqs.map((faq, index) => {
                            const isOpen = activeFaq === index;
                            return (
                                <div key={index} style={{
                                    backgroundColor: '#FFFFFF',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: 'var(--radius-md)',
                                    overflow: 'hidden',
                                    transition: 'all 0.25s ease'
                                }}>

                                    {/* Header Button */}
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        style={{
                                            width: '100%',
                                            padding: '20px 24px',
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            textAlign: 'left',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            color: 'var(--color-primary-navy)',
                                            fontWeight: 700,
                                            fontSize: '1rem',
                                            outline: 'none'
                                        }}
                                    >
                                        <span>{faq.q}</span>
                                        <span style={{
                                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.2s',
                                            color: 'var(--color-accent-red)',
                                            fontSize: '1.2rem',
                                            fontWeight: 'bold',
                                            lineHeight: 1
                                        }}>
                                            ▼
                                        </span>
                                    </button>

                                    {/* Accordion panel content */}
                                    <div style={{
                                        maxHeight: isOpen ? '250px' : '0px',
                                        transition: 'all 0.3s ease-in-out',
                                        visibility: isOpen ? 'visible' : 'hidden',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            padding: '0 24px 24px 24px',
                                            color: 'var(--color-text-body)',
                                            fontSize: '0.94rem',
                                            lineHeight: 1.6,
                                            borderTop: '1px solid var(--color-border-light)'
                                        }}>
                                            {faq.a}
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
