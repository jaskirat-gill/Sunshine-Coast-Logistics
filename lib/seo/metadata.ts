import type { Metadata } from 'next'

// Base metadata that will be inherited by all pages
export const baseMetadata: Metadata = {
  metadataBase: new URL('https://sunshinecoastlogistics.com'),
  title: {
    template: '%s | Sunshine Coast Logistics',
    default: 'Sunshine Coast Logistics | North America\'s Expedite Experts'
  },
  description: 'Reliable, fast, and secure logistics solutions across North America. Asset-based carrier specializing in cross-border freight, expedite services, and time-critical shipments since 2015.',
  keywords: [
    'logistics Canada',
    'freight services',
    'expedite shipping',
    'cross-border freight',
    'asset based carrier',
    'transportation services',
    'dry van shipping',
    'flatbed transport',
    'British Columbia logistics',
    'time critical freight',
    'North America shipping',
    'trucking company',
    'supply chain solutions',
    'FTL shipping',
    'LTL freight'
  ],
  authors: [{ name: 'Sunshine Coast Logistics' }],
  creator: 'Sunshine Coast Logistics',
  publisher: 'Sunshine Coast Logistics',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sunshinecoastlogistics.com',
    siteName: 'Sunshine Coast Logistics',
    title: 'Sunshine Coast Logistics | North America\'s Expedite Experts',
    description: 'Reliable, fast, and secure logistics solutions across North America. Asset-based carrier specializing in cross-border freight and expedite services.',
    images: [
      {
        url: '/api/og-image',
        width: 1200,
        height: 630,
        alt: 'Sunshine Coast Logistics - Modern Fleet',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunshine Coast Logistics | North America\'s Expedite Experts',
    description: 'Reliable, fast, and secure logistics solutions across North America.',
    images: ['/api/og-image'],
    creator: '@sunshinecoastlogistics',
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual verification code
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://sunshinecoastlogistics.com',
  },
  category: 'Transportation & Logistics',
}

// Page-specific metadata generators
export const pageMetadata = {
  home: (): Metadata => ({
    title: 'North America\'s Expedite Experts',
    description: 'Sunshine Coast Logistics delivers reliable cross-border freight solutions with a modern fleet across Canada and the U.S. 20+ years experience, 98.7% on-time delivery.',
    keywords: [
      'expedite freight',
      'cross border shipping',
      'asset based carrier',
      'time critical freight',
      'Canada US logistics',
      'modern fleet trucking'
    ],
    openGraph: {
      title: 'Sunshine Coast Logistics | North America\'s Expedite Experts',
      description: 'Delivering reliable cross-border freight solutions with a modern fleet across Canada and the U.S.',
      url: 'https://sunshinecoastlogistics.com',
    },
    alternates: {
      canonical: 'https://sunshinecoastlogistics.com',
    },
  }),

  about: (): Metadata => ({
    title: 'About Us - Family-Owned Logistics Excellence Since 2015',
    description: 'Learn about Sunshine Coast Logistics - a family-owned company with 50+ trucks and 100+ trailers, delivering across North America with 98.7% on-time delivery rate.',
    keywords: [
      'about sunshine coast logistics',
      'family owned trucking',
      'logistics company history',
      'British Columbia carrier',
      'trucking fleet size',
      'company values'
    ],
    openGraph: {
      title: 'About Sunshine Coast Logistics - Family-Owned Excellence',
      description: 'Family-owned logistics company with 50+ trucks delivering across North America since 2015.',
      url: 'https://sunshinecoastlogistics.com/about',
    },
    alternates: {
      canonical: 'https://sunshinecoastlogistics.com/about',
    },
  }),

  services: (): Metadata => ({
    title: 'Logistics Services - FTL, Expedite & Cross-Border Freight',
    description: 'Comprehensive logistics services including FTL, expedite shipping, cross-border freight, and specialized transport across Canada and the United States.',
    keywords: [
      'FTL services',
      'full truck load',
      'expedite services',
      'cross border freight',
      'time critical shipping',
      'dry van transport',
      'flatbed services',
      'logistics solutions'
    ],
    openGraph: {
      title: 'Logistics Services | Sunshine Coast Logistics',
      description: 'FTL, expedite, and cross-border freight services across North America.',
      url: 'https://sunshinecoastlogistics.com/services',
    },
    alternates: {
      canonical: 'https://sunshinecoastlogistics.com/services',
    },
  }),

  equipment: (): Metadata => ({
    title: 'Modern Fleet & Equipment - Dry Vans, Flatbeds & Reefers',
    description: 'State-of-the-art logistics fleet featuring dry vans, flatbeds, and refrigerated trailers. 50+ modern trucks with advanced tracking technology.',
    keywords: [
      'logistics fleet',
      'dry van trailers',
      'flatbed trucks',
      'refrigerated transport',
      'modern trucking equipment',
      'fleet technology',
      'truck specifications'
    ],
    openGraph: {
      title: 'Modern Fleet & Equipment | Sunshine Coast Logistics',
      description: 'State-of-the-art fleet featuring dry vans, flatbeds, and reefers with advanced tracking.',
      url: 'https://sunshinecoastlogistics.com/equipment',
    },
    alternates: {
      canonical: 'https://sunshinecoastlogistics.com/equipment',
    },
  }),

  join: (): Metadata => ({
    title: 'Join Our Team - Truck Driver Jobs & Logistics Careers',
    description: 'Join Sunshine Coast Logistics team! Competitive pay, modern equipment, benefits, and work-life balance. Long-haul and local driver positions available.',
    keywords: [
      'truck driver jobs',
      'logistics careers',
      'trucking employment',
      'driver positions',
      'transportation jobs',
      'British Columbia trucking jobs',
      'competitive trucking pay'
    ],
    openGraph: {
      title: 'Join Our Team | Sunshine Coast Logistics Careers',
      description: 'Join our team! Competitive pay, modern equipment, and great benefits for truck drivers.',
      url: 'https://sunshinecoastlogistics.com/join',
    },
    alternates: {
      canonical: 'https://sunshinecoastlogistics.com/join',
    },
  }),

  contact: (): Metadata => ({
    title: 'Contact Us - Get Your Logistics Quote Today',
    description: 'Contact Sunshine Coast Logistics for personalized freight solutions. Get quotes, schedule shipments, or speak with our logistics experts.',
    keywords: [
      'logistics quote',
      'freight quote',
      'contact logistics company',
      'shipping consultation',
      'freight services contact',
      'logistics phone number'
    ],
    openGraph: {
      title: 'Contact Us | Sunshine Coast Logistics',
      description: 'Get your personalized freight quote and logistics consultation today.',
      url: 'https://sunshinecoastlogistics.com/contact',
    },
    alternates: {
      canonical: 'https://sunshinecoastlogistics.com/contact',
    },
  }),
}
