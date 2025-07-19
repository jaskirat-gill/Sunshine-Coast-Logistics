"use client"

import { motion } from "framer-motion"
import { Award, Clock, Globe, Shield } from "lucide-react"
import Image from "next/image"

export default function About() {
  const features = [
    {
      icon: Award,
      title: "Industry Excellence",
      description: "Over 20 years of experience in logistics and transportation management",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support and real-time shipment monitoring",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Extensive network covering major shipping routes worldwide",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Advanced security measures and reliable service delivery",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Sunshine Coast Logistics
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a leading logistics platform connecting shippers and carriers across the Sunshine Coast and beyond.
              Our digital ecosystem provides comprehensive solutions for modern transportation challenges.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              From transport tenders to real-time cargo tracking, we leverage cutting-edge technology to streamline
              logistics operations and deliver exceptional value to our clients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="backdrop-blur-md bg-white/5 border border-yellow-400/20 rounded-3xl p-8">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Modern logistics operations"
                className="w-full h-auto rounded-2xl"
                width={600}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
