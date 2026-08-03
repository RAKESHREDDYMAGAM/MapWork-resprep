import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { withSentryConfig } from '@sentry/nextjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default withSentryConfig(nextConfig, {
    silent: true,
    widenClientBounds: true,
    hideSourceMaps: true,
    disableLogger: true,
});


