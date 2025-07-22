"use client"
import Hero from "@/components/Hero"
import Products from "@/components/Products"
import About from "@/components/About"
import Services from "@/components/Services"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black">
      <Hero />
      <Services />
      <Products />
      <About />
    </div>
  )
}
