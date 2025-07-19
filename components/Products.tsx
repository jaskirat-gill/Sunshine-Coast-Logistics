"use client"

import { motion } from "framer-motion"
import { Gavel, Truck, Settings, MapPin } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Products() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    // Create map background
    const container = mapRef.current
    container.innerHTML = ''

    // Create the map SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('width', '100%')
    svg.setAttribute('height', '100%')
    svg.setAttribute('viewBox', '0 0 1000 500')
    svg.style.position = 'absolute'
    svg.style.top = '0'
    svg.style.left = '0'

    // Add world map path with light teal color
    const worldMap = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    worldMap.setAttribute('d', 'M156,210 Q200,180 250,200 T350,190 T450,210 T550,190 T650,200 T750,210 Q850,230 844,270 Q830,350 750,330 T650,310 T550,330 T450,310 T350,330 T250,310 Q200,300 156,270 Z M200,270 Q250,260 300,270 T400,290 T500,270 T600,290 T700,270 Q750,260 800,270 Q710,340 650,330 T550,310 T450,330 T350,310 T250,330 Q200,340 200,270 Z')
    worldMap.setAttribute('fill', '#5BD4C0')
    worldMap.setAttribute('opacity', '0.3')
    svg.appendChild(worldMap)

    // Add location markers
    const markerLocations = [
      { x: 250, y: 230 }, // North America
      { x: 450, y: 240 }, // Europe
      { x: 650, y: 260 }, // Asia
      { x: 350, y: 330 }, // South America
      { x: 550, y: 320 }  // Africa
    ]

    markerLocations.forEach((loc) => {
      // Marker pin group
      const markerGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')

      // Pin circle
      const pinCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      pinCircle.setAttribute('cx', loc.x.toString())
      pinCircle.setAttribute('cy', loc.y.toString())
      pinCircle.setAttribute('r', '8')
      pinCircle.setAttribute('fill', '#4CAF50')
      pinCircle.setAttribute('stroke', '#ffffff')
      pinCircle.setAttribute('stroke-width', '2')
      markerGroup.appendChild(pinCircle)

      // Create ripple effect
      const ripple = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      ripple.setAttribute('cx', loc.x.toString())
      ripple.setAttribute('cy', loc.y.toString())
      ripple.setAttribute('r', '5')
      ripple.setAttribute('fill', 'none')
      ripple.setAttribute('stroke', '#4CAF50')
      ripple.setAttribute('stroke-width', '2')
      ripple.setAttribute('opacity', '0.6')

      // Animate ripple
      const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
      animate.setAttribute('attributeName', 'r')
      animate.setAttribute('from', '5')
      animate.setAttribute('to', '15')
      animate.setAttribute('dur', '2s')
      animate.setAttribute('repeatCount', 'indefinite')
      ripple.appendChild(animate)

      // Fade out animation
      const animateOpacity = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
      animateOpacity.setAttribute('attributeName', 'opacity')
      animateOpacity.setAttribute('from', '0.6')
      animateOpacity.setAttribute('to', '0')
      animateOpacity.setAttribute('dur', '2s')
      animateOpacity.setAttribute('repeatCount', 'indefinite')
      ripple.appendChild(animateOpacity)

      markerGroup.appendChild(ripple)
      svg.appendChild(markerGroup)
    })

    container.appendChild(svg)

    // Add truck image
    const truck = document.createElement('img')
    truck.src = '/truck.png'  // You'll need to add this image to your project
    truck.alt = 'Logistics Truck'
    truck.style.position = 'absolute'
    truck.style.bottom = '0'
    truck.style.right = '0'
    truck.style.width = '300px'
    truck.style.height = 'auto'
    truck.style.zIndex = '10'
    container.appendChild(truck)

    // Make the map responsive
    const resizeObserver = new ResizeObserver(() => {
      const containerHeight = container.clientHeight
      const containerWidth = container.clientWidth
      svg.setAttribute('viewBox', `0 0 ${containerWidth} ${containerHeight}`)
    })

    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

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
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 text-center">Global Logistics Network</h3>
              <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                Our platform connects carriers and shippers worldwide, providing seamless logistics solutions across
                continents.
              </p>
              <div
                  ref={mapRef}
                  className="relative min-h-[400px] rounded-2xl bg-black/20 backdrop-blur-md overflow-hidden"
              />
            </div>
          </motion.div>
        </div>
      </section>
  )
}