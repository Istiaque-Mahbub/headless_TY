import Image from "next/image"
import { Check, Search, Truck, Headset } from "lucide-react"

import requestIcon from "@/public/up right.svg"

const cards = [
    {
        title: "Product Sourcing",
        icon: Search,
        accent: false,
        items: [
            "Supplier identification & verification",
            "Quality control & inspection",
            "Price negotiation",
            "Sample procurement",
            "Product customization support",
        ],
    },
    {
        title: "Logistics Support",
        icon: Truck,
        accent: true,
        items: [
            "Freight forwarding (air & sea)",
            "Warehousing solutions",
            "Cargo insurance",
            "Shipment tracking",
            "Last-mile delivery coordination",
        ],
    },
    {
        title: "After-Sales Support",
        icon: Headset,
        accent: false,
        items: [
            "Warranty coordination",
            "Returns & replacements",
            "Technical support liaison",
            "Reorder management",
            "Continuous improvement feedback",
        ],
    },
]

export default function SourcingSupportCards() {
    return (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cards.map((card) => {
                const Icon = card.icon
                const cardBase =
                    "flex h-full flex-col rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1"
                const cardVariant = card.accent
                    ? "bg-[#1F3A93] text-white ring-[#1F3A93]"
                    : "bg-white text-[#101010] ring-gray-100"
                const itemTextColor = card.accent
                    ? "text-white/90"
                    : "text-[rgba(0,0,0,0.60)]"
                const bulletColor = card.accent ? "text-white" : "text-[#1F3A93]"
                const ctaTextColor = card.accent ? "text-white" : "text-[#1F3A93]"

                return (
                    <div key={card.title} className={`${cardBase} ${cardVariant}`}>
                        <div className="mb-4 flex items-center gap-3">
                            <div
                                className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/90 ${card.accent ? "text-[#1F3A93]" : "text-[#1F3A93]"
                                    }`}
                            >
                                <Icon className="h-5 w-5" />
                            </div>
                            <h3
                                className="text-sm font-semibold sm:text-base"
                                style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
                            >
                                {card.title}
                            </h3>
                        </div>

                        <ul className="mb-4 space-y-2">
                            {card.items.map((item) => (
                                <li
                                    key={item}
                                    className={`flex items-start gap-2 text-xs leading-[140%] sm:text-sm ${itemTextColor}`}
                                    style={{ fontFamily: '"Open Sans", system-ui, sans-serif' }}
                                >
                                    <Check
                                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${bulletColor}`}
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            type="button"
                            className={`mt-auto inline-flex items-center gap-2 text-xs font-semibold sm:text-sm ${ctaTextColor}`}
                            style={{ fontFamily: '"Open Sans", system-ui, sans-serif' }}
                        >
                            <span>Request Catalogue</span>
                            <Image
                                src={requestIcon}
                                alt="Request catalogue"
                                className="h-4 w-4"
                            />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

