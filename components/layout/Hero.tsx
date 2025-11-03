import { Button } from "@/components/ui/button"
import React from "react"

interface HeroSectionProps {
    title: string | React.ReactNode
    subtitle: string
    backgroundImage?: string
    showButtons?: boolean
    overlay?: string
    height?: "default" | "small" | "large"
    textColor?: string
    buttonText?: {
        primary?: string
        secondary?: string
    }
}

export default function Hero({
    title,
    subtitle,
    backgroundImage,
    showButtons = true,
    height = "default",
    overlay,
    textColor = "text-white",
    buttonText = {
        primary: "Shop Now",
        secondary: "Learn More",
    },
}: HeroSectionProps) {
    const heightClasses = {
        small: "h-[350px]",
        default: "h-[500px] md:h-[600px]",
        large: "h-[700px] md:h-[800px]",
    }
    return (
        <section className={`relative ${heightClasses[height]} bg-cover bg-center overflow-hidden`}>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            />

            {/* Overlay */}
            {overlay && <div className={`absolute inset-0 ${overlay}`} />}

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${textColor} mb-4 text-balance leading-snug`}>
                    {title}
                </h1>

                <p className={`text-md md:text-lg ${textColor} mb-8 max-w-3xl`}>
                    {subtitle}
                </p>

                {showButtons && (
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="px-8 py-6 text-base bg-[#01AAC1] hover:bg-[#0096AB] text-white transition-colors duration-300 rounded">{buttonText.primary}</Button>
                        <Button
                            variant="outline"
                            className="border-white text-white hover:bg-white/10 px-8 py-6 text-base bg-transparent rounded"
                        >
                            {buttonText.secondary}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}
