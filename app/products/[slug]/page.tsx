import Image from "next/image"
import { notFound } from "next/navigation"
import { getProductBySlug } from "@/data"
import Hero from "@/components/layout/Hero"
import ImageTextSection from "@/components/layout/image-text"

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const product = getProductBySlug(slug)

    if (!product) {
        notFound()
    }

    return (
        <main className="flex-1">
            <Hero
                title={
                <>
                    Holistic Solutions for a
                    <br />
                    Healthier Tomorrow
                </>
                }
                subtitle="At Holistics Healthcare, we believe in making quality healthcare accessible through trusted medical supplies and innovative procurement solutions."
                showButtons={false}
                textColor="text-black"
                height="small"
            />

            {/* Full-Width Image */}
            <section className="relative w-full h-80 md:h-[500px]">
                <Image
                    src={product.heroImage || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover"
                    priority
                />
            </section>

            {/* Content Section */}
            <ImageTextSection
                title={product.category}
                description={product.description}
                featureTitle={product.featureTitle}
                mainImage={product.detailImage || "/placeholder.svg"}
                points={product.features}
                imagePosition="left"
            />
        </main>
    )
}
