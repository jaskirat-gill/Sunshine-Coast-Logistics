"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Equipment", href: "/equipment" },
    { name: "Join Us", href: "/join" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ]

  return (
    <>
      {/* Top contact bar - moved outside the motion.header */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/20 dark:border-zinc-700/20 bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-zinc-700 dark:text-zinc-300">
              <Phone className="w-4 h-4 mr-2 text-yellow-500" />
              <span className="hidden sm:inline">604-417-3505</span>
              <a href="tel:+16044173505" className="sm:hidden">Call</a>
            </div>
            <div className="flex items-center text-zinc-700 dark:text-zinc-300">
              <Mail className="w-4 h-4 mr-2 text-yellow-500" />
              <span className="hidden sm:inline">altaf@sunshinecoastlogistics.com</span>
              <a href="mailto:altaf@sunshinecoastlogistics.com" className="sm:hidden">Email</a>
            </div>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-zinc-500 hover:text-yellow-500 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main navigation header - positioned below the contact bar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-140 transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg shadow-md py-2 top-0" 
            : "bg-transparent py-4 top-8 sm:top-10"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo & Tagline */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="flex items-center space-x-3"
          >
            <Link href="/">
              <div className="relative h-10 w-32">
                <Image
                  src="/logo.webp"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link 
                  href={item.href}
                  className={`relative px-3 py-2 rounded-lg font-medium text-sm group ${
                    scrolled 
                      ? "text-zinc-800 hover:text-yellow-600 dark:text-zinc-200 dark:hover:text-yellow-400" 
                      : "text-zinc-100 hover:text-yellow-400"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 text-lg px-8 py-6 rounded-full relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/0 via-black/10 to-black/0 group-hover:animate-shimmer" />
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-yellow-600 to-yellow-800 group-hover:w-full transition-all duration-500 ease-out rounded-full" />
              <span className="relative z-10 flex items-center transition-all duration-300">
                <Link href="/contact" className="relative inline-block text-white font-semibold group-hover:text-white transition-colors duration-300">
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/50 group-hover:bg-white/50 group-hover:w-full transition-all duration-300" />
                </Link>
              </span>
              <span className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-20 bg-white blur-md group-hover:animate-pulse transition-all duration-500"></span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors rounded-full"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl p-0"
            >
              <div className="flex flex-col h-full">
                {/* Header with logo and title */}
                <div className="flex justify-between items-center p-6 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/logo.webp"
                      alt="Logo"
                      width={36}
                      height={36}
                      className="rounded-lg"
                    />
                    <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                      Menu
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto py-6 px-6">
                  <AnimatePresence>
                    <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                        >
                          <Link
                            href={item.href}
                            className="text-zinc-900 dark:text-white py-4 px-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-all duration-200 text-lg font-medium flex items-center"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </nav>
                  </AnimatePresence>

                  {/* Contact info */}
                  <div className="mt-8 space-y-4 px-4">
                    <div className="flex items-center text-zinc-700 dark:text-zinc-300">
                      <Phone className="w-5 h-5 mr-3 text-yellow-500" />
                      <span>604-417-3505</span>
                    </div>
                    <div className="flex items-center text-zinc-700 dark:text-zinc-300">
                      <Mail className="w-5 h-5 mr-3 text-yellow-500" />
                      <span>altaf@sunshinecoastlogistics.com</span>
                    </div>
                  </div>
                </div>

                {/* Social Links (Mobile) */}
                <div className="flex justify-center space-x-6 mb-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-zinc-500 hover:text-yellow-500 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                {/* Bottom section with CTA */}
                <div className="p-6 border-t border-zinc-200 dark:border-zinc-800">
                <Button
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 text-lg px-8 py-6 rounded-full relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/0 via-black/10 to-black/0 group-hover:animate-shimmer" />
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-yellow-600 to-yellow-800 group-hover:w-full transition-all duration-500 ease-out rounded-full" />
              <span className="relative z-10 flex items-center transition-all duration-300">
                <Link href="/contact" className="relative inline-block text-white font-semibold group-hover:text-white transition-colors duration-300">
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/50 group-hover:bg-white/50 group-hover:w-full transition-all duration-300" />
                </Link>
              </span>
              <span className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-20 bg-white blur-md group-hover:animate-pulse transition-all duration-500"></span>
            </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </>
  )
}