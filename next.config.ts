import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://neurodesk.windsorexteriorpros.com https://widgets.leadconnectorhq.com https://appcdn.leadconnectorhq.com https://services.leadconnectorhq.com https://stcdn.leadconnectorhq.com https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://appcdn.leadconnectorhq.com https://stcdn.leadconnectorhq.com https://fonts.bunny.net",
  "img-src 'self' data: blob: https://widgets.leadconnectorhq.com https://storage.googleapis.com https://images.leadconnectorhq.com https://stcdn.leadconnectorhq.com https://assets.cdn.filesafe.space",
  "font-src 'self' data: https://fonts.gstatic.com https://fonts.bunny.net",
  "connect-src 'self' https://widgets.leadconnectorhq.com https://services.leadconnectorhq.com https://stcdn.leadconnectorhq.com https://backend.leadconnectorhq.com https://services.msgsndr.com https://msgsndr.com https://challenges.cloudflare.com https://storage.googleapis.com https://fonts.bunny.net wss://services.leadconnectorhq.com",
  "frame-src 'self' https://neurodesk.windsorexteriorpros.com https://challenges.cloudflare.com",
  "media-src 'self' https://widgets.leadconnectorhq.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "windsorexteriorpros.ca" }],
        destination: "https://www.windsorexteriorpros.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.windsorexteriorpros.ca" }],
        destination: "https://www.windsorexteriorpros.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
