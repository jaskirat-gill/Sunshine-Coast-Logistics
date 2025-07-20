"use client"
import Hero from "@/components/Hero"
import Products from "@/components/Products"
import About from "@/components/About"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* <Header /> */}
      <Hero />
      <Products />
      <About />
      {/* <Footer /> */}
    </div>
  )
}
