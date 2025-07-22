"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"
import { Truck, Boxes, Send, Repeat, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Products() {
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
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  const isMapInView = useInView(mapRef, { once: false, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, 100])
  
  // Smooth spring physics for mouse movement
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const rotateXSpring = useSpring(useMotionValue(0), springConfig)
  const rotateYSpring = useSpring(useMotionValue(0), springConfig)
  
  // Update spring values based on mouse position
  if (isMapInView) {
    rotateXSpring.set(-mouseY * 10) // Invert Y for natural tilt
    rotateYSpring.set(mouseX * 10)
  }

  const services = [
    {
      icon: Truck,
      title: "FTL (Full Truck Load)",
      description:
        "We provide reliable pick-ups and deliveries, competitive rates, and courteous customer service for Full Truck Load freight. Whether Flatbed, Dry Van, one skid or half a trailer, Sunshine Coast Logistics has you covered from coast to coast.",
      image: "/home_services_1.jpg",
    },
    {
      icon: Boxes,
      title: "LTL (Less Than Truck Load)",
      description:
        "Not every shipment requires a full trailer. Our team offers reliable pick-ups and deliveries for Less Than Truck Load freight, ensuring flexibility and efficiency.",
      image: "/home_services_2.jpg",
    },
    {
      icon: Send,
      title: "Easy Shipping",
      description:
        "We're dedicated to Shipping Made Easy and will work with you to ensure that all of your freight is handled smoothly and efficiently.",
      image: "/home_services_3.jpg",
    },
    {
      icon: Repeat,
      title: "Dedicated Services",
      description:
        "We understand the supply chain process and the ever-growing need to adapt to customer expectations. Our dedicated services ensure your logistics needs are always met.",
      image: "/home_services_4.jpg",
    },
  ]

  // Truck animation path coordinates
  const truckPathPoints = [
    { x: "10%", y: "70%" },
    { x: "30%", y: "50%" },
    { x: "50%", y: "30%" },
    { x: "70%", y: "60%" },
    { x: "90%", y: "40%" }
  ]

  return (
    <section id="logistics" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Light background with subtle pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black">
        <div className="absolute inset-0 opacity-5 dark:opacity-10" 
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
            Reliable, flexible, and customer-focused logistics solutions for every shipping need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-800/50 shadow-xl flex flex-col md:flex-row items-stretch"
            >
              {/* Service image */}
              <div className="relative w-full md:w-1/3 min-h-[180px] md:min-h-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover w-full h-full"
                  style={{ objectPosition: "center" }}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              {/* Service content */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{service.title}</h3>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 text-lg">{service.description}</p>
                <Button variant="link" className="text-yellow-600 dark:text-yellow-400 p-0 flex items-center mt-4 self-start">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

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
              
              {/* Animated location markers */}
              {[
                { x: "20%", y: "30%", delay: 1.5, size: "lg" },
                { x: "70%", y: "25%", delay: 1.7, size: "md" },
                { x: "80%", y: "45%", delay: 1.9, size: "lg" },
                { x: "30%", y: "65%", delay: 2.1, size: "md" },
                { x: "60%", y: "70%", delay: 2.3, size: "lg" },
                { x: "40%", y: "40%", delay: 2.5, size: "md" },
                { x: "85%", y: "60%", delay: 2.7, size: "sm" },
                { x: "15%", y: "50%", delay: 2.9, size: "sm" },
              ].map((marker, index) => (
                <motion.div
                  key={`marker-${index}`}
                  className="absolute z-20"
                  style={{ 
                    left: marker.x, 
                    top: marker.y,
                    width: marker.size === "lg" ? 20 : marker.size === "md" ? 16 : 12,
                    height: marker.size === "lg" ? 20 : marker.size === "md" ? 16 : 12,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isMapInView ? { 
                    scale: 1,
                    opacity: 1
                  } : { scale: 0, opacity: 0 }}
                  transition={{ 
                    delay: marker.delay,
                    duration: 0.5,
                    type: "spring"
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-yellow-500"
                    animate={{ 
                      boxShadow: ["0 0 0 0 rgba(234, 179, 8, 0.8)", "0 0 0 10px rgba(234, 179, 8, 0)"],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeOut"
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-yellow-500"
                  />
                </motion.div>
              ))}
              
              {/* Animated connection lines */}
              {[
                { start: { x: "20%", y: "30%" }, end: { x: "70%", y: "25%" }, delay: 3.0 },
                { start: { x: "70%", y: "25%" }, end: { x: "80%", y: "45%" }, delay: 3.2 },
                { start: { x: "80%", y: "45%" }, end: { x: "60%", y: "70%" }, delay: 3.4 },
                { start: { x: "60%", y: "70%" }, end: { x: "30%", y: "65%" }, delay: 3.6 },
                { start: { x: "30%", y: "65%" }, end: { x: "20%", y: "30%" }, delay: 3.8 },
                { start: { x: "40%", y: "40%" }, end: { x: "70%", y: "25%" }, delay: 4.0 },
                { start: { x: "40%", y: "40%" }, end: { x: "30%", y: "65%" }, delay: 4.2 },
              ].map((line, index) => (
                <motion.div
                  key={`line-${index}`}
                  className="absolute top-0 left-0 w-full h-full z-15"
                  initial={{ opacity: 0 }}
                  animate={isMapInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: line.delay, duration: 0.5 }}
                >
                  <svg width="100%" height="100%" className="absolute inset-0">
                    <motion.line
                      x1={line.start.x}
                      y1={line.start.y}
                      x2={line.start.x}
                      y2={line.start.y}
                      animate={isMapInView ? { x2: line.end.x, y2: line.end.y } : {}}
                      transition={{ delay: line.delay, duration: 1, ease: "easeOut" }}
                      stroke="rgba(234, 179, 8, 0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </motion.div>
              ))}
              
              {/* Animated trucks moving across the map */}
              {[
                { start: { x: "20%", y: "30%" }, end: { x: "70%", y: "25%" }, delay: 3.0 },
                { start: { x: "70%", y: "25%" }, end: { x: "80%", y: "45%" }, delay: 3.2 },
                { start: { x: "80%", y: "45%" }, end: { x: "60%", y: "70%" }, delay: 3.4 },
                { start: { x: "60%", y: "70%" }, end: { x: "30%", y: "65%" }, delay: 3.6 },
                { start: { x: "30%", y: "65%" }, end: { x: "20%", y: "30%" }, delay: 3.8 },
              ].map((route, index) => (
                <motion.div
                  key={`truck-${index}`}
                  className="absolute z-30"
                  style={{ 
                    left: route.start.x, 
                    top: route.start.y,
                    x: "-50%",
                    y: "-50%",
                  }}
                  initial={{ opacity: 0 }}
                  animate={isMapInView ? { 
                    opacity: [0, 1, 1, 0],
                    x: ["-50%", "-50%"],
                    y: ["-50%", "-50%"],
                    left: [route.start.x, route.end.x],
                    top: [route.start.y, route.end.y],
                  } : { opacity: 0 }}
                  transition={{ 
                    delay: route.delay,
                    duration: 3,
                    times: [0, 0.1, 0.9, 1],
                    repeat: Infinity,
                    repeatDelay: 7
                  }}
                >
                  <div className="relative w-8 h-8 md:w-10 md:h-10">
                    <Image
                      src="/map_truck.png"
                      alt="Logistics truck"
                      fill
                      className="object-contain"
                    />
                    <motion.div 
                      className="absolute -bottom-2 -left-1 -right-1 h-1 rounded-full bg-yellow-500/50"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              ))}
              
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
