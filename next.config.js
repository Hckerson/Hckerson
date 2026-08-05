/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // `unoptimized: true` used to disable the whole pipeline: no resizing,
        // no format negotiation, originals served as-is at every viewport.
        formats: ["image/avif", "image/webp"],
    },
};

module.exports = nextConfig;
