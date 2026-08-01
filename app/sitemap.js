const baseUrl = "https://frontierrestorationllc.com";

export default function sitemap() {
  const routes = [
    "",
    "/water-damage",
    "/fire-damage",
    "/mold-remediation",
    "/sewer-backup",
    "/content-restoration",
    "/careers",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
