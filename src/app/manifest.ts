import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SunTech Recycle",
    short_name: "SunTech",
    description:
      "R2v3 certified electronics recycling, IT asset disposition and secure data destruction for businesses across Greater Montréal.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f6b3a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
