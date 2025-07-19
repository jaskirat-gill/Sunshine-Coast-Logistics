"use client"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Products from "@/components/Products"
import Footer from "@/components/Footer"
import About from "@/components/About"
import Contact from "@/components/Contact"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
