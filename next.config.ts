import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://*.leadconnectorhq.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://*.leadconnectorhq.com https://*.filesafe.space; font-src 'self' data: https://*.leadconnectorhq.com https://*.filesafe.space; connect-src 'self' https://*.leadconnectorhq.com wss://*.leadconnectorhq.com; frame-src https://*.leadconnectorhq.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'" },
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
