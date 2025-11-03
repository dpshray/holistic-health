export interface Product {
    id: string
    slug: string
    title: string
    category: string
    description: string
    shortDescription?: string
    heroImage: string
    detailImage: string
    featureTitle?: string
    features: string[]
    items?: string[]
}

export const productsData: Product[] = [
    {
        id: "1",
        slug: "medicines",
        title: "Holistic Solutions for a Healthier Tomorrow",
        category: "Medicine & Healthcare Essential",
        description:
        "At Holistics Healthcare, we provide a comprehensive selection of pharmaceutical drugs and IV solutions essential for hospitals, clinics, and pharmacies. Our products are sourced from reputable national and international brands.",
        shortDescription: "Pharmaceutical Drugs, Salines & IV Fluids",
        heroImage: "/images/productHero1.png",
        detailImage: "/images/productDetail1.png",
        featureTitle: "Pharmaceutical Drugs",
        features: [
            "Antibiotics - Combat bacterial infections effectively",
            "Analgesics & Antipyretics - Manage pain and reduce fever",
            "Antivirals - Manage and treat viral infections",
            "Antihypertensives - Control and manage blood pressure levels",
            "Cardiovascular Drugs - For heart-related treatments and conditions",
            "Gastrointestinal & Antacids - For digestion and acid control",
            "Respiratory Medications - For asthma, COPD, and related issues",
            "Popular Brands: Cipla, Sun Pharma, Intas, Zydus, Abbott, Lupin",
        ],
    },
    {
        id: "2",
        slug: "dermatology",
        title: "Dermatology & Cosmetology",
        category: "Dermatology & Cosmetology",
        description:
        "At Holistics Healthcare, we provide a comprehensive selection of pharmaceutical drugs and IV solutions essential for hospitals, clinics, and pharmacies. Our products are sourced from reputable national and international brands, ensuring quality, safety, and reliability in every dose.",
        shortDescription: "Professional dermatology and skin care solutions",
        heroImage: "/images/productHero2.jpg",
        detailImage: "/images/productDetail2.png",
        featureTitle: "Product Range Include",
        features: [
            "Medicated Creams & Ointments - For acne, pigmentation, fungal infections, and skin inflammation. Examples: Clindamycin, Adapalene, Miconazole, Hydrocortisone",
            "Acne Care Solutions - Gels, serums, face washes, and spot treatments for all skin types",
            "Skin Brightening & Pigmentation Control - Kojic acid creams, Vitamin C serums, Retinoids",
            "Sun Protection & Moisturizers - Dermatologist-recommended sunscreens (SPF 30+ to SPF 50+), medicated moisturizers",
        ],
    },
    {
        id: "3",
        slug: "nutraceuticals",
        title: "Nutraceuticals & Food Supplements",
        category: "Nutraceuticals & Food Supplements",
        description:
            "At Holistics Healthcare, we provide a comprehensive selection of pharmaceutical drugs and IV solutions essential for hospitals, clinics, and pharmacies. Our products are sourced from reputable national and international brands, ensuring quality, safety, and reliability in every dose.",
        shortDescription: "Health supplements and nutritional products",
        heroImage: "/images/productHero3.png",
        detailImage: "/images/productDetail3.png",
        featureTitle: "Product Range Include",
        features: [
            "Protein Supplements - For muscle building",
            "Vitamin Supplements - Essential micronutrients",
            "Mineral Supplements - Calcium, iron, zinc",
            "Probiotics - Gut health support",
            "Immunity Boosters - Wellness support",
            "Herbal Supplements - Natural remedies",
        ],
    },
    {
        id: "4",
        slug: "medical-devices",
        title: "Medical Devices",
        category: "Equipment",
        description:
        "Blood pressure monitors, ECG machines, pulse oximeters, thermometers, infusion pumps, nebulizers, glucometers, fetal monitors, defibrillators.",
        shortDescription: "Professional medical diagnostic devices",
        heroImage: "/images/productHero4.jpg",
        detailImage: "/images/product4.jpg",
        features: [
            "Blood Pressure Monitors - Digital and manual",
            "ECG Machines - Cardiac monitoring",
            "Pulse Oximeters - Oxygen saturation monitoring",
            "Thermometers - Digital temperature measurement",
            "Infusion Pumps - IV fluid delivery",
            "Nebulizers - Respiratory therapy",
            "Glucometers - Blood glucose monitoring",
            "Fetal Monitors - Pregnancy monitoring",
        ],
    },
    {
        id: "5",
        slug: "medical-furniture",
        title: "Medical Furniture",
        category: "🛠️ Medical Furniture",
        description:
            "At Holistics Healthcare, we provide a comprehensive selection of pharmaceutical drugs and IV solutions essential for hospitals, clinics, and pharmacies. Our products are sourced from reputable national and international brands, ensuring quality, safety, and reliability in every dose.",
        shortDescription: "Hospital and medical furniture solutions",
        heroImage: "/images/productHero6.png",
        detailImage: "/images/productDetail4.png",
        featureTitle: "Product Range Include",
        features: [
            "Hospital Beds - Motorized and manual options",
            "Crash Carts - Emergency equipment storage",
            "Medical Carts - Mobile storage solutions",
            "Stretchers - Patient transport equipment",
            "Examination Couches - Patient examination",
            "Bedside Lockers - Patient storage",
            "Over-bed Tables - Patient convenience",
            "Cardiac Tables - Specialized cardiac procedures",
        ],
    },
    {
        id: "6",
        slug: "equipment",
        title: "Equipment",
        category: "Medical Equipment",
        description:
        "Ventilators, anesthesia machines, surgical lights, OT tables, sterilizers, diagnostic imaging equipment, suction machines, autoclaves.",
        shortDescription: "Advanced medical operating equipment",
        heroImage: "/images/productHero6.png",
        detailImage: "/images/productDetail7.jpg",
        features: [
            "Ventilators - Respiratory support systems",
            "Anesthesia Machines - Anesthesia delivery",
            "Surgical Lights - Operating room lighting",
            "OT Tables - Surgical operating tables",
            "Sterilizers - Equipment sterilization",
            "Suction Machines - Surgical suction",
            "Autoclaves - High-pressure sterilization",
            "Diagnostic Equipment - Imaging and analysis",
        ],
    },
    {
        id: "7",
        slug: "surgical-disposables",
        title: "Surgical & Disposables",
        category: "🩺 Surgical & Disposables",
        description: "Masks, gloves, protective wear, and other surgical disposables",
        shortDescription: "Masks - 3-ply, N95 | Gloves - Disposable & surgical | Protective wear - Caps, gowns",
        heroImage: "/images/productHero5.png",
        detailImage: "/images/productDetail5.png",
        featureTitle: "Product Range Include",
        features: [
            "Masks - 3-ply, N95, FFP2, FFP3",
            "Surgical Gloves - Latex and nitrile options",
            "Protective Gowns - Full-body protection",
            "Head Caps - Sterile head covering",
            "Shoe Covers - Foot protection",
            "Face Shields - Eye protection",
            "Aprons - Waterproof protection",
            "Safety Standards - Meets international guidelines",
        ],
    },
    {
        id: "8",
        slug: "medical-linen",
        title: "Medical Linen & Scrubs",
        category: "🛏️ Medical Linen & Scrubs",
        description:
        "Hospital scrubs, patient gowns, bedsheets, pillow covers, blankets, drapes — available in standard and customized designs.",
        shortDescription: "Professional medical textiles and linens",
        heroImage: "/images/productHero7.png",
        detailImage: "/images/productDetail6.png",
        featureTitle: "Product Range Include",
        features: [
            "Hospital Scrubs - Professional uniforms",
            "Patient Gowns - Comfortable patient wear",
            "Bedsheets - High-quality hospital grade",
            "Pillow Covers - Sterile and washable",
            "Blankets - Patient comfort and warmth",
            "Surgical Drapes - Operating room drapes",
            "Customized Designs - Branding options",
            "Durable Fabrics - Long-lasting and washable",
        ],
    },
]

export function getProductBySlug(slug: string): Product | undefined {
    return productsData.find((product) => product.slug === slug)
}
