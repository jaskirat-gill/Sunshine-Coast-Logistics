"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import ReCAPTCHA from "react-google-recaptcha"
import { WordPressImage } from "@/components/ui/wordpress-image"
import { AnimatedButton } from "@/components/ui/button"
import { ArrowRight, Check, ChevronDown, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MASTER_DATA } from "@/lib/data"
import { Background } from "@/components/ui/background"

export default function JoinUs() {
  const containerRef = useRef<HTMLElement>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  const [activePosition, setActivePosition] = useState<number | null>(null)
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: ""
  })
  
  // File state
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState("")
  
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
  
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  const togglePosition = (index: number) => {
    if (activePosition === index) {
      setActivePosition(null)
    } else {
      setActivePosition(index)
    }
  }

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

  // Handle file upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        setSubmitStatus({
          type: 'error',
          message: 'Please upload a PDF, DOC, or DOCX file.'
        })
        return
      }
      
      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus({
          type: 'error',
          message: 'File size must be less than 5MB.'
        })
        return
      }
      
      setResumeFile(file)
      setFileName(file.name)
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
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !resumeFile) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields and upload your resume.'
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
      // Convert file to base64
      const reader = new FileReader()
      reader.onload = async () => {
        const base64 = (reader.result as string).split(',')[1]
        
        const response = await fetch('/api/job-application', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            coverLetter: formData.coverLetter.trim() || undefined,
            resumeBase64: base64,
            resumeFileName: fileName,
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
            email: "",
            phone: "",
            coverLetter: ""
          })
          setResumeFile(null)
          setFileName("")
          // Reset reCAPTCHA
          recaptchaRef.current?.reset()
          setRecaptchaToken(null)
          // Reset file input
          if (fileInputRef.current) {
            fileInputRef.current.value = ""
          }
        } else {
          setSubmitStatus({
            type: 'error',
            message: result.message
          })
          // Reset reCAPTCHA on error
          recaptchaRef.current?.reset()
          setRecaptchaToken(null)
        }
      }
      
      reader.readAsDataURL(resumeFile)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred while submitting your application. Please try again or contact us directly.'
      })
      // Reset reCAPTCHA on error
      recaptchaRef.current?.reset()
      setRecaptchaToken(null)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main ref={containerRef} className="pt-32 pb-20 relative overflow-hidden">
      <Background />
      
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
              <WordPressImage
                slug="home-about"
                alt="Our team at work"
                width={1200}
                height={800}
                className="object-cover w-full h-full"
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
                className="text-3xl pb-2 md:text-4xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent"
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
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
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
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
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
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="space-y-2"
                >
                  <label className="text-zinc-900 dark:text-white text-sm font-medium block">
                    Cover Letter / Additional Information
                  </label>
                  <Textarea 
                    placeholder="Tell us about your experience and why you're interested in joining our team..."
                    rows={5}
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                    className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-yellow-400 focus:ring-yellow-400 resize-none"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
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
                        {fileName && (
                          <p className="text-xs text-yellow-600 mt-2">Selected: {fileName}</p>
                        )}
                      </div>
                      <input 
                        ref={fileInputRef}
                        type="file" 
                        className="hidden" 
                        accept=".pdf,.doc,.docx" 
                        required 
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </motion.div>
                
                {/* reCAPTCHA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex justify-center"
                >
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
                    onChange={handleRecaptchaChange}
                    theme="light"
                    size="normal"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <AnimatedButton 
                    variant="primary" 
                    className="w-full text-black py-6 text-lg"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
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