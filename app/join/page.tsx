"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { AnimatedButton } from "@/components/ui/button"
import { ArrowRight, Check, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MASTER_DATA } from "@/lib/data"

export default function JoinUs() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  const [activePosition, setActivePosition] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  const togglePosition = (index: number) => {
    if (activePosition === index) {
      setActivePosition(null)
    } else {
      setActivePosition(index)
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
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
              Build your career with a company that values your contribution
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Why join us section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/home_about_image.jpg" // Replace with a team/workplace image
                alt="Our team at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
              
              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                >
                  Why Join Us?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-white/90"
                >
                  Be part of a team that values safety, innovation, and growth
                </motion.p>
              </div>
            </motion.div>
            
            {/* Benefits side */}
            <motion.div
              style={{ opacity, y }}
              className="space-y-6"
            >
              {MASTER_DATA.join_page.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="flex gap-4 items-start bg-white dark:bg-zinc-800/50 p-6 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-700/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{benefit.title}</h3>
                    <p className="text-zinc-700 dark:text-zinc-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Open positions section */}
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
              className="text-3xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent"
            >
              Open Positions
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto text-center mb-16"
            >
              Join our growing team and build your career in logistics
            </motion.p>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {MASTER_DATA.join_page.positions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="bg-white dark:bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-700/50"
                >
                  {/* Position header */}
                  <div 
                    className="flex items-center justify-between p-6 cursor-pointer"
                    onClick={() => togglePosition(index)}
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{position.title}</h3>
                      <div className="flex items-center gap-4">
                        <span className="text-zinc-600 dark:text-zinc-400">{position.location}</span>
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded-full text-sm">{position.type}</span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: activePosition === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 bg-zinc-100 dark:bg-zinc-700 rounded-full flex items-center justify-center"
                    >
                      <ChevronDown className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                    </motion.div>
                  </div>
                  
                  {/* Position details */}
                  <AnimatePresence>
                    {activePosition === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-zinc-200 dark:border-zinc-700 pt-6">
                            <p className="text-zinc-700 dark:text-zinc-300 mb-6">{position.description}</p>
                            
                            <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">Requirements:</h4>
                            <ul className="space-y-2 mb-6">
                              {position.requirements.map((req, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1, duration: 0.5 }}
                                  className="flex items-start text-zinc-700 dark:text-zinc-300"
                                >
                                  <Check className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                                  {req}
                                </motion.li>
                              ))}
                            </ul>
                            
                            <Link href="#application-form">
                              <AnimatedButton 
                                variant="primary" 
                                className="text-black"
                              >
                                Apply Now
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </AnimatedButton>
                            </Link>
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
      
      {/* Application form */}
      <section id="application-form" className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white dark:bg-zinc-800/50 rounded-3xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-700/50"
          >
            <div className="p-8 md:p-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent"
              >
                Apply Now
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-zinc-700 dark:text-zinc-300 mb-8"
              >
                Fill out the form below to apply for a position with our team
              </motion.p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-2"
                  >
                    <label className="text-zinc-900 dark:text-white text-sm font-medium block">
                      Full Name <span className="text-yellow-600">*</span>
                    </label>
                    <Input 
                      required
                      placeholder="Your full name"
                      className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-2"
                  >
                    <label className="text-zinc-900 dark:text-white text-sm font-medium block">
                      Email Address <span className="text-yellow-600">*</span>
                    </label>
                    <Input 
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="space-y-2"
                  >
                    <label className="text-zinc-900 dark:text-white text-sm font-medium block">
                      Phone Number <span className="text-yellow-600">*</span>
                    </label>
                    <Input 
                      type="tel"
                      required
                      placeholder="(555) 123-4567"
                      className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="space-y-2"
                  >
                    <label className="text-zinc-900 dark:text-white text-sm font-medium block">
                      Position Applying For <span className="text-yellow-600">*</span>
                    </label>
                    <select 
                      required
                      className="w-full h-10 px-3 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-zinc-900 dark:text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    >
                      <option value="">Select a position</option>
                      {MASTER_DATA.join_page.positions.map((position, index) => (
                        <option key={index} value={position.title}>{position.title}</option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="space-y-2"
                >
                  <label className="text-zinc-900 dark:text-white text-sm font-medium block">
                    Cover Letter / Additional Information
                  </label>
                  <Textarea 
                    placeholder="Tell us about your experience and why you're interested in joining our team..."
                    rows={5}
                    className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-yellow-400 focus:ring-yellow-400 resize-none"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="space-y-2"
                >
                  <label className="text-zinc-900 dark:text-white text-sm font-medium block">
                    Resume/CV <span className="text-yellow-600">*</span>
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-3 text-zinc-500 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">PDF, DOC, or DOCX (MAX. 5MB)</p>
                      </div>
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx" required />
                    </label>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <AnimatedButton 
                    variant="primary" 
                    className="w-full text-black py-6 text-lg"
                  >
                    Submit Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </AnimatedButton>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 