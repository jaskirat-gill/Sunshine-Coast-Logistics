"use client"

import { motion } from "framer-motion"
import { Gavel, Truck, Settings, MapPin } from "lucide-react"
import Image from "next/image";

export default function Products() {
  const products = [
    {
      icon: Truck,
      title: "Transport Tenders",
      features: [
        "Process transparency of procurement",
        "Automation of volume distribution",
        "Consolidated reporting",
        "Storage of results and trading history",
      ],
    },
    {
      icon: Gavel,
      title: "Spot Auctions",
      features: [
        "Operational closure of urgent shipments",
        "Three types of auctions: reduction, first price agreement, without starting price",
        "Clear participant circle control",
      ],
    },
    {
      icon: Settings,
      title: "TMS / Transportation Management System",
      features: [
        "Financing and accounting of delivery conditions",
        "Automation of logistics processes",
        "Ability to customize for specific tasks",
      ],
    },
    {
      icon: MapPin,
      title: "Cargo Tracking",
      features: ["All types of tracking:", "• Onboard units", "• GSM communication", "• Mobile application"],
    },
  ]

  return (
      <section id="products" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Platform{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Products
            </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive suite of logistics management tools designed for modern transportation needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="backdrop-blur-md bg-white/5 border border-yellow-400/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mr-4">
                      <product.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                        <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="text-gray-300 flex items-start"
                        >
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                    ))}
                  </ul>
                </motion.div>
            ))}
          </div>

          {/* World Map Section */}
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative backdrop-blur-md bg-white/5 border border-yellow-400/20 rounded-3xl p-8 overflow-hidden"
          >
            {/* Background with map_background on left fading to black on right */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.9) 100%), url('/map_background.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'left center',
                zIndex: 0
              }}
            ></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 text-center">Global Logistics Network</h3>
              <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                Our platform connects carriers and shippers worldwide, providing seamless logistics solutions across
                continents.
              </p>

              {/* World Map with Truck */}
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* World Map SVG fills container */}
                <img
                  src="/world.svg"
                  alt="World Map"
                  className="absolute inset-0 w-full h-full object-contain opacity-80 pointer-events-none select-none"
                  style={{ zIndex: 1 }}
                  draggable={false}
                />
                {/* Truck Illustration - removed map_background from here */}
                <motion.div
                  className="absolute bottom-0 right-0 w-[48rem] h-96 m-0 p-0 flex items-end justify-end"
                  style={{ zIndex: 2 }}
                >
                  {/* Truck image could go here if needed */}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  )
}
