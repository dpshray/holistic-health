"use client"

import Image from "next/image"
import Link from "next/link"

export interface ProductCardProps {
    image: string
    title: string
    description?: string
    items?: string[]
    slug?: string
}

export function ProductCard({ image, title, description, items, slug }: ProductCardProps) {
    return (
        <Link href={`/products/${slug}`} className="rounded-2xl overflow-hidden shadow-sm border border-border bg-card hover:shadow-md transition-shadow">
            <div className="h-48 bg-linear-to-b from-purple-200 to-purple-100 flex items-center justify-center">
                <Image
                    src={image}
                    alt={title}
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-normal text-foreground mb-2">{title}</h3>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">{description}</p>

                {items && items.length > 0 && (
                    <ul className="text-base font-normal text-muted-foreground space-y-1 mb-4">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Link>
    )
}
