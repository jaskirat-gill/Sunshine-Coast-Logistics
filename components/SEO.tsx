'use client'

import Head from 'next/head'
import { organizationSchema, websiteSchema } from '@/lib/seo/structured-data'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
  ogImage?: string
  structuredData?: object[]
  children?: React.ReactNode
}

export function SEO({
  title,
  description,
  keywords = [],
  canonical,
  noindex = false,
  ogImage,
  structuredData = [],
  children
}: SEOProps) {
  const fullTitle = title ? `${title} | Sunshine Coast Logistics` : 'Sunshine Coast Logistics | North America\'s Expedite Experts'
  const metaDescription = description || 'Reliable cross-border freight and logistics solutions across North America'
  const ogImageUrl = ogImage || '/api/og-image'

  // Combine default structured data with page-specific data
  const allStructuredData = [
    organizationSchema,
    websiteSchema,
    ...structuredData
  ]

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sunshine Coast Logistics" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      
      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data)
          }}
        />
      ))}
      
      {/* Additional custom head elements */}
      {children}
    </Head>
  )
}
