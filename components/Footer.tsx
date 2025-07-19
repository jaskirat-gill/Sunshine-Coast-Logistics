"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUp, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
    const navItems = [
        { name: "Home", href: "/home" },
        { name: "About", href: "/about" },
        { name: "Join Us", href: "/join" },
        { name: "Services", href: "/services" },
        { name: "Equipment", href: "/equipment" },
        { name: "Contact Us", href: "/contact" },
    ]

    const socialLinks = [
        { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
        { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    ]

    return (
        <footer className="relative bg-black border-t border-yellow-400/20 rounded-t-3xl overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-0 rounded-t-3xl backdrop-blur-md bg-white/10" />
            <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Logo & Description */}
                <div className="flex flex-col items-center md:items-start space-y-3 mb-8 md:mb-0 max-w-xs">
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/logo.webp"
                            alt="Logo"
                            width={60}
                            height={60}
                            className="rounded-lg"
                        />
                        <span className="text-xl font-bold text-white">Sunshine Coast Logistics</span>
                    </div>
                    <p className="text-gray-300 text-sm text-center md:text-left">
                        Reliable, fast, and secure logistics solutions across North America. Your trusted partner for expedited shipping and freight services.
                    </p>
                    {/* Social Links */}
                    <div className="flex space-x-4 mt-2">
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
                </div>
                {/* Navigation */}
                <nav className="flex flex-wrap gap-4 justify-center" aria-label="Footer navigation">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-white/20"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Copyright Card */}
            <div className="relative z-10 max-w-1/3 mx-auto mb-6">
                <div className="backdrop-blur-md bg-white/10 border border-yellow-400/20 rounded-2xl px-6 py-3 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 Sunshine Coast Logistics. All rights reserved. Developed By{" "}
                        <Link href="https://jaskiratgill.ca" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline inline">
                            Jaskirat Gill
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}