"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUp, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Equipment", href: "/equipment" },
        { name: "Contact", href: "/contact" },
    ]

    const socialLinks = [
        { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
        { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    ]

    const contactInfo = [
        { icon: Phone, info: "+1 (555) 123-4567", href: "tel:+15551234567" },
        { icon: Mail, info: "info@sunshinecoastlogistics.com", href: "mailto:info@sunshinecoastlogistics.com" },
        { icon: MapPin, info: "123 Logistics Way, Sunshine Coast, BC", href: "https://maps.google.com" },
    ]

    return (
        <footer className="relative bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 overflow-hidden mt-auto">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none" 
                 style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
            
            {/* Main footer content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div className="col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                            <Image
                                src="/logo.webp"
                                alt="Logo"
                                width={40}
                                height={40}
                                className="rounded-lg"
                            />
                            <span className="text-lg font-bold bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
                                Sunshine Coast Logistics
                            </span>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
                            Reliable, fast, and secure logistics solutions across North America. We connect businesses with efficient transportation services.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="text-zinc-500 hover:text-yellow-500 transition-colors w-8 h-8 flex items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-zinc-900 dark:text-white font-bold mb-4">Quick Links</h3>
                        <nav className="flex flex-col space-y-2" aria-label="Footer navigation">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-zinc-600 dark:text-zinc-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300 text-sm"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Information */}
                    <div className="col-span-1">
                        <h3 className="text-zinc-900 dark:text-white font-bold mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            {contactInfo.map((item, index) => (
                                <a 
                                    key={index} 
                                    href={item.href}
                                    className="flex items-start space-x-3 text-zinc-600 dark:text-zinc-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors group"
                                >
                                    <div className="w-5 h-5 mt-0.5 text-yellow-500 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-full h-full" />
                                    </div>
                                    <span className="text-sm">{item.info}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter or CTA */}
                    <div className="col-span-1">
                        <h3 className="text-zinc-900 dark:text-white font-bold mb-4">Get a Quote</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                            Ready to streamline your logistics? Contact us today for a customized shipping solution.
                        </p>
                        <Link href="/contact" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full text-sm font-medium hover:from-yellow-500 hover:to-yellow-700 transition-colors">
                            Request a Quote
                            <ArrowUp className="ml-2 h-4 w-4 rotate-45" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-zinc-200 dark:border-zinc-800">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs">
                        © 2025 Sunshine Coast Logistics. All rights reserved.
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs">
                        Developed By{" "}
                        <Link href="https://jaskiratgill.ca" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
                            Jaskirat Gill
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}