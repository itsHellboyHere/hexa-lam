export default function sitemap() {
  const baseUrl = "https://www.hexalam.com";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/freq`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/laminates`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/laminates/acrylic-laminates`,
      lastModified: new Date(),
    },
  ];
}