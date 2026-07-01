import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Old English-slug French URLs → new French slugs (preserve indexed equity).
    return [
      { source: "/fr/about", destination: "/fr/a-propos", permanent: true },
      { source: "/fr/locations", destination: "/fr/emplacements", permanent: true },
      { source: "/fr/locations/:city", destination: "/fr/emplacements/:city", permanent: true },
      { source: "/fr/collection", destination: "/fr/collecte", permanent: true },
      { source: "/fr/collection/:path*", destination: "/fr/collecte/:path*", permanent: true },
      { source: "/fr/r2v3-certification", destination: "/fr/certification-r2v3", permanent: true },
      { source: "/fr/community-impact", destination: "/fr/impact-communautaire", permanent: true },
    ];
  },
};

export default nextConfig;
