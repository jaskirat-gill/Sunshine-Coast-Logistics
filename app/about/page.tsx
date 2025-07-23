"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Globe, Shield, Users, TrendingUp, Truck } from "lucide-react"
import Link from "next/link"

export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Parallax effect for images
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50])
  
  const [activeTab, setActiveTab] = useState(0)
  
  const tabs = [
    { title: "Our Story", icon: Award },
    { title: "Our Mission", icon: TrendingUp },
    { title: "Our Values", icon: Shield }
  ]
  
  const tabContent = [
    {
      title: "Our Story",
      content: "Since 2015, Sunshine Coast Logistics has been a family-owned business dedicated to providing flexible, comprehensive freight solutions. We've worked to cultivate a great company culture with a modern fleet and best-in-class driving force. Our company was built on the premise that each and every customer deserves a carrier they can trust, a carrier that operates safely, delivers on time, and communicates proactively.",
      image: "/home_about_image.jpg",
      stats: [
        { value: "2015", label: "Founded" },
        { value: "15+", label: "Years Experience" },
        { value: "100%", label: "Family Owned" }
      ]
    },
    {
      title: "Our Mission",
      content: "Our mission is to provide exceptional transportation and logistics services that exceed our customers' expectations. We strive to be the most reliable, efficient, and customer-focused logistics partner in the industry. Through continuous innovation, investment in technology, and development of our team, we aim to set new standards in the logistics industry while maintaining our commitment to safety, sustainability, and community engagement.",
      image: "/home_services_2.jpg",
      stats: [
        { value: "24/7", label: "Support" },
        { value: "100%", label: "Commitment" },
        { value: "1,000+", label: "Happy Clients" }
      ]
    },
    {
      title: "Our Values",
      content: "At Sunshine Coast Logistics, our core values guide everything we do. We believe in integrity in all our dealings, safety as our top priority, excellence in service delivery, respect for our team members and clients, innovation to drive continuous improvement, and sustainability in our operations. These values form the foundation of our company culture and inform our decision-making at every level of the organization.",
      image: "/home_services_3.jpg",
      stats: [
        { value: "Safety", label: "First Priority" },
        { value: "Integrity", label: "In All Dealings" },
        { value: "Excellence", label: "In Service" }
      ]
    }
  ]
  
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
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
              Delivering logistics excellence since 2015
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main content tabs */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          {/* Tab navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                  activeTab === index 
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg" 
                    : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:shadow-md"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === index ? "text-black" : "text-yellow-500"}`} />
                {tab.title}
              </motion.button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="relative min-h-[600px]">
            <AnimatePresence mode="wait">
              {tabContent.map((content, index) => (
                activeTab === index && (
                  <motion.div
                    key={index}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Text content */}
                    <motion.div
                      style={{ y: textY }}
                      className="order-2 lg:order-1"
                    >
                      <motion.h2 
                        className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        {content.title}
                      </motion.h2>
                      
                      <motion.p
                        className="text-lg text-zinc-700 dark:text-zinc-300 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        {content.content}
                      </motion.p>
                      
                      {/* Stats */}
                      <motion.div
                        className="grid grid-cols-3 gap-4 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        {content.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <motion.div
                              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-1"
                              initial={{ scale: 0.5, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                            >
                              {stat.value}
                            </motion.div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</p>
                          </div>
                        ))}
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <Link href="/contact">
                          <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 rounded-full">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </motion.div>
                    </motion.div>
                    
                    {/* Image */}
                    <motion.div 
                      className="order-1 lg:order-2 relative h-[300px] md:h-[400px]"
                      style={{ y: imageY }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                      >
                        <Image
                          src={content.image}
                          alt={content.title}
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
          </div>
        </div>
      </section>
      
      
      {/* Company values visualization */}
      <section className="py-24 relative bg-zinc-100 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent"
            >
              What Sets Us Apart
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, title: "Customer Focus", description: "We prioritize our customers' needs and build long-term relationships based on trust and reliability." },
                { icon: Shield, title: "Safety First", description: "Safety is our top priority in all operations, protecting our team, cargo, and communities." },
                { icon: Truck, title: "Modern Fleet", description: "Our state-of-the-art fleet ensures efficient, reliable, and environmentally responsible transportation." },
                { icon: Globe, title: "Nationwide Coverage", description: "Our extensive network provides comprehensive logistics solutions across North America." }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-white dark:bg-zinc-800/70 rounded-2xl p-8 text-center shadow-lg border border-zinc-200 dark:border-zinc-700/50"
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0, rotate: -30 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -30 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5, type: "spring" }}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-zinc-700 dark:text-zinc-300">{value.description}</p>
                </motion.div>
              ))}
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
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-black/80 max-w-xl">
                  Contact our team today to discuss how our logistics solutions can help your business thrive.
                </p>
              </div>
              <Link href="/contact">
                <Button className="bg-black text-white hover:bg-zinc-800 text-lg px-8 py-6 rounded-full">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 