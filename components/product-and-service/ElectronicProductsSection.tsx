import Image from "next/image"
import { Check } from "lucide-react"

import electronicProductsImage from "@/public/electronic-products.png"

export default function ElectronicProductsSection() {
    return (
        <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-[1170px] flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12">
                <div className="order-1 flex-1 lg:order-2">
                    <div className="mb-4 flex flex-wrap items-baseline gap-2">
                        <h2
                            className="text-[32px] font-semibold leading-none tracking-[-0.96px] text-black sm:text-[40px] lg:text-[48px]"
                            style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
                        >
                            Electronics
                        </h2>
                        <h2
                            className="text-[32px] font-semibold leading-none tracking-[-0.96px] text-[#1F3A93] sm:text-[40px] lg:text-[48px]"
                            style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
                        >
                            Products
                        </h2>
                    </div>

                    <p
                        className="mb-6 text-sm leading-[150%] text-[rgba(0,0,0,0.60)] sm:text-base"
                        style={{ fontFamily: '"Open Sans", system-ui, sans-serif' }}
                    >
                        Sourcing high-quality electronics including consumer electronics, industrial
                        devices, and components.
                    </p>

                    <div className="mb-6 flex flex-wrap gap-4 text-sm leading-[150%] text-[rgba(0,0,0,0.60)] sm:text-base">
                        <span style={{ fontFamily: '"Open Sans", system-ui, sans-serif' }}>
                            Electronic components
                        </span>
                        <span style={{ fontFamily: '"Open Sans", system-ui, sans-serif' }}>
                            Industrial Devices
                        </span>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-gray-100 p-6">
                            <h3
                                className="mb-4 text-sm font-semibold text-[#101010] sm:text-base"
                                style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
                            >
                                Electronic components
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    "Smartphones & Tablets",
                                    "Semiconductors & ICs",
                                    "Printed Circuit Boards",
                                    "Connectors & Cables",
                                    "Smart Home Devices",
                                    "Power Supplies",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2 text-xs leading-[140%] text-[rgba(0,0,0,0.60)] sm:text-sm"
                                        style={{ fontFamily: '"Open Sans", system-ui, sans-serif' }}
                                    >
                                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1F3A93]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-gray-100 p-6">
                            <h3
                                className="mb-4 text-sm font-semibold text-[#101010] sm:text-base"
                                style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
                            >
                                Industrial Devices
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    "Automation Equipment",
                                    "Sensors & Controllers",
                                    "Industrial Displays",
                                    "Power Management",
                                    "Testing Equipment",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2 text-xs leading-[140%] text-[rgba(0,0,0,0.60)] sm:text-sm"
                                        style={{ fontFamily: '"Open Sans", system-ui, sans-serif' }}
                                    >
                                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1F3A93]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="order-2 flex-1 lg:order-1 lg:flex lg:justify-start">
                    <div className="overflow-hidden rounded-3xl border border-[#1F3A93]/20 w-full aspect-[57/59] flex-shrink-0 lg:w-[570px] lg:h-[590px]">
                        <Image
                            src={electronicProductsImage}
                            alt="Electronics products cargo ship"
                            className="h-full w-full object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

