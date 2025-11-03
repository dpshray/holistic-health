import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CategoryPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
            <div className="text-center max-w-2xl">
                <div className="mb-8">
                    <svg className="w-24 h-24 mx-auto text-teal-600 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                    </svg>
                </div>

                <h1 className="text-5xl font-bold text-slate-900 mb-4">Coming Soon</h1>
                <h2 className="text-2xl font-semibold text-teal-600 mb-4">Under Construction</h2>

                <p className="text-slate-600 text-lg mb-8">
                    We&apos;re working hard to bring you something amazing. This category page is currently in development and will
                    be available soon.
                </p>

                <div className="space-y-4">
                    <p className="text-slate-500">Stay tuned for exciting updates and new content!</p>
                    <Link href="/products">
                        <Button variant="green" size="lg">
                            Browse Products Instead
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
