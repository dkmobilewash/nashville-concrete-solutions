/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: www <-> apex canonicalization is intentionally NOT handled here.
  // It previously lived in an app-level redirects() rule, but that
  // conflicted with the domain-level redirect configured in the Vercel
  // dashboard (Project -> Settings -> Domains) and produced an
  // ERR_TOO_MANY_REDIRECTS loop: Vercel redirected apex -> www at the edge,
  // then this app redirected www -> apex, forever. Vercel's domain redirect
  // already runs before any Next.js code executes, so it's the correct
  // (and only) place to canonicalize www/apex. In the dashboard, set one
  // domain as primary ("Redirect to" the other) and leave it at that.
  async redirects() {
    return [
      // Reserved for future renamed/removed routes so old URLs 301 instead
      // of 404ing and losing link equity. Add entries here as slugs change,
      // e.g. { source: "/old-service-slug", destination: "/new-service-slug", permanent: true }.
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
