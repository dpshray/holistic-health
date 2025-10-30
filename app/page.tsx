import ImageTextSection from "@/components/layout/building-bridges";
import Hero from "@/components/layout/Hero";
import MedicalCategories from "@/components/layout/medical-categories";

export default function Home() {
  return (
    <div>
      <Hero />
      <MedicalCategories />
      <ImageTextSection
        title="Building bridges between companies and customers"
        description="We connect healthcare providers with trusted medical
          suppliers through eﬃcient, transparent, and technology-
          driven solutons. Our platorm simpliﬁes procurement,
          fosters trust, and strengthens long-term partnerships
          across the medical industry."
        buttonLabel="View Reports"
        mainImage="/images/image1.jpg"
        smallImage="/images/image1.jpg"
        imagePosition="left"
        smallImageShift="left"
      />
      <ImageTextSection
        title="Ready to Transform Your Medical Procurement?"
        description="Thousands of healthcare professionals trust Holistcs
          Healthcare to simplify their medical purchasing. We're here
          to ensure quality, aﬀordability, and eﬃciency in every
          delivery."
        description2="We are making every business grow!"
        buttonLabel="Contact Now"
        mainImage="/images/image2.jpg"
        smallImage="/images/image2.jpg"
        imagePosition="right"
        smallImageShift="right"
      />
    </div>
  );
}
