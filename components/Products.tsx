"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import { Truck, Boxes, Send, Repeat, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Products() {
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isMapInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="relative bg-white dark:bg-zinc-800/50 backdrop-blur-md rounded-3xl p-8 overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-700/50"
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
          <div className="absolute inset-0 w-full h-full dark:bg-gradient-to-r dark:from-black/80 dark:via-black/70 dark:to-black/80 z-0"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 text-center">Global Logistics Network</h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-center mb-8 max-w-2xl mx-auto">
              Our platform connects carriers and shippers worldwide, providing seamless logistics solutions across
              continents.
            </p>

            {/* World Map with Animated Trucks */}
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* World Map SVG */}
              <img
                src="/world.svg"
                alt="World Map"
                className="absolute inset-0 w-full h-full object-contain opacity-90 pointer-events-none select-none dark:invert dark:opacity-40"
                style={{ zIndex: 1 }}
                draggable={false}
              />
              
              {/* Animated trucks moving across the map */}
              {truckPathPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{ x: point.x, y: point.y, scale: 0 }}
                  animate={isMapInView ? { 
                    x: point.x, 
                    y: point.y,
                    scale: 1,
                    opacity: [0, 1, 1, 0],
                  } : { scale: 0 }}
                  transition={{ 
                    delay: index * 0.5,
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5
                  }}
                  style={{ zIndex: 2 }}
                >
                  <div className="relative w-8 h-8 md:w-10 md:h-10">
                    <Image
                      src="/map_truck.png"
                      alt="Logistics truck"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
              
              {/* Connection lines */}
              {truckPathPoints.slice(0, -1).map((_, index) => (
                <motion.div
                  key={`line-${index}`}
                  className="absolute top-0 left-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={isMapInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.5 + 0.25, duration: 0.5 }}
                  style={{ zIndex: 1 }}
                >
                  <svg width="100%" height="100%" className="absolute inset-0">
                    <line
                      x1={truckPathPoints[index].x}
                      y1={truckPathPoints[index].y}
                      x2={truckPathPoints[index + 1].x}
                      y2={truckPathPoints[index + 1].y}
                      stroke="rgba(234, 179, 8, 0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
