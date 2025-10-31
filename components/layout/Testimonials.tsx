import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import { RiDoubleQuotesL } from "react-icons/ri"

interface Testimonial {
    quote: string
    author: string
    role: string
    avatar: string
    initials: string
}

const testimonials: Testimonial[] = [
    {
        quote:
        '"What I appreciate most is their responsiveness and atenton to detail. Holistcs truly understands what healthcare providers need."',
        author: "Andrew Wilkins",
        role: "Medical Director, CarePoint Hospital",
        avatar: "/images/test1.jpg",
        initials: "SJ",
    },
    {
        quote:
        '"We’ve saved both tme and cost since partnering with Holistcs. Their product range and professional support are top-notch."',
        author: "Daisy Phelps",
        role: "Digital Marketng Director, Monatc",
        avatar: "/images/test2.jpg",
        initials: "MC",
    },
]

export default function Testimonials() {
    return (
        <section className="py-16 md:py-24 bg-[#F2F5F6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-4xl md:text-6xl font-normal text-[#1e3a3a] mb-12 text-center">We Believe people we trust</h2>
                    <Button variant="ghost" className="hover:underline">
                        <span className="font-normal">See All</span> <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="p-8 border-0 bg-white hover:shadow-lg transition-shadow">
                            <div>
                                <RiDoubleQuotesL className="w-8 h-8 text-yellow-500" />
                                <p className="text-gray-600 mb-4 leading-relaxed font-normal text-lg sm:text-2xl">{testimonial.quote}</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Avatar>
                                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                                    <AvatarFallback className="bg-[#0891b2] text-white">{testimonial.initials}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-[#1e3a3a]">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
