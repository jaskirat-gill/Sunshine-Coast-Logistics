"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Join Us", href: "/join" },
    { name: "Services", href: "/services" },
    { name: "Equipment", href: "/equipment" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ]

  return (
      <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-yellow-400/20"
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo & Tagline */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
            <Image
                src="/logo.webp"
                alt="Logo"
                width={120}
                height={120}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2" aria-label="Main navigation">
            {navItems.map((item, index) => (
                <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10"
                    whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.a>
            ))}
          </nav>

          {/* Desktop Social Links & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex space-x-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white hover:bg-white/10 transition-colors"
                  aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="backdrop-blur-md bg-white/10 border-l border-yellow-400/20 shadow-2xl p-0"
            >
              <div className="flex flex-col h-full">
                {/* Header with logo and title */}
                <div className="flex justify-between items-center p-6 border-b border-yellow-400/20">
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
                      className="text-white hover:bg-white/10 rounded-full"
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
                          <motion.a
                              key={item.name}
                              href={item.href}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ delay: index * 0.05, duration: 0.3 }}
                              className="text-white py-4 px-4 hover:bg-white/20 rounded-lg transition-all duration-200 text-lg font-medium flex items-center"
                              onClick={() => setIsOpen(false)}
                              whileHover={{ x: 5 }}
                          >
                            {item.name}
                          </motion.a>
                      ))}
                    </nav>
                  </AnimatePresence>
                </div>

                {/* Social Links (Mobile) */}
                <div className="flex justify-center space-x-4 mb-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                {/* Bottom section with CTA */}
                <div className="p-6 border-t border-yellow-400/20 backdrop-blur-md bg-white/10">
                  <Link href="/contact">
                    <Button
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 w-full py-6 text-lg font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* Subtle divider for clarity */}
        <div className="w-full h-px bg-yellow-400/10" />
      </motion.header>
  )
}