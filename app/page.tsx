import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Metadata } from 'next'
import Hero from "@/components/Hero"
import { pageMetadata } from "@/lib/seo/metadata"
import { StructuredData } from '@/components/StructuredData'
import { organizationSchema, websiteSchema, logisticsServiceSchema } from '@/lib/seo/structured-data'

export const metadata: Metadata = pageMetadata.home()

// Dynamically import components that are not in the initial viewport
const Map = dynamic(() => import("@/components/Map"), { 
  loading: () => <div className="h-[600px]" /> 
})

const AnimatedFeature = dynamic(() => import("@/components/AnimatedFeature"), {
  loading: () => <div className="h-[800px]" />
})

const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="h-[600px]" />
})

const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="h-[600px]" />
})

const CertificationsBanner = dynamic(() => import("@/components/CertificationsBanner"), {
  loading: () => <div className="h-[200px]" />
})

export default function HomePage() {
  return (
    <>
      <StructuredData data={[organizationSchema, websiteSchema, logisticsServiceSchema]} />
      <div className="bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black relative">
        <Hero />
        <Suspense fallback={<div className="h-[600px]" />}>
          <Map />
        </Suspense>
        <Suspense fallback={<div className="h-[800px]" />}>
          <AnimatedFeature />
        </Suspense>
        <Suspense fallback={<div className="h-[200px]" />}>
          <CertificationsBanner />
        </Suspense>
        <Suspense fallback={<div className="h-[600px]" />}>
          <Services />
        </Suspense>
        <Suspense fallback={<div className="h-[600px]" />}>
          <About />
        </Suspense>
      </div>
    </>
  )
}
