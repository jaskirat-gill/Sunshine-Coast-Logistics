"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AnimatedFeature() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  // Parallax effect for images
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50])
  
  // Spring animation for smoother transitions
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const scaleSpring = useSpring(useMotionValue(0.8), springConfig)
  
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
  
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % 3)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [isInView])
  
  useEffect(() => {
    if (isInView) {
      scaleSpring.set(1)
    } else {
      scaleSpring.set(0.8)
    }
  }, [isInView, scaleSpring])
  
  const features = [
    {
      title: "Nationwide Coverage",
      description: "Our extensive network spans across North America, ensuring your shipments reach their destination on time, every time.",
      image: "/home_services_1.jpg",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "Advanced Fleet Technology",
      description: "State-of-the-art tracking systems and modern vehicles provide real-time updates and maximum efficiency.",
      image: "/home_services_2.jpg",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      title: "Expert Logistics Team",
      description: "Our experienced professionals design customized shipping solutions tailored to your specific business needs.",
      image: "/home_services_3.jpg",
      color: "from-yellow-300 to-yellow-500"
    }
  ]

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden bg-zinc-100 dark:bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-black -z-10" />
      
      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10 dark:opacity-20 z-0"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          style={{ opacity, y }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-4xl pb-4 md:text-6xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent"
          >
            Logistics Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl pb-4 md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto"
          >
            Delivering exceptional service with cutting-edge technology
          </motion.p>
        </motion.div>
        
        {/* Main animated feature */}
        <div className="relative h-[700px] md:h-[800px] mb-16">
          <AnimatePresence mode="wait">
            {features.map((feature, index) => (
              index === currentIndex && (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1.5 }}
                >
                  {/* Text content */}
                  <motion.div 
                    className="w-full md:w-1/2 p-8 md:p-16 z-10 order-2 md:order-1"
                    style={{ y: textY }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 1.2 }}
                      className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-200 dark:border-zinc-700/50"
                    >
                      <motion.h3 
                        className={`text-3xl pb-2 md:text-4xl font-bold mb-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1.2 }}
                      >
                        {feature.title}
                      </motion.h3>
                      <motion.p
                        className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0, duration: 1.2 }}
                      >
                        {feature.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 1.2 }}
                      >
                        <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 text-lg px-8 py-6 rounded-full">
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Image */}
                  <motion.div 
                    className="w-full md:w-1/2 h-[300px] md:h-full relative order-1 md:order-2"
                    style={{ y: imageY }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-3xl overflow-hidden"
                      initial={{ clipPath: "inset(100% 0 0 0)" }}
                      animate={{ clipPath: "inset(0% 0 0% 0)" }}
                      transition={{ delay: 0.4, duration: 2.0, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
          
          {/* Navigation dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex 
                    ? "bg-yellow-500" 
                    : "bg-zinc-400 dark:bg-zinc-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Animated statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            { value: "10+", label: "Years of Experience" },
            { value: "1,000+", label: "Satisfied Clients" },
            { value: "500,000+", label: "Shipments Completed" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/70 to-white/40 dark:from-zinc-800/40 dark:to-zinc-900/20 backdrop-blur-lg rounded-2xl p-8 text-center shadow-lg border border-white/20 dark:border-zinc-700/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", transition: { duration: 0.3 } }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <motion.div
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4 relative"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
              >
                {stat.value}
              </motion.div>
              <motion.p
                className="text-lg font-medium text-zinc-800 dark:text-zinc-200"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 