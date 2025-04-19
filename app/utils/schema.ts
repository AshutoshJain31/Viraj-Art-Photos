export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Viraj Art Photos",
  description: "Professional photography services specializing in portraits, events, and commercial photography.",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  image: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    // Add your address details here
  },
  telephone: "", // Add phone number
  priceRange: "$$",
  openingHours: "Mo-Sa 09:00-18:00",
  sameAs: [
    // Add your social media links here
  ]
});

export const getWebPageSchema = (title: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description: description,
  url: process.env.NEXT_PUBLIC_SITE_URL,
  datePublished: new Date().toISOString(),
  dateModified: new Date().toISOString(),
});
