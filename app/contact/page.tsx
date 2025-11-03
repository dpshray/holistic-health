"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import { toast } from "sonner"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import TextInputField from "@/components/fields/text-input"

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const address = process.env.NEXT_PUBLIC_CONTACT_ADDRESS
const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    })


    const onSubmit = (data: ContactFormData) => {
        console.log(data)
        toast.success("Form submitted successfully!")
        reset()
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="py-16 text-center">
                <h1 className="text-3xl font-normal text-foreground mb-4">Contact Us</h1>
                <p className="text-gray-600 max-w-3xl mx-auto font-normal text-md">
                    Get In Touch. Whether you need a single batch of supplies or a long-term procurement partner, Holistics is
                    ready to serve.
                </p>
            </section>

            {/* Contact Section */}
            <section className="pb-12 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-normal text-foreground mb-8">Send Us a Message</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <TextInputField
                                label="Full Name"
                                placeholder="Enter your name"
                                required
                                {...register("fullName")}
                                error={errors.fullName?.message}
                                />

                                <TextInputField
                                label="Email"
                                placeholder="Enter your email"
                                type="email"
                                required
                                {...register("email")}
                                error={errors.email?.message}
                                />
                            </div>

                            <TextInputField
                                label="Subject"
                                placeholder="Enter subject"
                                required
                                {...register("subject")}
                                error={errors.subject?.message}
                            />

                            <TextInputField
                                label="Message"
                                placeholder="Enter your message"
                                type="textarea"
                                rows={5}
                                required
                                {...register("message")}
                                error={errors.message?.message}
                            />

                            <Button
                                type="submit"
                                className="w-full bg-[#631BFF] hover:bg-[#4D14CC] text-white py-3 rounded-full"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-normal text-foreground mb-8">Our Information</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4 items-start">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-white shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                                    <p className="text-gray-600">{address}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-white shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                                    <p className="text-gray-600">{phone}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-white shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                                    <p className="text-gray-600">{email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
