import { ArrowRight } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card } from "../ui/card"

interface CategoryItem {
    title: string
    description: string
}

const categories: CategoryItem[] = [
    {
        title: "Medicines",
        description: "A comprehensive range of pharmaceutcals including salines and general drugs for clinical and hospital use.",
    },
    {
        title: "Surgical & Disposables",
        description: "Essental disposable products like gloves, masks, sanitzers, and catheters that ensure hygiene and patent safety.",
    },
    {
        title: "Medical Devices",
        description: "Reliable diagnostc and treatment equipment to support clinical operatons.",
    },
]

export default function MedicalCategories() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
                    {/* Section Header */}
                    <div className="max-w-sm shrink-0">
                        <Badge variant="green" className="inline-block px-4 py-2 text-sm font-semibold mb-4">
                            Categories
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#12141D] mb-4">Medical Categories</h2>
                        <p className="text-gray-600 max-w-2xl">
                            From medicines to medical furniture, we provide everything healthcare professionals need in one convenient platorm.
                        </p>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-[#F2F5F6]">
                                <h3 className="text-xl font-bold text-[#12141D] mb-3">{category.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* See All Button */}
                <div className="mt-12 flex justify-end">
                    <Button
                        variant="green"
                        className="group px-4 py-6 text-base transition-all duration-300 flex items-center gap-2 rounded-full"
                    >
                        See All
                        <span className="flex items-center justify-center w-7 h-7 bg-[#03C3DB]/20 rounded-full transition-transform duration-300 group-hover:translate-x-1">
                            <ArrowRight className="w-4 h-4 text-white" />
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    )
}
