"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden rounded-3xl">
      {/* Blurred background image for the whole section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact_bg.jpg"
          alt="Contact background"
          fill
          className="object-cover w-full h-full scale-105"
          style={{ objectPosition: "center" }}
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Heading and subheading moved outside the card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Get In{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to streamline your logistics operations? Contact us for a personalized consultation.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl rounded-3xl border border-yellow-400/30 overflow-hidden backdrop-blur-md bg-white/5 shadow-2xl"
        >
          {/* Card background image (blurred, subtle) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/contact.jpg"
              alt="Contact card background"
              fill
              className="object-cover w-full h-full blur-md opacity-40"
              style={{ objectPosition: "center" }}
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row">
            {/* Contact Info */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center gap-6">
              {/* Heading and subheading removed from here */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300 text-sm">(07) 5438 8888</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300 text-sm">info@sunshinecoastlogistics.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-300 text-sm">Sunshine Coast, Queensland, Australia</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center bg-black/30 rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-white text-sm font-medium mb-1 block">Name *</label>
                    <Input
                      placeholder="Your full name"
                      className="bg-white/10 border-yellow-400/30 text-white placeholder:text-gray-400 focus:border-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-1 block">Company</label>
                    <Input
                      placeholder="Company name"
                      className="bg-white/10 border-yellow-400/30 text-white placeholder:text-gray-400 focus:border-yellow-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-1 block">Email *</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-white/10 border-yellow-400/30 text-white placeholder:text-gray-400 focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-1 block">Phone</label>
                  <Input
                    placeholder="(07) 0000-00-00"
                    className="bg-white/10 border-yellow-400/30 text-white placeholder:text-gray-400 focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-1 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your logistics needs..."
                    rows={3}
                    className="bg-white/10 border-yellow-400/30 text-white placeholder:text-gray-400 focus:border-yellow-400 resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 rounded-full py-3">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
