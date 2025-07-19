"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to streamline your logistics operations? Contact us today for a personalized consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/5 border border-yellow-400/20 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Name *</label>
                  <Input
                    placeholder="Your full name"
                    className="bg-white/10 border-yellow-400/30 text-white placeholder:text-gray-400 focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Company</label>
                  <Input
                    placeholder="Company name"
                    className="bg-white/10 border-yellow-400/30 text-white placeholder:text-gray-400 focus:border-yellow-400"
                  />
                </div>
              </div>
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Email *</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-white/10 border-yellow-400/30 text-white placeholder:text-gray-400 focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Phone</label>
                <Input
                  placeholder="(07) 0000-00-00"
                  className="bg-white/10 border-yellow-400/30 text-white placeholder:text-gray-400 focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Message</label>
                <Textarea
                  placeholder="Tell us about your logistics needs..."
                  rows={4}
                  className="bg-white/10 border-yellow-400/30 text-white placeholder:text-gray-400 focus:border-yellow-400 resize-none"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 rounded-full py-3">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="backdrop-blur-md bg-white/5 border border-yellow-400/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">(07) 5438 8888</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">info@sunshinecoastlogistics.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-300">Sunshine Coast, Queensland, Australia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="backdrop-blur-md bg-white/5 border border-yellow-400/20 rounded-3xl p-8">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Highway with trucks"
                className="w-full h-auto rounded-2xl"
                width={600}
                height={500}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
