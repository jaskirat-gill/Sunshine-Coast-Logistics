"use client"

import { useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { Truck } from "lucide-react"
import { WordPressImage } from "@/components/ui/wordpress-image"
import { MASTER_DATA } from "@/lib/data"
import { Background } from "./ui/background"

export default function Map() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMouseX(x)
    setMouseY(y)
  }
  
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const isMapInView = useInView(mapRef, { once: false, margin: "-100px" })

  
  
  // Smooth spring physics for mouse movement
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const rotateXSpring = useSpring(useMotionValue(0), springConfig)
  const rotateYSpring = useSpring(useMotionValue(0), springConfig)
  
  // Update spring values based on mouse position
  if (isMapInView) {
    rotateXSpring.set(-mouseY * 10) // Invert Y for natural tilt
    rotateYSpring.set(mouseX * 10)
  }

  return (
    <section id="logistics" className="py-24 relative overflow-hidden" ref={containerRef}>
      <Background />

      <div className="container mx-auto px-4 relative z-10">
      
        {/* World Map Section with enhanced animations */}
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, scale: 0.95, rotateX: 15, rotateY: -15 }}
          animate={isMapInView ? { 
            opacity: 1, 
            scale: 1, 
            rotateX: 0, 
            rotateY: 0 
          } : { 
            opacity: 0, 
            scale: 0.95, 
            rotateX: 15, 
            rotateY: -15 
          }}
          transition={{ 
            duration: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          style={{ 
            rotateX: rotateXSpring,
            rotateY: rotateYSpring
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            rotateXSpring.set(0)
            rotateYSpring.set(0)
          }}
          className="relative bg-white dark:bg-zinc-800/50 backdrop-blur-md rounded-3xl p-8 overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-700/50 transform-gpu perspective-1000"
        >
          {/* Background with map */}
          <div className="absolute inset-0 w-full h-full">
            <WordPressImage
              slug="map-background"
              alt="World map background"
              width={1920}
              height={1080}
              className="w-full h-full object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/80 dark:from-black/80 dark:via-black/70 dark:to-black" />
          </div>
          
          {/* Dark mode overlay */}
          <div className="absolute inset-0 w-full h-full dark:bg-gradient-to-r dark:from-black/80 dark:via-black/70 dark:to-black z-0"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 text-center">{MASTER_DATA.map.title}</h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-center mb-8 max-w-2xl mx-auto">
              {MASTER_DATA.map.description}
            </p>

            {/* World Map */}
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* World Map SVG */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={isMapInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <motion.img
                  src="/north-america.svg"
                  alt="World Map"
                  className="absolute inset-0 w-full h-full object-contain opacity-90 pointer-events-none select-none dark:invert dark:opacity-40"
                  style={{ zIndex: 1 }}
                  draggable={false}
                  initial={{ filter: "blur(10px)", scale: 1.1 }}
                  animate={isMapInView ? { filter: "blur(0px)", scale: 1 } : { filter: "blur(10px)", scale: 1.1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </motion.div>
              
              {/* Map reveal animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 z-10"
                initial={{ x: "0%" }}
                animate={isMapInView ? { x: "100%" } : { x: "0%" }}
                transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
              />
              
  
              {/* Floating info card */}
              <motion.div
                className="absolute bottom-10 right-10 bg-white dark:bg-zinc-800 rounded-xl p-4 shadow-xl border border-zinc-200 dark:border-zinc-700 z-40 w-64"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={isMapInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                transition={{ delay: 4.5, duration: 0.8, type: "spring" }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-zinc-900 dark:text-white font-bold text-sm">{MASTER_DATA.map.stats.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs">{MASTER_DATA.map.stats.point1}</p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs">{MASTER_DATA.map.stats.point2}</p>
                  </div>
                </div>
                <motion.div 
                  className="w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-3 rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={isMapInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 5, duration: 1.5 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
