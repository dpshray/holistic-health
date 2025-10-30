"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Partners", href: "/partners" },
        { name: "Categories", href: "/categories" },
    ]

    return (
        <header className="sticky top-0 z-50 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Image
                            src="/images/logo.jpg"
                            alt="HealthCare Logo"
                            width={170}            
                            height={80}           
                            priority               
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const isActive =
                                pathname === item.href ||
                                (item.href !== "/" && pathname.startsWith(item.href))
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-md font-medium transition-colors ${
                                        isActive
                                            ? "text-[#01ABBB]"
                                            : "text-gray-700 hover:text-[#01ABBB]"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:block">
                        <Button variant="green" className="rounded-full"> Contact Us</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <nav className="md:hidden pb-4 space-y-2">
                        {navItems.map((item) => {
                            const isActive =
                                pathname === item.href ||
                                (item.href !== "/" && pathname.startsWith(item.href))
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`block text-sm font-medium transition-colors py-2 ${
                                        isActive
                                            ? "text-[#01ABBB]"
                                            : "text-gray-700 hover:text-[#01ABBB]"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                        <Button variant="green" className="w-full mt-4">
                            Contact Us
                        </Button>
                    </nav>
                )}
            </div>
        </header>
    )
}
