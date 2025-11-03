"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";

interface ImageTextSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  description2?: string;
  buttonLabel?: string;
  buttonLink?: string;
  mainImage: string;
  smallImage?: string;
  imagePosition?: "left" | "right";
  smallImageShift?: "left" | "right";
  tag?: string;
  featureTitle?: string;
  points?: string[];
}

export default function ImageTextSection({
  title,
  subtitle,
  description,
  description2,
  buttonLabel,
  buttonLink = "#",
  mainImage,
  smallImage,
  imagePosition = "left",
  smallImageShift = "left", 
  tag,
  featureTitle,
  points,
}: ImageTextSectionProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={clsx(
            "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
            !isImageLeft && "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
          )}
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src={mainImage}
                fill
                alt="Main section image"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Small Image Overlay */}
            {smallImage && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className={clsx(
                  "absolute -bottom-8 w-40 sm:w-48 h-40 sm:h-48 rounded-lg overflow-hidden shadow-lg border-4 border-white",
                  smallImageShift === "left" ? "-left-2" : "-right-2"
                )}
              >
                <Image
                  src={smallImage}
                  width={200}
                  height={150}
                  alt="Overlay image"
                  className="w-full h-full rounded-lg"
                />
              </motion.div>
            )}
          </motion.div>

          {/* Text Section */}
          <div>
            {tag && (
              <Badge variant="green" className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-2">
                {tag}
              </Badge>
            )}

            <h2 className="text-3xl md:text-4xl font-semibold text-[#12141D] mb-4 leading-tight">
              {title}
              {subtitle && (
                <span className="block text-[#92A7B0] font-normal mt-1">
                  {subtitle}
                </span>
              )}
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed text-lg font-normal">{description}</p>
            {description2 && (
              <p className="text-gray-600 mb-4 leading-relaxed text-xl font-normal">{description2}</p>
            )}

            {/* Feature Points */}
            {featureTitle && (
              <h3 className="text-3xl md:text-4xl font-semibold text-[#12141D] mb-4 leading-tight">
                {featureTitle}
              </h3>
            )}
            {points && points.length > 0 && (
              <ul className="mb-8 space-y-4">
                {points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <span className="flex items-center justify-center w-5 h-5 bg-yellow-500 rounded-full shrink-0">
                      <Check className=" text-white w-3 h-3" />
                    </span>
                    <span className="text-gray-600 text-base font-normal leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            )}


            {buttonLabel && (
                <div className="mt-12 flex justify-start">
                    <Button
                        asChild
                        variant="green"
                        className="group px-4 py-6 text-base transition-all duration-300 flex items-center gap-2 rounded-full"
                    >
                        <Link href={buttonLink} className="flex items-center gap-2">
                            {buttonLabel}
                            <span className="flex items-center justify-center w-7 h-7 bg-[#03C3DB]/20 rounded-full transition-transform duration-300 group-hover:translate-x-1">
                                <ArrowRight className="w-4 h-4 text-white" />
                            </span>
                        </Link>
                    </Button>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
