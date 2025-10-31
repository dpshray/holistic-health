import Image from "next/image"

interface Partner {
  name: string
  logo: string
}

export interface PartnerCategoryProps {
  title: string
  partners: Partner[]
  col: number
}

export function PartnerCategory({ title, partners, col }: PartnerCategoryProps) {
  const colClass =
    col === 5
      ? "lg:grid-cols-5"
      : col === 4
      ? "lg:grid-cols-4"
      : col === 3
      ? "lg:grid-cols-3"
      : "lg:grid-cols-6"

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-normal text-center text-foreground">{title}</h2>
      <div className={`grid grid-cols-2 md:grid-cols-3 ${colClass} gap-8 items-center justify-items-center`}>
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center justify-center h-20 w-full">
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={120}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
