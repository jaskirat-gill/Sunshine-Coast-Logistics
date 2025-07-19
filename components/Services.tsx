"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Truck, Gavel, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: "Transport Tenders",
      features: [
        "Budget control and execution in TMS",
        "Powerful analytical module",
        "Single end-to-end procurement process",
        "Independence of decisions made",
        "Work only with verified carriers",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Gavel,
      title: "Spot Auctions",
      features: [
        "Replace email and messengers",
        "All organization trades in one window",
        "Close hot trips in a couple of clicks",
        "Clear control of participant circle",
        "Different types of auctions for any situation",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive logistics solutions designed to streamline your transportation operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-md bg-white/5 border border-yellow-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mr-4">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-300 flex items-start"
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full max-w-xs rounded-2xl"
                    width={400}
                    height={300}
                  />
                </div>
              </div>

              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 rounded-full px-6">
                Try Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
