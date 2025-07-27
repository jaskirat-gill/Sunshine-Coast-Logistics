"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import ReCAPTCHA from "react-google-recaptcha"
import { AnimatedButton } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { WordPressImage } from "@/components/ui/wordpress-image"
import { MASTER_DATA } from "@/lib/data"

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  const isFormInView = useInView(formRef, { once: false, margin: "-100px" })
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  })
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: "" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, 100])
  
  // Handle form input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear status when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" })
    }
  }
  
  // Handle reCAPTCHA change
  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" })
    }
  }
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      })
      return
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      })
      return
    }
    
    // Validate reCAPTCHA
    if (!recaptchaToken) {
      setSubmitStatus({
        type: 'error',
        message: 'Please complete the reCAPTCHA verification.'
      })
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          company: formData.company.trim() || undefined,
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          message: formData.message.trim(),
          recaptchaToken
        })
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        })
        // Reset form on success
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: ""
        })
        // Reset reCAPTCHA
        recaptchaRef.current?.reset()
        setRecaptchaToken(null)
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message
        })
        // Reset reCAPTCHA on error
        recaptchaRef.current?.reset()
        setRecaptchaToken(null)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred while submitting the form. Please try again or contact us directly.'
      })
      // Reset reCAPTCHA on error
      recaptchaRef.current?.reset()
      setRecaptchaToken(null)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
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
              {MASTER_DATA.contact_page.tagline}
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
                    <p className="text-zinc-600 dark:text-zinc-300">{MASTER_DATA.contact.phone}</p>
                    <p className="text-zinc-600 dark:text-zinc-300">{MASTER_DATA.contact.cell}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-zinc-900 dark:text-white font-medium mb-1">Email</p>
                    <p className="text-zinc-600 dark:text-zinc-300">{MASTER_DATA.contact.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-zinc-900 dark:text-white font-medium mb-1">Address</p>
                    <p className="text-zinc-600 dark:text-zinc-300">{MASTER_DATA.contact.address}</p>
                  </div>
                </div>
              </div>
              
              {/* Map or image */}
              <div className="mt-8 relative h-48 rounded-xl overflow-hidden">
                <WordPressImage
                  slug="map-background"
                  alt="Office location map"
                  width={800}
                  height={400}
                  className="object-cover w-full h-full"
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
              
              {/* Status message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                      : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  )}
                  <span className={`text-sm font-medium ${
                    submitStatus.type === 'success' 
                      ? 'text-green-800 dark:text-green-200' 
                      : 'text-red-800 dark:text-red-200'
                  }`}>
                    {submitStatus.message}
                  </span>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {MASTER_DATA.contact_page.formFields.map((field, index) => (
                    field.half ? (
                      <div key={index} className="space-y-2">
                        <label className="text-zinc-900 dark:text-white text-sm font-medium block">
                          {field.label} {field.required && <span className="text-yellow-600">*</span>}
                        </label>
                        <Input
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          value={formData[field.label.toLowerCase() as keyof typeof formData] ?? ""}
                          onChange={(e) => handleInputChange(field.label.toLowerCase(), e.target.value)}
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
                          value={formData[field.label.toLowerCase() as keyof typeof formData] ?? ""}
                          onChange={(e) => handleInputChange(field.label.toLowerCase(), e.target.value)}
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
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-yellow-400 focus:ring-yellow-400 resize-none"
                  />
                </div>
                
                {/* reCAPTCHA */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
                    onChange={handleRecaptchaChange}
                    theme="light"
                    size="normal"
                  />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <AnimatedButton 
                    variant="primary"
                    className="w-full text-black"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </AnimatedButton>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
