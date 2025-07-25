"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { MASTER_DATA } from "@/lib/data"

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  
  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setIsReducedMotion(mediaQuery.matches)
    }
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Simplified transform values with fewer interpolation points
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.9, 1, 1, 0.9])

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-400/5 blur-3xl -z-10" />
      
      <motion.div 
        className="container mx-auto px-4 relative will-change-transform"
        style={{ opacity, scale }}
      >
        <motion.div 
          initial={{ opacity: 0, y: isReducedMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isReducedMotion ? 0 : 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
            {MASTER_DATA.landing_services.title}
          </h2>
          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
            {MASTER_DATA.landing_services.description}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MASTER_DATA.landing_services.points.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: isReducedMotion ? 0 : 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isReducedMotion ? 0 : 50 }}
              transition={{ 
                duration: 0.6,
                delay: isReducedMotion ? 0 : service.delay,
              }}
              whileHover={isReducedMotion ? {} : { y: -8, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-zinc-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700/50 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-5">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
