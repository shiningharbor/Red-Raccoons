import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://red-raccoons.com";
  return ["", "/integrantes", "/musica", "/momentos", "/fechas", "/contrataciones"].map((route): MetadataRoute.Sitemap[number] => ({
    url: base + route,
    changeFrequency: route === "/momentos" || route === "/fechas" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
