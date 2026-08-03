import { Inter, Outfit } from 'next/font/google';
import { Suspense } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
import ConsentBanner from '../components/ConsentBanner';
import AnalyticsTracker from '../components/AnalyticsTracker';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-body',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-heading',
    display: 'swap',
});

export const viewport = {
    width: 'device-width',
    initialScale: 1.0,
    maximumScale: 5.0,
};

export const metadata = {
    title: 'MapWork | Geo Intelligence Platform for Field Sales & Territory Management',
    description: 'Discover markets, optimize field ops, and execute with precision. MapWork is the geo-intelligence platform built for professional field operations, discovery, map intelligence, and route planning.',
    icons: {
        icon: '/favicon.svg',
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'MapWork | Geo Intelligence Platform',
        description: 'Discover markets, optimize field ops, and execute with precision. MapWork is the geo-intelligence platform built for professional field operations.',
        url: 'https://mapwork.com',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MapWork | Geo Intelligence Platform',
        description: 'Discover markets, optimize field ops, and execute with precision.',
    }
};

export default function RootLayout({ children }) {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PBQSHKLQ';

    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <GoogleTagManager gtmId={gtmId} />
            <body>
                {/* Meta Pixel Code */}
                <Script id="meta-pixel" strategy="afterInteractive">
                    {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '1041145098539413');
                        fbq('track', 'PageView');
                    `}
                </Script>
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=1041145098539413&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
                <Suspense fallback={null}>
                    <AnalyticsTracker />
                </Suspense>
                {children}
                <ConsentBanner />
            </body>
        </html>
    );
}


