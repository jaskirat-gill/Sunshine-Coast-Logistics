// Structured data (JSON-LD) generators for SEO

export interface OrganizationSchema {
  '@context': string
  '@type': 'Organization'
  name: string
  url: string
  logo: string
  description: string
  address: {
    '@type': 'PostalAddress'
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  contactPoint: {
    '@type': 'ContactPoint'
    telephone: string
    contactType: 'customer service'
    email: string
  }
  sameAs: string[]
  foundingDate: string
  numberOfEmployees: string
  industry: string
  areaServed: string[]
}

export interface ServiceSchema {
  '@context': string
  '@type': 'Service'
  name: string
  description: string
  provider: {
    '@type': 'Organization'
    name: string
    url: string
  }
  areaServed: string[]
  serviceType: string
  category: string
}

export interface WebsiteSchema {
  '@context': string
  '@type': 'WebSite'
  name: string
  url: string
  description: string
  publisher: {
    '@type': 'Organization'
    name: string
  }
  potentialAction: {
    '@type': 'SearchAction'
    target: string
    'query-input': string
  }
}

export const organizationSchema: OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sunshine Coast Logistics',
  url: 'https://sunshinecoastlogistics.com',
  logo: 'https://sunshinecoastlogistics.com/api/og-image',
  description: 'Asset-based logistics carrier providing cross-border freight solutions across North America since 2015. Specializing in expedite services, FTL, and time-critical shipments.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7178 Vantage Way', // Update with actual address
    addressLocality: 'Delta',
    addressRegion: 'BC',
    postalCode: 'V4G 1K7',
    addressCountry: 'CA'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-604-943-8766',
    contactType: 'customer service',
    email: 'info@sunshinecoastlogistics.com'
  },
  sameAs: [
    'https://www.facebook.com/sunshinecoastlogistics/',
    'https://www.linkedin.com/company/sunshine-coast-logistics'
  ],
  foundingDate: '2015',
  numberOfEmployees: '50-100',
  industry: 'Transportation and Logistics',
  areaServed: ['Canada', 'United States']
}

export const websiteSchema: WebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sunshine Coast Logistics',
  url: 'https://sunshinecoastlogistics.com',
  description: 'Reliable cross-border freight and logistics solutions across North America',
  publisher: {
    '@type': 'Organization',
    name: 'Sunshine Coast Logistics'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://sunshinecoastlogistics.com/contact?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
}

export const logisticsServiceSchema: ServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cross-Border Freight Services',
  description: 'Comprehensive logistics services including FTL, expedite shipping, and time-critical freight across Canada and the United States.',
  provider: {
    '@type': 'Organization',
    name: 'Sunshine Coast Logistics',
    url: 'https://sunshinecoastlogistics.com'
  },
  areaServed: ['Canada', 'United States'],
  serviceType: 'Freight Transportation',
  category: 'Logistics'
}

export const expediteServiceSchema: ServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Expedite Shipping Services',
  description: 'Time-critical and expedite freight services with guaranteed delivery times across North America.',
  provider: {
    '@type': 'Organization',
    name: 'Sunshine Coast Logistics',
    url: 'https://sunshinecoastlogistics.com'
  },
  areaServed: ['Canada', 'United States'],
  serviceType: 'Expedite Freight',
  category: 'Time-Critical Logistics'
}

// FAQ Schema for About/Services pages
export interface FAQSchema {
  '@context': string
  '@type': 'FAQPage'
  mainEntity: Array<{
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }>
}

export const logisticsFAQSchema: FAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of freight services do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer FTL (Full Truck Load), expedite services, cross-border freight, dry van transport, flatbed services, and time-critical shipments across Canada and the United States.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide cross-border shipping between Canada and the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we specialize in cross-border freight between Canada and the United States, with full customs documentation management and compliance expertise.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is your on-time delivery rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We maintain a 98.7% on-time delivery rate across all our services, backed by our modern fleet and advanced tracking technology.'
      }
    },
    {
      '@type': 'Question',
      name: 'How large is your fleet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our modern fleet consists of over 50 trucks and more than 100 trailers, including dry vans, flatbeds, and refrigerated units.'
      }
    }
  ]
}

// Job Posting Schema for careers page
export interface JobPostingSchema {
  '@context': string
  '@type': 'JobPosting'
  title: string
  description: string
  hiringOrganization: {
    '@type': 'Organization'
    name: string
    url: string
  }
  jobLocation: {
    '@type': 'Place'
    address: {
      '@type': 'PostalAddress'
      addressLocality: string
      addressRegion: string
      addressCountry: string
    }
  }
  employmentType: string
  industry: string
  baseSalary: {
    '@type': 'MonetaryAmount'
    currency: string
    value: {
      '@type': 'QuantitativeValue'
      minValue: number
      maxValue: number
      unitText: string
    }
  }
}

export const truckDriverJobSchema: JobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Long-Haul Truck Driver',
  description: 'Join our team of professional drivers delivering freight across North America. Competitive pay, modern equipment, and excellent benefits.',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Sunshine Coast Logistics',
    url: 'https://sunshinecoastlogistics.com'
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delta',
      addressRegion: 'British Columbia',
      addressCountry: 'Canada'
    }
  },
  employmentType: 'FULL_TIME',
  industry: 'Transportation',
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'CAD',
    value: {
      '@type': 'QuantitativeValue',
      minValue: 65000,
      maxValue: 85000,
      unitText: 'YEAR'
    }
  }
}
