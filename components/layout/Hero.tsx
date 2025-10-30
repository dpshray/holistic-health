import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <section className="relative h-[500px] md:h-[600px] bg-cover bg-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url(/images/hero.jpg)",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 text-balance leading-snug">
                    Empowering Healthcare
                    <br />
                    with Complete Solutions
                </h1>

                <p className="text-md md:text-lg text-gray-100 mb-8 max-w-3xl">
                    At Holistcs Healthcare, we are commited to a holistc approach—oﬀering a wide range of
                    trusted medical products, devices, and solutons all in one place.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="px-8 py-6 text-base bg-[#01AAC1] hover:bg-[#0096AB] text-white transition-colors duration-300 rounded">Shop Now</Button>
                    <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white/10 px-8 py-6 text-base bg-transparent rounded"
                    >
                        Explore Categories
                    </Button>
                </div>
            </div>
        </section>
    )
}
