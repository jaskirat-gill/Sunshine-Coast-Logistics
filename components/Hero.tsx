"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, useScroll, useTransform  } from "framer-motion"
import { AnimatedButton } from "@/components/ui/button"
import { MASTER_DATA } from "@/lib/data"

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)
  
  // Memoize the scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 10
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled)
    }
  }, [scrolled])
  
  // Use passive event listener for better scroll performance
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])
  
  
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 50])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28">
      {/* Background Video with Lighter Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          preload="auto"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      {/* Content */}
      <motion.div 
        className="relative z-20 container mx-auto px-4 text-center mt-16"
        style={{ opacity, scale, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            North America&apos;s
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Expedite Experts
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            {MASTER_DATA.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <AnimatedButton
              variant="primary"
              href="/contact"
              className="text-lg px-8"
            >
              Contact Us
            </AnimatedButton>
            <AnimatedButton
              variant="outline"
              href="/about"
              className="text-lg px-8 text-yellow-400 group-hover:text-yellow-300 border-white/30"
            >
              Learn More
            </AnimatedButton>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {MASTER_DATA.hero.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + stat.delay, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-300">{stat.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}