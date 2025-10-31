"use client"

import Link from "next/link"

export interface ProductCardProps {
    icon: string
    title: string
    description?: string
    items?: string[]
    learnMoreLink?: string
}

export function ProductCard({ icon, title, description, items, learnMoreLink }: ProductCardProps) {
    return (
        <div className="rounded-2xl overflow-hidden shadow-sm border border-border bg-card hover:shadow-md transition-shadow">
            <div className="h-40 bg-linear-to-b from-purple-200 to-purple-100 flex items-center justify-center">
                <span className="text-6xl font-normal text-purple-600">{icon}</span>
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

                {learnMoreLink && (
                    <Link href={learnMoreLink} className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Learn more
                    </Link>
                )}
            </div>
        </div>
    )
}
