import ImageTextSection from "@/components/layout/image-text";

export default function AboutPage() {
    return (
        <div>
            <ImageTextSection
                title="Trusted Holistcs Care For a Brighter Future"
                description="We connect healthcare providers with trusted medical
                    suppliers through eﬃcient, transparent, and technology-
                    driven solutons. Our platorm simpliﬁes procurement,
                    fosters trust, and strengthens long-term partnerships
                    across the medical industry."
                buttonLabel="View Reports"
                mainImage="/images/image1.jpg"
                smallImage="/images/image2.jpg"
                imagePosition="left"
                smallImageShift="left"
            />
        </div>
    );
}