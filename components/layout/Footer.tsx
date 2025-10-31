"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import TextInputField from "../fields/text-input"
import { IoLogoFacebook } from "react-icons/io"
import { FaInstagram } from "react-icons/fa"
import Link from "next/link"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
    return (
        <footer className="bg-[#202020] text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo and tagline */}
                <div>
                    <div className="mb-4">
                        <Image
                            src="/images/logo2.jpg"
                            alt="Holistic Health Care"
                            width={140}
                            height={60}
                        />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Delivering trusted medical products and solutions with care and commitment.
                    </p>
                </div>

                {/* Customer Service */}
                <div>
                    <h4 className="font-semibold mb-4">Customer Service</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Order Tracking
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Returns
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                FAQs
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* About Us */}
                <div>
                    <h4 className="font-semibold mb-4">About Us</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Who We Are
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Sustainability
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Press
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social + Newsletter */}
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <Link href="#" className="hover:text-[#ccc]">
                            <IoLogoFacebook  size={18} />
                        </Link>
                        <Link href="#" className="hover:text-[#ccc]">
                            <FaInstagram  size={18} />
                        </Link>
                        <Link href="#" className="hover:text-[#ccc]">
                            <FaXTwitter  size={18} />
                        </Link>
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
