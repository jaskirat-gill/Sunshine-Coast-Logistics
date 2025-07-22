"use client"

import { useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { Truck } from "lucide-react"

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
      {/* Light background with subtle pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-black">
        <div className="absolute inset-0 opacity-5 dark:opacity-10" 
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
      </div>

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
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.8) 100%), url('/map_background.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
              zIndex: 0
            }}
          ></div>
          
          {/* Dark mode overlay */}
          <div className="absolute inset-0 w-full h-full dark:bg-gradient-to-r dark:from-black/80 dark:via-black/70 dark:to-black z-0"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 text-center">Global Logistics Network</h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-center mb-8 max-w-2xl mx-auto">
              Our platform connects carriers and shippers worldwide, providing seamless logistics solutions across
              continents.
            </p>

            {/* World Map with Enhanced Animated Trucks */}
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* World Map SVG */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={isMapInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <motion.img
                  src="/world.svg"
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
              
              
              {/* Animated data flow */}
              {isMapInView && (
                <motion.div 
                  className="absolute inset-0 z-5 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 2, duration: 1 }}
                >
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={`flow-${i}`}
                      className="absolute bg-yellow-400 rounded-full opacity-70"
                      style={{ 
                        width: Math.random() * 4 + 2,
                        height: Math.random() * 4 + 2,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{ 
                        left: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                        top: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                        opacity: [0, 0.7, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{ 
                        duration: Math.random() * 5 + 5,
                        delay: Math.random() * 5,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 3,
                      }}
                    />
                  ))}
                </motion.div>
              )}
              
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
                    <h4 className="text-zinc-900 dark:text-white font-bold text-sm">Network Statistics</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs">500+ active routes</p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs">98.7% on-time delivery</p>
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
