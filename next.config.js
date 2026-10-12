/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  transpilePackages: ['swiper'],
  staticPageGenerationTimeout: 180,

  async redirects() {
    return [
      // ── One canonical origin: https://www.daikimedia.com ──────────────────
      // Vercel's domain settings already send http:// and the bare apex to
      // www, but the project's own daikimedia.vercel.app alias served the
      // whole site as a second, indexable copy (checked 8 Oct 2026: 200, no
      // noindex header). A host-matched redirect here closes that and any
      // other alias in one hop, and keeps the apex covered even if the
      // domain settings are ever changed. Preview deployments
      // (*-git-*.vercel.app) are deliberately not matched, so staging links
      // keep working.
      {
        source: "/:path*",
        has: [{ type: "host", value: "daikimedia.vercel.app" }],
        destination: "https://www.daikimedia.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "daikimedia.com" }],
        destination: "https://www.daikimedia.com/:path*",
        permanent: true,
      },
      // /en-us was a placeholder page ("description of the page") with no
      // hreflang alternate and no internal link pointing at it (checked
      // 12 Oct 2026). The team chose to send it to the homepage. Only the
      // exact path matches; /en-us/casino-seo-agency and
      // /en-us/igaming-seo-agency are real pages and stay.
      {
        source: "/en-us",
        destination: "/",
        permanent: true,
      },
      {
        source: "/learn/:slug",
        destination: "/:slug",
        permanent: true,
      },
      {
        source: "/authors",
        destination: "/author/lukesh-pillai",
        permanent: true,
      },
      {
        source: "/lukesh@daikimedia.com",
        destination: "/author/lukesh-pillai",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.daikimedia.com',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 480],
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  experimental: {
    optimisticClientCache: true,
    optimizePackageImports: [
      "@fortawesome/react-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons",
      "lucide-react",
      "react-icons",
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);