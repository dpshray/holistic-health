import { ProductCard, ProductCardProps } from "@/components/products/product-card"

const products: ProductCardProps[] = [
    {
        icon: "m",
        title: "Medicines",
        items: ["Pharmaceutical Drugs", "Salines & IV Fluids"],
        learnMoreLink: "#",
    },
    {
        icon: "f",
        title: "Dermatology & Cosmetology",
        description:
        "Specialized skin treatment products, dermatology care products, medicated creams, acne solutions, sunscreen, and professional cosmetology supplies.",
    },
    {
        icon: "l",
        title: "Nutraceuticals & Food Supplements",
        description:
        "Immunity boosters, protein supplements, vitamin supplements, minerals, probiotics from brands like GNC, Airway, Herbalde, Himalaya",
    },
    {
        icon: "l",
        title: "Medical Devices",
        description:
        "Blood pressure monitors, ECG machines, pulse oximeters, thermometers, infusion pumps, nebulizers, glucometers, fetal monitors, defibrillators.",
    },
    {
        icon: "c",
        title: "Medical Furniture",
        description:
        "Crash carts, medical carts, motorized hospital beds, bedside lockers, cardiac tables, stretchers, over-bed tables, examination couches.",
    },
    {
        icon: "s",
        title: "Equipment",
        description:
        "Ventilators, anesthesia machines, surgical lights, OT tables, sterilizers, diagnostic imaging equipment, suction machines, autoclaves.",
    },
    {
        icon: "m",
        title: "Surgical & Disposables",
        items: ["Masks - 3-ply, N95", "Gloves - Disposable & surgical", "Protective wear - Caps, gowns"],
        learnMoreLink: "#",
    },
    {
        icon: "l",
        title: "Medical Linen & Scrubs",
        description:
        "Hospital scrubs, patient gowns, bedsheets, pillow covers, blankets, drapes — available in standard and customized designs.",
    },
]

export default function ProductsPage() {
    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="py-12 md:py-16 bg-background">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-normal text-foreground mb-4 text-balance">Our Products</h1>
                        <p className="text-md font-normal text-muted-foreground max-w-2xl mx-auto text-pretty">
                            We offer a comprehensive range of medical supplies and equipment to meet the diverse needs of healthcare
                            facilities.
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
