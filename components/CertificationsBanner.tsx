"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Award, CheckCircle } from "lucide-react"
import { MASTER_DATA } from "@/lib/data"

export default function CertificationsBanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    
    const currentElement = containerRef.current
    
    if (currentElement) {
      observer.observe(currentElement)
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  const icons = [Shield, Award, CheckCircle]
  
  // Duplicate certifications for seamless loop
  const duplicatedCertifications = [...MASTER_DATA.certifications, ...MASTER_DATA.certifications]

  return (
    <section ref={containerRef} className="relative py-16 overflow-hidden bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 dark:from-yellow-400/5 dark:to-yellow-600/5">
      <div className="container mx-auto px-4">
        <div className="relative h-24 md:h-32 flex items-center justify-center overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-600/20 blur-3xl" />
          
          {/* Continuous scrolling certifications */}
          <motion.div 
            className="flex items-center space-x-8 md:space-x-12 whitespace-nowrap"
            animate={isInView ? { x: [0, -50 * MASTER_DATA.certifications.length] } : { x: 0 }}
            transition={{ 
              duration: 30, 
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {duplicatedCertifications.map((certification, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 md:space-x-4 flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 1, 0.5, 1]
                }}
              >
                {/* Icon */}
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  {(() => {
                    const IconComponent = icons[index % icons.length]
                    return <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  })()}
                </div>
                
                {/* Text */}
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent whitespace-nowrap">
                  {certification}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-8 right-8 w-1 h-1 bg-yellow-500 rounded-full opacity-40 animate-pulse delay-1000" />
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-yellow-600 rounded-full opacity-50 animate-pulse delay-500" />
        <div className="absolute bottom-8 right-1/3 w-1 h-1 bg-yellow-400 rounded-full opacity-30 animate-pulse delay-1500" />
      </div>
    </section>
  )
} 