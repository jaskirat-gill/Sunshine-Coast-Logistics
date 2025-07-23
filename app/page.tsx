"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Hero from "@/components/Hero"

// Dynamically import components that are not in the initial viewport
const Map = dynamic(() => import("@/components/Map"), { 
  ssr: false,
  loading: () => <div className="h-[600px]" /> 
})

const AnimatedFeature = dynamic(() => import("@/components/AnimatedFeature"), {
  ssr: false,
  loading: () => <div className="h-[800px]" />
})

const Services = dynamic(() => import("@/components/Services"), {
  ssr: false,
  loading: () => <div className="h-[600px]" />
})

const About = dynamic(() => import("@/components/About"), {
  ssr: false,
  loading: () => <div className="h-[600px]" />
})

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black relative">
      <Hero />
      <Suspense fallback={<div className="h-[600px]" />}>
        <Map />
      </Suspense>
      <Suspense fallback={<div className="h-[800px]" />}>
        <AnimatedFeature />
      </Suspense>
      <Suspense fallback={<div className="h-[600px]" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="h-[600px]" />}>
        <About />
      </Suspense>
    </div>
  )
}
