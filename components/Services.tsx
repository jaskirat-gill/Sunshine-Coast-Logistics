"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Truck, Clock, Globe, Shield, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8])
  
  const services = [
    {
      icon: Truck,
      title: "Express Delivery",
      description: "Time-critical shipments delivered with precision and care across North America.",
      delay: 0.1
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service and real-time tracking for complete peace of mind.",
      delay: 0.2
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      description: "Extensive network spanning all major routes and destinations in North America.",
      delay: 0.3
    },
    {
      icon: Shield,
      title: "Secure Transport",
      description: "Advanced security protocols and careful handling for your valuable shipments.",
      delay: 0.4
    }
  ]

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-400/5 blur-3xl -z-10" />
      
      <motion.div 
        className="container mx-auto px-4 relative"
        style={{ opacity, scale }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
            Logistics Excellence
          </h2>
          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
            Innovative solutions tailored to your specific transportation needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6,
                delay: service.delay,
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
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
