import Hero from "@/components/layout/Hero"
import { PartnerCategory, PartnerCategoryProps } from "@/components/partners/partner-category"


const partnersData: PartnerCategoryProps[] = [
  {
    title: "Pharmaceuticals",
    partners: [
      { name: "Abbott", logo: "/images/partner.jpg" },
      { name: "Cipla", logo: "/images/partner2.png" },
      { name: "Lupi", logo: "/images/partner3.png" },
      { name: "Mylan", logo: "/images/partner4.png" },
      { name: "Sun Pharma", logo: "/images/partner5.png" },
      { name: "Pfizer", logo: "/images/partner6.png"},
    ],
    col: 6
  },
  {
    title: "Disposables & Consumables",
    partners: [
      { name: "Medtronic", logo: "/images/partner7.png" },
      { name: "Philips", logo: "/images/partner8.png" },
      { name: "Mindray", logo: "/images/partner9.png" },
      { name: "Goody", logo: "/images/partner10.jpg" },
      { name: "Dräger", logo: "/images/partner11.jpg" },
    ],
    col: 5
  },
]

export default function PartnersPage() {
  return (
    <main>
      <Hero
        title="Holistic Solutions for a Healthier Tomorrow"
        subtitle="At Holistics Healthcare, we believe in making quality healthcare accessible through trusted medical supplies and innovative procurement solutions."
        backgroundImage="/images/about-hero.jpg"
        showButtons={false}
        height="small"
        overlay="bg-black/60"
      />

      {/* Header Section */}
      <section className="py-6 sm:py-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-foreground mb-2">Partners</h1>
      </section>

      {/* Partners Sections */}
      <section className="py-6 sm:py-12 px-4">
          <div className="max-w-7xl mx-auto space-y-20">
              {partnersData.map((category) => (
                  <PartnerCategory key={category.title} title={category.title} partners={category.partners} col={category.col} />
              ))}
          </div>
      </section>
    </main>
  )
}
