import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/clinics/compare"],
    },
    sitemap: "https://www.treatwellturkey.com/sitemap.xml",
  };
}
