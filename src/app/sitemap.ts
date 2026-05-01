import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const services = [
    "smile-makeover", "painless-root-canal", "dental-implants",
    "teeth-whitening", "porcelain-veneers", "invisible-aligners",
    "dental-crowns", "kids-dentistry", "braces", "teeth-cleaning",
    "laser-gum-treatment", "wisdom-tooth-extraction", "cavity-fillings",
    "tooth-bonding", "dentures", "sedation-dentistry", "full-mouth-rehabilitation",
  ];

  return [
    { url: "https://prasadsdental.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://prasadsdental.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://prasadsdental.com/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://prasadsdental.com/services", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...services.map((slug) => ({
      url: `https://prasadsdental.com/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
