import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: "Viraj Art Photos | Professional Photography",
    template: "%s | Viraj Art Photos"
  },
  description: "Professional photography services specializing in portraits, events, and commercial photography. Capturing moments that last forever.",
  keywords: ["photography", "professional photographer", "portrait photography", "event photography", "commercial photography"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Viraj Art Photos",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Viraj Art Photos"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viraj Art Photos",
    description: "Professional photography services",
    images: ["/og-image.jpg"],
  }
};
