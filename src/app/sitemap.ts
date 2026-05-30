import type { MetadataRoute } from "next";
import { clinics } from "@/lib/clinics";

const BASE_URL = "https://www.cliniqturkey.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const clinicRoutes = clinics.map((c) => ({
    url: `${BASE_URL}/clinics/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const treatmentSlugs = [
    "hair-transplant",
    "dental",
    "bariatric",
    "cosmetic",
    "eye-surgery",
    "ivf",
  ];

  const treatmentRoutes = treatmentSlugs.map((slug) => ({
    url: `${BASE_URL}/treatments/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const destinationRoutes = ["istanbul", "ankara", "izmir", "antalya"].map(
    (city) => ({
      url: `${BASE_URL}/destinations/${city}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const blogSlugs = [
    "hair-transplant-turkey-complete-guide",
    "dental-veneers-turkey-vs-uk",
    "medical-tourism-istanbul-guide",
    "gastric-sleeve-turkey-guide",
    "is-medical-tourism-turkey-safe",
    "fue-vs-dhi-hair-transplant",
    "dental-veneers-turkey-what-to-expect",
    "lasik-eye-surgery-turkey-vs-uk",
    "bariatric-surgery-questions-answered",
    "medical-travel-turkey-packing-guide",
    "hair-transplant-recovery-week-by-week",
    "rhinoplasty-turkey-guide",
    "dental-implants-turkey-guide",
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/clinics`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/treatments`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/get-a-quote`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/cost-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/how-it-works`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/for-clinics`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cookie-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const compareSlugs = [
    "hair-transplant-turkey-vs-uk",
    "dental-veneers-turkey-vs-uk",
    "bariatric-surgery-turkey-vs-uk",
    "lasik-turkey-vs-uk",
    "rhinoplasty-turkey-vs-uk",
    "ivf-turkey-vs-uk",
  ];

  const compareRoutes = [
    { url: `${BASE_URL}/compare`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    ...compareSlugs.map((slug) => ({
      url: `${BASE_URL}/compare/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  const cities = ["istanbul", "ankara", "izmir", "antalya"];
  const cityTreatmentRoutes = treatmentSlugs.flatMap((slug) =>
    cities.map((city) => ({
      url: `${BASE_URL}/treatments/${slug}/${city}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  return [
    ...staticRoutes,
    ...clinicRoutes,
    ...treatmentRoutes,
    ...cityTreatmentRoutes,
    ...compareRoutes,
    ...destinationRoutes,
    ...blogRoutes,
  ];
}
