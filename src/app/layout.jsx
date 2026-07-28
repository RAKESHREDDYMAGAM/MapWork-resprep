import { Inter, Outfit } from 'next/font/google';
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
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <body>
                {children}
            </body>
        </html>
    );
}
