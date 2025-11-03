"use client"

interface QuoteSectionProps {
  text: string
  className?: string
}

export default function QuoteSection({ text, className = "" }: QuoteSectionProps) {
  return (
    <section className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-3xl md:text-5xl text-slate-800 text-center font-light leading-16">{text}</p>
      </div>
    </section>
  )
}
