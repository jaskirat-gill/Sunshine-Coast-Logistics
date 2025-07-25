"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { AnimatedButton } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, ArrowRight, Box } from "lucide-react"
import Link from "next/link"
import { MASTER_DATA } from "@/lib/data"

export default function Equipment() {
  const [activeEquipment, setActiveEquipment] = useState(0)
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  
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
              Our Equipment
            </h1>
            <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
              {MASTER_DATA.equipment_page.tagline}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main equipment showcase */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          {/* Equipment selector */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {MASTER_DATA.equipment_page.equipment.map((equipment, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveEquipment(index)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                  activeEquipment === index 
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg" 
                    : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:shadow-md"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <equipment.icon className={`w-5 h-5 ${activeEquipment === index ? "text-black" : "text-yellow-500"}`} />
                {equipment.name}
              </motion.button>
            ))}
          </div>
          
          {/* Equipment display */}
          <div className="relative h-[600px] md:h-[700px] mb-16">
            <AnimatePresence mode="wait">
              {MASTER_DATA.equipment_page.equipment.map((equipment, index) => (
                activeEquipment === index && (
                  <motion.div
                    key={index}
                    className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  >
                    {/* Text content */}
                    <div className="order-2 lg:order-1">
                      <motion.div
                        className="bg-white dark:bg-zinc-800/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-200 dark:border-zinc-700/50"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      >
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-br ${equipment.color} rounded-xl flex items-center justify-center mb-6`}
                          initial={{ scale: 0, rotate: -30 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                        >
                          <equipment.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <motion.h2 
                          className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${equipment.color} bg-clip-text text-transparent`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                        >
                          {equipment.name}
                        </motion.h2>
                        
                        <motion.p
                          className="text-lg text-zinc-700 dark:text-zinc-300 mb-8"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                        >
                          {equipment.description}
                        </motion.p>
                        
                        <motion.div
                          className="mb-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6, duration: 0.8 }}
                        >
                          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Key Features:</h3>
                          <ul className="space-y-2">
                            {MASTER_DATA.equipment_page.equipment[activeEquipment].features.map((feature, i) => (
                              <motion.li
                                key={i}
                                className="flex items-center text-zinc-700 dark:text-zinc-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + (i * 0.1), duration: 0.5 }}
                              >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${equipment.color} mr-3`} />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2, duration: 0.8 }}
                        >
                          <Link href="/contact">
                            <AnimatedButton className={`bg-gradient-to-r ${equipment.color} text-black hover:brightness-110 text-lg px-8 py-6 rounded-full`}>
                              Request This Equipment
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </AnimatedButton>
                          </Link>
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    {/* Image */}
                    <div className="order-1 lg:order-2 h-[300px] md:h-[500px] relative">
                      <motion.div
                        className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        animate={{ clipPath: "inset(0 0% 0 0)" }}
                        transition={{ delay: 0.2, duration: 1, ease: [0.25, 1, 0.5, 1] }}
                      >
                        <Image
                          src={equipment.image}
                          alt={equipment.name}
                          fill
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                        
                        {/* Floating badge */}
                        <motion.div
                          className="absolute bottom-6 right-6 bg-white dark:bg-zinc-800 rounded-xl p-4 shadow-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1, duration: 0.8 }}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 bg-gradient-to-br ${equipment.color} rounded-full flex items-center justify-center`}>
                              <Box className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-xs text-zinc-500 dark:text-zinc-400">Available</p>
                              <p className="text-sm font-bold text-zinc-900 dark:text-white">Nationwide</p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            {/* Navigation arrows */}
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4 z-10">
              <motion.button
                onClick={() => setActiveEquipment((prev) => (prev === 0 ? MASTER_DATA.equipment_page.equipment.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-yellow-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={() => setActiveEquipment((prev) => (prev === MASTER_DATA.equipment_page.equipment.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-yellow-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
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
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{MASTER_DATA.equipment_page.cta.tagline}</h2>
                <p className="text-xl text-black/80 max-w-xl">
                  {MASTER_DATA.equipment_page.cta.description}
                </p>
              </div>
              <Link href="/contact">
                <AnimatedButton className="bg-black text-white hover:bg-zinc-800 text-lg px-8 py-6 rounded-full">
                  {MASTER_DATA.equipment_page.cta.button}
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