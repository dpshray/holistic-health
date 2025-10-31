import Hero from "@/components/layout/Hero";
import ImageTextSection from "@/components/layout/image-text";

export default function AboutPage() {
    return (
        <div>
            <Hero
                title="Holistic Solutions for a Healthier Tomorrow"
                subtitle="At Holistics Healthcare, we believe in making quality healthcare accessible through trusted medical supplies and innovative procurement solutions."
                backgroundImage="/images/about-hero.jpg"
                showButtons={false}
                height="small"
                overlay="bg-black/60"
            />
            <ImageTextSection
                title="Trusted Holistcs Care For a Brighter Future"
                description="Founded with a vision to streamline medical supply procurement,
                    Holistcs Healthcare Pvt. Ltd. was established to bridge the gap
                    between healthcare providers and trusted manufacturers.
                    From our beginnings in [Insert Year], we’ve grown into a reliable
                    name for hospitals, clinics, and medical professionals across Nepal."
                buttonLabel="See all"
                mainImage="/images/about1.jpg"
                imagePosition="left"
            />
            <ImageTextSection
                tag="About Medical life"
                title="Who We Are"
                description="Holistcs is a trusted medical supply partner, commited to
                    meetng the complete procurement needs of healthcare facilites.
                    Our vision is to simplify hospital operatons by becoming a single-
                    window source for quality medical essentals."
                mainImage="/images/about2.jpg"
                imagePosition="right"
            />
            <ImageTextSection
                tag="About Medical life"
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