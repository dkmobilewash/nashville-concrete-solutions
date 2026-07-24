// Canonical apex domain — keep in sync with `baseUrl` in src/data/site.ts.
// next.config.js runs outside the TypeScript build, so it can't import that
// file directly; both must be updated together if the domain ever changes.
const CANONICAL_HOST = "nashvilleconcretesolutions.com";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // www -> apex canonicalization: prevents Google indexing both hosts
      // as separate near-duplicate origins and splitting ranking signal.
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${CANONICAL_HOST}` }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
      // Reserved for future renamed/removed routes so old URLs 301 instead
      // of 404ing and losing link equity. Add entries here as slugs change,
      // e.g. { source: "/old-service-slug", destination: "/services/new-service-slug", permanent: true }.
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
