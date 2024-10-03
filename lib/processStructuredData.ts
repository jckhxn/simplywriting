interface Data {
  structuredData?: {
    title?: string;
  };
}

export default function processStructuredData(data?: Data) {
  // Destructure structured data and return if for the component.

  return {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "@id": "gybwp",
    name: "Growing Your Business With People Podcast",
    url: "https://gybwp.com",
    thumbnailUrl: "https://gybwp/images/logo.webp",
    image: "https://gybwp.com/images/logo.webp",
    headline:
      "Listen to 'Growing Your Business with People!' – the podcast for CEOs and business leaders focusing on growth through investing in their teams.",
  };
}
