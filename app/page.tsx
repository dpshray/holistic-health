import ImageTextSection from "@/components/layout/image-text";
import Hero from "@/components/layout/Hero";
import MedicalCategories from "@/components/layout/medical-categories";
import Testimonials from "@/components/layout/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero 
        title={
          <>
            Empowering Healthcare
            <br />
            with Complete Solutions
          </>
        }
        subtitle="At Holistcs Healthcare, we are commited to a holistc approach—oﬀering a wide range of
          trusted medical products, devices, and solutons all in one place."
        backgroundImage="/images/hero.jpg"
        showButtons={true}

      />
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
        smallImage="/images/image2.jpg"
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
        smallImage="/images/image1.jpg"
        imagePosition="right"
        smallImageShift="right"
      />
      <Testimonials />
    </div>
  );
}
