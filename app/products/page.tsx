import { ProductCard, ProductCardProps } from "@/components/products/product-card"

const products: ProductCardProps[] = [
    {
        image: "/images/product1.jpg",
        title: "Medicines",
        items: ["Pharmaceutical Drugs", "Salines & IV Fluids"],
        slug: "medicines",
    },
    {
        image: "/images/product2.jpg",
        title: "Dermatology & Cosmetology",
        description:
        "Specialized skin treatment products, dermatology care products, medicated creams, acne solutions, sunscreen, and professional cosmetology supplies.",
        slug: "dermatology",
    },
    {
        image: "/images/product3.jpg",
        title: "Nutraceuticals & Food Supplements",
        description:
        "Immunity boosters, protein supplements, vitamin supplements, minerals, probiotics from brands like GNC, Airway, Herbalde, Himalaya",
        slug: "nutraceuticals",
    },
    {
        image: "/images/product4.jpg",
        title: "Medical Devices",
        description:
        "Blood pressure monitors, ECG machines, pulse oximeters, thermometers, infusion pumps, nebulizers, glucometers, fetal monitors, defibrillators.",
        slug: "medical-devices",
    },
    {
        image: "/images/product5.jpg",
        title: "Medical Furniture",
        description:
        "Crash carts, medical carts, motorized hospital beds, bedside lockers, cardiac tables, stretchers, over-bed tables, examination couches.",
        slug: "medical-furniture",
    },
    {
        image: "/images/product6.jpg",
        title: "Equipment",
        description:
        "Ventilators, anesthesia machines, surgical lights, OT tables, sterilizers, diagnostic imaging equipment, suction machines, autoclaves.",
        slug: "equipment",
    },
    {
        image: "/images/product7.jpg",
        title: "Surgical & Disposables",
        items: ["Masks - 3-ply, N95", "Gloves - Disposable & surgical", "Protective wear - Caps, gowns"],
        slug: "surgical-disposables",
    },
    {
        image: "/images/product8.jpg",
        title: "Medical Linen & Scrubs",
        description:
        "Hospital scrubs, patient gowns, bedsheets, pillow covers, blankets, drapes — available in standard and customized designs.",
        slug: "medical-linen",
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
