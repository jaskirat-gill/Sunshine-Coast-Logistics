"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Truck, Boxes, Send, Repeat } from "lucide-react"

export default function Products() {
  const services = [
    {
      icon: Truck,
      title: "FTL (Full Truck Load)",
      description:
        "We provide reliable pick-ups and deliveries, competitive rates, and courteous customer service for Full Truck Load freight. Whether Flatbed, Dry Van, one skid or half a trailer, Sunshine Coast Logistics has you covered from coast to coast.",
      image: "/home_services_1.jpg", // Suggestion: photo of a full truck on a highway
    },
    {
      icon: Boxes,
      title: "LTL (Less Than Truck Load)",
      description:
        "Not every shipment requires a full trailer. Our team offers reliable pick-ups and deliveries for Less Than Truck Load freight, ensuring flexibility and efficiency.",
      image: "/home_services_2.jpg", // Suggestion: photo of a full truck on a highway
    },
    {
      icon: Send,
      title: "Easy Shipping",
      description:
        "We’re dedicated to Shipping Made Easy and will work with you to ensure that all of your freight is handled smoothly and efficiently.",
      image: "/home_services_3.jpg", // Suggestion: photo of a full truck on a highway
    },
    {
      icon: Repeat,
      title: "Dedicated Services",
      description:
        "We understand the supply chain process and the ever-growing need to adapt to customer expectations. Our dedicated services ensure your logistics needs are always met.",
      image: "/home_services_4.jpg", // Suggestion: photo of a full truck on a highway
    },
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden rounded-3xl">
      {/* Blurred background image suggestion: /services_bg.jpg (add a logistics/transportation themed image) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home_background_services.jpg"
          alt="Logistics background"
          fill
          className="object-cover w-full h-full blur-lg scale-105"
          style={{ objectPosition: "center" }}
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
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
            Reliable, flexible, and customer-focused logistics solutions for every shipping need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="relative rounded-3xl overflow-hidden border border-yellow-400/20 bg-white/5 backdrop-blur-md shadow-xl flex flex-col md:flex-row items-stretch"
            >
              {/* Service image suggestion */}
              <div className="relative w-full md:w-1/3 min-h-[180px] md:min-h-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover w-full h-full"
                  style={{ objectPosition: "center" }}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              {/* Service content */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 text-lg">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* World Map Section (unchanged) */}
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
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.8) 100%), url('/map_background.jpg')`,
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
                className="absolute inset-0 w-full h-full object-contain opacity-90 pointer-events-none select-none"
                style={{ zIndex: 1 }}
                draggable={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
