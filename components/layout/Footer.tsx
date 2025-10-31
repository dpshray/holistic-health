"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import TextInputField from "../fields/text-input"
import { IoLogoFacebook } from "react-icons/io"
import { FaInstagram } from "react-icons/fa"
import Link from "next/link"
import { FaXTwitter } from "react-icons/fa6"
import { IconType } from "react-icons/lib"

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface SocialLink {
  href: string
  icon: IconType
}

export default function Footer() {
    const customerServiceLinks: FooterLink[] = [
        { label: "Contact Us", href: "#" },
        { label: "Order Tracking", href: "#" },
        { label: "Returns", href: "#" },
        { label: "FAQs", href: "#" },
    ]

    const aboutUsLinks: FooterLink[] = [
        { label: "Who We Are", href: "#" },
        { label: "Sustainability", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
    ]

    const footerSections: FooterSection[] = [
        { title: "Customer Service", links: customerServiceLinks },
        { title: "About Us", links: aboutUsLinks },
    ]

    const socialLinks: SocialLink[] = [
        { href: "#", icon: IoLogoFacebook },
        { href: "#", icon: FaInstagram },
        { href: "#", icon: FaXTwitter },
    ]

    return (
        <footer className="bg-[#202020] text-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo and tagline */}
                <div>
                    <Link href="/" className="mb-4 inline-block">
                        <Image
                            src="/images/logo2.jpg"
                            alt="Holistic Health Care"
                            width={140}
                            height={60}
                        />
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Delivering trusted medical products and solutions with care and commitment.
                    </p>
                </div>

               {footerSections.map((section) => (
                    <div key={section.title}>
                        <h4 className="font-semibold mb-4">{section.title}</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {section.links.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Social + Newsletter */}
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        {socialLinks.map((social, idx) => {
                            const Icon = social.icon
                            return (
                                <Link key={idx} href={social.href} className="hover:text-[#ccc]">
                                    <Icon size={18} />
                                </Link>
                            )
                        })}
                    </div>
                    <div className="flex flex-col gap-2">
                        <TextInputField
                            type="email"
                            placeholder="Email Address"
                            className="bg-transparent border-gray-600 text-white placeholder-gray-400"
                        />
                        <Button
                            variant="default"
                            className="w-fit bg-white text-black hover:bg-gray-300 rounded-none"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
