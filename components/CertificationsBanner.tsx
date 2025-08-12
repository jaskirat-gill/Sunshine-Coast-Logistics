"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function CertificationsBanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
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

  // Hardcoded SVGs (first one is the FAST logo from WordPress)
  const svgAssets = [
    {
      src: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2025/08/FAST-1.svg`,
      alt: "FAST Certification",
      width: 128,
      height: 128
    },
    // Add more SVGs here as needed
    {
      src: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2025/08/pip.svg`,
      alt: "PIP",
      width: 128,
      height: 128
    },
    {
      src: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2025/08/cbsa.svg`,
      alt: "Placeholder Certification 2",
      width: 256,
      height: 256
    },
    {
      src: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2025/08/ctpat.svg`,
      alt: "Placeholder Certification 2",
      width: 256,
      height: 256
    },
    {
      src: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2025/08/homeland-security-seeklogo.png`,
      alt: "Placeholder Certification 2",
      width: 64,
      height: 64
    }
  ]
  // Duplicate for seamless loop
  const duplicatedSVGs = [...svgAssets, ...svgAssets]

  return (
    <section ref={containerRef} className="relative py-16 overflow-hidden bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 dark:from-yellow-400/5 dark:to-yellow-600/5">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
          Certification & Compliance
        </h2>
        <div className="relative h-32 md:h-40 flex items-center justify-center overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-600/20 blur-3xl" />

          {/* Continuous scrolling SVGs */}
          <motion.div
            className="flex items-center space-x-12 md:space-x-20 whitespace-nowrap"
            animate={isInView ? { x: [0, -180 * svgAssets.length] } : { x: 0 }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {duplicatedSVGs.map((svg, index) => (
              <motion.div
                key={index}
                className="flex items-center flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 1, 0.5, 1]
                }}
              >
                {/* SVG Asset */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <Image
                    src={svg.src}
                    alt={svg.alt}
                    width={svg.width * 2}
                    height={svg.height * 2}
                    className="w-32 h-32 md:w-48 md:h-48 object-contain"
                    draggable={false}
                    unoptimized
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  )
}
