"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Award, Clock, Globe, Shield, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const contentX = useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, -50])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  const features = [
    {
      icon: Award,
      title: "Industry Excellence",
      description: "Over 20 years of experience in logistics and transportation management",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support and real-time shipment monitoring",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Extensive network covering major shipping routes worldwide",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Advanced security measures and reliable service delivery",
    },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Light background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-200 to-white dark:from-black dark:to-zinc-900 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -z-5" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -z-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            style={{ x: contentX, opacity: contentOpacity }}
            className="order-2 md:order-1"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About{" "}
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
                Sunshine Coast Logistics
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-zinc-700 dark:text-zinc-300 mb-8 leading-relaxed max-w-2xl"
            >
              We are a leading logistics platform connecting shippers and carriers across the Sunshine Coast and beyond.
              Our digital ecosystem provides comprehensive solutions for modern transportation challenges.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl"
            >
              From transport tenders to real-time cargo tracking, we leverage cutting-edge technology to streamline
              logistics operations and deliver exceptional value to our clients.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-zinc-900 dark:text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10"
            >
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 rounded-full">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Image with floating effect */}
          <motion.div 
            className="order-1 md:order-2 flex justify-center md:justify-end"
            style={{ scale: imageScale, opacity: imageOpacity }}
          >
            <div className="relative w-full max-w-md aspect-[4/3]">
              {/* Main image */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/home_about_image.jpg"
                  alt="Modern logistics operations"
                  fill
                  className="object-cover w-full h-full"
                  style={{ objectPosition: "center" }}
                  priority
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent" />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl -z-10" />
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-yellow-400/30 rounded-full blur-xl -z-10" />
              
              {/* Floating badge */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 7, delay: 1, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 bg-white dark:bg-zinc-800 rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Trusted by</p>
                    <p className="text-sm font-bold text-zinc-900 dark:text-white">1,000+ Businesses</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
