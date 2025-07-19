"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Package, Shield } from "lucide-react"

export default function Hero() {
  const stats = [
    { icon: Users, label: "Over 1,000", sublabel: "businesses working with us", delay: 0.2 },
    { icon: Package, label: "Over 100,000", sublabel: "shipments per year", delay: 0.4 },
    { icon: Shield, label: "Your security", sublabel: "prioritized", delay: 0.6 },
  ]

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/60 z-10" />
          <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
          >
            <source src="/hero_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
          >
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              North America's
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Expedite Experts
            </span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 text-lg px-8 py-4 rounded-full"
              >
                Read More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + stat.delay, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="backdrop-blur-md bg-white/10 border border-yellow-400/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{stat.label}</h3>
                  <p className="text-gray-300">{stat.sublabel}</p>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  )
}