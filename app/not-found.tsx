import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-slate-50 to-white px-4">
            <div className="text-center max-w-md">
                <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
                <h2 className="text-3xl font-bold text-slate-800 mb-3">Page Not Found</h2>
                <p className="text-slate-600 text-lg mb-8">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
                </p>
                <Link href="/">
                    <Button variant="green" size="lg">Back to Home</Button>
                </Link>
            </div>
        </div>
    )
}
