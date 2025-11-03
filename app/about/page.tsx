import Hero from "@/components/layout/Hero";
import ImageTextSection from "@/components/layout/image-text";
import QuoteSection from "@/components/layout/quote-section";

export default function AboutPage() {
    return (
        <div>
            <Hero
                title="Holistic Solutions for a Healthier Tomorrow"
                subtitle="At Holistics Healthcare, we believe in making quality healthcare accessible through trusted medical supplies and innovative procurement solutions."
                backgroundImage="/images/about-hero2.jpg"
                showButtons={false}
                height="medium"
                overlay="bg-black/60"
            />
            <QuoteSection text="We always stand at the forefront of healthcare supply and innovation, staying ahead by embracing the latest medical advancements, trusted global partnerships, and technology-driven procurement solutions." />
            <Hero
                title="Holistic Solutions for a Healthier Tomorrow"
                subtitle="At Holistics Healthcare, we believe in making quality healthcare accessible through trusted medical supplies and innovative procurement solutions."
                backgroundImage="/images/about-hero3.png"
                showButtons={false}
                height="medium"
                overlay="bg-black/60"
            />
            <ImageTextSection
                title="Our Mission"
                description="To empower healthcare providers with reliable, aﬀordable, and
                    top-quality medical products, ensuring they can focus on patent
                    care while we take care of their supply chain."
                mainImage="/images/image1.jpg"
                smallImage="/images/image2.jpg"
                imagePosition="left"
                smallImageShift="left"
                points={[
                    "Wide product range under one roof",
                    "Partnerships with top global and natonal brands",
                    "On-tme delivery with assured quality",
                    "Customized supply solutons for every facility size",
                ]}
            />
        </div>
    );
}