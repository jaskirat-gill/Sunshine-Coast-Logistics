"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  const isFormInView = useInView(formRef, { once: false, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, 100])
  
  const formFields = [
    { label: "Name", placeholder: "Your full name", required: true, type: "text", half: true },
    { label: "Company", placeholder: "Company name (optional)", required: false, type: "text", half: true },
    { label: "Email", placeholder: "your.email@example.com", required: true, type: "email", half: false },
    { label: "Phone", placeholder: "(555) 123-4567", required: false, type: "tel", half: false },
  ]

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden min-h-screen">
      {/* Light background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -z-5" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -z-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ opacity, y }}
          className="max-w-5xl mx-auto"
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-zinc-700 dark:text-zinc-300 text-xl max-w-2xl mx-auto">
              Ready to streamline your logistics operations? Contact us for a personalized consultation.
            </p>
          </motion.div>
          
          {/* Contact card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-zinc-800/50 rounded-3xl p-8 shadow-xl border border-zinc-200 dark:border-zinc-700/50 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-zinc-900 dark:text-white font-medium mb-1">Phone</p>
                    <p className="text-zinc-600 dark:text-zinc-300">+1 (555) 123-4567</p>
                    <p className="text-zinc-600 dark:text-zinc-300">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-zinc-900 dark:text-white font-medium mb-1">Email</p>
                    <p className="text-zinc-600 dark:text-zinc-300">info@sunshinecoastlogistics.com</p>
                    <p className="text-zinc-600 dark:text-zinc-300">support@sunshinecoastlogistics.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-zinc-900 dark:text-white font-medium mb-1">Address</p>
                    <p className="text-zinc-600 dark:text-zinc-300">123 Logistics Way</p>
                    <p className="text-zinc-600 dark:text-zinc-300">Sunshine Coast, BC V8X 1Z3</p>
                    <p className="text-zinc-600 dark:text-zinc-300">Canada</p>
                  </div>
                </div>
              </div>
              
              {/* Map or image */}
              <div className="mt-8 relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/map_background.jpg"
                  alt="Office location map"
                  fill
                  className="object-cover"
                />
              
              </div>
            </motion.div>
            
            {/* Contact form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-zinc-800/50 rounded-3xl p-8 shadow-xl border border-zinc-200 dark:border-zinc-700/50 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Send us a message</h2>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {formFields.map((field, index) => (
                    field.half ? (
                      <div key={index} className="space-y-2">
                        <label className="text-zinc-900 dark:text-white text-sm font-medium block">
                          {field.label} {field.required && <span className="text-yellow-600">*</span>}
                        </label>
                        <Input
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-yellow-400 focus:ring-yellow-400"
                        />
                      </div>
                    ) : (
                      <div key={index} className="space-y-2 md:col-span-2">
                        <label className="text-zinc-900 dark:text-white text-sm font-medium block">
                          {field.label} {field.required && <span className="text-yellow-600">*</span>}
                        </label>
                        <Input
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-yellow-400 focus:ring-yellow-400"
                        />
                      </div>
                    )
                  ))}
                </div>
                
                <div className="space-y-2">
                  <label className="text-zinc-900 dark:text-white text-sm font-medium block">
                    Message <span className="text-yellow-600">*</span>
                  </label>
                  <Textarea
                    placeholder="Tell us about your logistics needs..."
                    required
                    rows={5}
                    className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-yellow-400 focus:ring-yellow-400 resize-none"
                  />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 rounded-full py-6 text-lg">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
