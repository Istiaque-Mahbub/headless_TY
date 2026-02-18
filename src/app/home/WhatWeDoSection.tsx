"use client"

import Image from "next/image"
import whatWeDoShip from "@/public/what-we-do-ship.png"
import contactUsIcon from "@/public/up right.svg"

interface WhatWeDoItem {
  id: string
  number: string
  title: string
  description: string
  highlighted?: boolean
}

const items: WhatWeDoItem[] = [
  {
    id: "electronics",
    number: "01",
    title: "Electronic Products",
    description:
      "Sourcing and exporting high-quality electronics from trusted manufacturers across China to global markets.",
  },
  {
    id: "healthcare",
    number: "02",
    title: "Healthcare Products",
    description:
      "Reliable supply chains for medical devices, healthcare consumables, and pharmaceutical-grade products.",
    highlighted: true,
  },
  {
    id: "sourcing-export",
    number: "03",
    title: "Sourcing & Export",
    description:
      "End-to-end sourcing, quality inspection, logistics coordination, and export documentation services.",
  },
]

export default function WhatWeDoSection() {
  return (
    <section className="w-full bg-white pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#111827] sm:text-3xl">
            What{" "}
            <span className="text-[#1F3A93]">
              We Do
            </span>
          </h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Comprehensive solutions for your international trading needs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.1fr] lg:items-stretch">
          <div className="flex h-full flex-col gap-3 rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-gray-200 sm:p-5 lg:p-6">
            {items.map((item) => {
              const isActive = item.highlighted

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`group flex min-h-[72px] items-stretch gap-4 rounded-xl border border-transparent px-3 py-3 text-left sm:min-h-[84px] sm:px-4 ${isActive
                    ? "bg-[#1F3A93] text-white shadow-md"
                    : "bg-white text-gray-900 hover:bg-gray-50"
                    }`}
                >
                  <div className="flex flex-col items-center justify-start pt-1 text-xs font-semibold tracking-[0.25em] text-gray-300">
                    <span>{item.number}</span>
                  </div>

                  <div className="flex flex-1 flex-col justify-center gap-1">
                    <h3
                      className={`text-sm font-semibold sm:text-base ${isActive ? "text-white" : "text-[#111827]"
                        }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed sm:text-sm ${isActive ? "text-white/80" : "text-gray-600"
                        }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full border text-[#1F3A93] transition-colors duration-300 sm:h-12 sm:w-12 ${isActive
                        ? "border-white bg-white/10 text-white group-hover:bg-white/20"
                        : "border-[#1F3A93]/20 bg-white group-hover:bg-[#1F3A93]/5"
                        }`}
                    >
                      <Image
                        src={contactUsIcon}
                        alt="More details"
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="relative mt-4 h-[400px] overflow-hidden rounded-2xl bg-black/5 shadow-md sm:h-[460px] lg:mt-0 lg:h-[580px] xl:h-[640px]">
            <Image
              src={whatWeDoShip}
              alt="Container ship at sea"
              fill
              className="h-full w-full object-cover"
              sizes="(min-width: 1280px) 560px, (min-width: 1024px) 480px, (min-width: 768px) 90vw, 100vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
