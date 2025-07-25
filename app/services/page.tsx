"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { AnimatedButton } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import AnimatedFeature from "@/components/AnimatedFeature"
import { MASTER_DATA } from "@/lib/data"

export default function Services() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  const [openService, setOpenService] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  const toggleService = (index: number) => {
    if (openService === index) {
      setOpenService(null)
    } else {
      setOpenService(index)
    }
  }

  return (
    <main ref={containerRef} className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black -z-10" />
      <div className="absolute inset-0 opacity-5 dark:opacity-10 -z-5" 
           style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      
      {/* Hero section */}
      <section className="relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
              {MASTER_DATA.services_page.tagline}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Featured service with major animation */}
      <AnimatedFeature />
      
      {/* Services accordion section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            style={{ opacity, y }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent"
            >
              {MASTER_DATA.services_page.tagline2}
            </motion.h2>
            
            <div className="space-y-6">
              {MASTER_DATA.services_page.services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-700/50"
                >
                  {/* Service header */}
                  <div 
                    className="flex items-center justify-between p-6 cursor-pointer"
                    onClick={() => toggleService(index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{service.title}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openService === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 bg-zinc-100 dark:bg-zinc-700 rounded-full flex items-center justify-center"
                    >
                      <ChevronDown className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                    </motion.div>
                  </div>
                  
                  {/* Service content */}
                  <AnimatePresence>
                    {openService === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 pt-0">
                          {/* Service description */}
                          <div>
                            <p className="text-zinc-700 dark:text-zinc-300 mb-6">{service.description}</p>
                            <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">Key Features:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1, duration: 0.5 }}
                                  className="flex items-center text-zinc-700 dark:text-zinc-300"
                                >
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 mr-3" />
                                  {feature}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Service image */}
                          <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Interactive map section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-zinc-800/50 rounded-3xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-700/50"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Map content */}
              <div className="p-8 md:p-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent"
                >
                  {MASTER_DATA.services_page.mapCoverage}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg text-zinc-700 dark:text-zinc-300 mb-8"
                >
                  {MASTER_DATA.services_page.mapDescription}
                </motion.p>
                
                <div className="space-y-6">
                  {MASTER_DATA.services_page.mapPoints.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    >
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-zinc-700 dark:text-zinc-300">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-8"
                >
                  <AnimatedButton 
                    variant="primary" 
                    href="/contact"
                    className="text-black"
                  >
                    {MASTER_DATA.services_page.cta.button}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </motion.div>
              </div>
              
              {/* Map visualization */}
              <div className="relative h-[400px] lg:h-auto">
                <div className="absolute inset-0">
                  <Image
                    src="/map_background.jpg"
                    alt="Service coverage map"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent dark:from-zinc-900/80 lg:hidden" />
                </div>
                
                {/* Animated map elements would go here */}
                <div className="absolute inset-0 z-10">
                  {/* This is where you would add animated map elements */}
                  {/* For now, we'll just add some placeholder dots */}
                  {[
                    { x: "20%", y: "30%", delay: 0.2 },
                    { x: "50%", y: "20%", delay: 0.4 },
                    { x: "80%", y: "40%", delay: 0.6 },
                    { x: "30%", y: "60%", delay: 0.8 },
                    { x: "70%", y: "70%", delay: 1.0 },
                  ].map((dot, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-4 h-4 rounded-full bg-yellow-500"
                      style={{ left: dot.x, top: dot.y }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { 
                        scale: [0, 1.5, 1],
                        opacity: [0, 1, 0.8]
                      } : { scale: 0, opacity: 0 }}
                      transition={{ 
                        delay: dot.delay,
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl p-12 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{MASTER_DATA.services_page.cta.tagline}</h2>
                <p className="text-xl text-black/80 max-w-xl">
                  {MASTER_DATA.services_page.cta.description}
                </p>
              </div>
              <Link href="/contact">
                <AnimatedButton 
                  variant="default" 
                  className="bg-black text-white hover:bg-zinc-800 text-lg px-8"
                >
                  {MASTER_DATA.services_page.cta.button}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </AnimatedButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 