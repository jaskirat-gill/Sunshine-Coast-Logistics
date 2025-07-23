"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, useScroll, useTransform  } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, Package, Shield } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, opacity: number}>>([])
  const isClient = useRef(false)
  
  // Memoize the scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 10
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled)
    }
  }, [scrolled])
  
  // Generate particles only on the client side with reduced count
  useEffect(() => {
    isClient.current = true
    
    // Reduce particle count for better performance
    const newParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.3
    }))
    
    setParticles(newParticles)
  }, [])
  
  // Use passive event listener for better scroll performance
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])
  
  // Use reduced motion preference for accessibility
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false
  )
  
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 50])
  
  const stats = [
    { icon: Users, label: "Over 1,000", sublabel: "businesses working with us", delay: 0.2 },
    { icon: Package, label: "Over 100,000", sublabel: "shipments per year", delay: 0.4 },
    { icon: Shield, label: "Your satisfaction", sublabel: "guaranteed", delay: 0.6 },
  ]

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

      {/* Animated particles - only rendered client-side with reduced animations */}
      {!prefersReducedMotion.current && (
        <div className="absolute inset-0 z-5 opacity-30">
          {isClient.current && particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 md:w-2 md:h-2 bg-yellow-400 rounded-full"
              initial={{ 
                x: `${particle.x}%`, 
                y: `${particle.y}%`,
                opacity: particle.opacity
              }}
              animate={{ 
                x: `${(particle.x + 50) % 100}%`, 
                y: `${(particle.y + 50) % 100}%`,
                opacity: [particle.opacity, particle.opacity + 0.2, particle.opacity]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 15 + (particle.id % 5), // Longer duration, fewer keyframes
                ease: "linear",
                repeatType: "reverse" // More efficient than complex paths
              }}
            />
          ))}
        </div>
      )}

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
            Delivering logistics excellence with speed, reliability, and precision across the continent
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 text-lg px-8 py-6 rounded-full relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/0 via-black/10 to-black/0 group-hover:animate-shimmer" />
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-yellow-600 to-yellow-800 group-hover:w-full transition-all duration-500 ease-out rounded-full" />
              <span className="relative z-10 flex items-center transition-all duration-300">
                <Link href="/contact" className="relative inline-block text-white font-semibold group-hover:text-white transition-colors duration-300">
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/50 group-hover:bg-white/50 group-hover:w-full transition-all duration-300" />
                </Link>
              </span>
              <span className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-20 bg-white blur-md group-hover:animate-pulse transition-all duration-500"></span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400/0 via-yellow-400/30 to-yellow-400/0 group-hover:animate-shimmer" />
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-white/5 to-white/20 group-hover:w-full transition-all duration-500 ease-out rounded-full" />
              <span className="relative z-10  bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
                <Link href="/about" className="relative inline-block text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                  Learn More
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300" />
                </Link>
              </span>
              <span className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-10 bg-yellow-400 blur-md group-hover:animate-pulse transition-all duration-500"></span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
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