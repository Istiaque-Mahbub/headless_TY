"use client"

import Image from "next/image"
import contactUsIcon from "@/public/up right.svg"
import { useEffect, useState } from "react"
import { fetchHomeData } from "@/lib/fetchData/Home/fetchLandingPage"
import { extractWhatWeDoSection } from "@/lib/fetchData/Home/WhatWeDoData"

export interface WhatWeDoCard {
  number: string
  title: string
  description: string
  highlighted?: boolean
}

export interface WhatWeDoData {
  titleSubtitle: {
    heading: string
    subtitle: string
  }
  cards: WhatWeDoCard[]
  image: {
    url: string
    alt: string
  } | null
}

export default function WhatWeDoSection() {
  const [data, setData] = useState<WhatWeDoData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetchHomeData(extractWhatWeDoSection)
        setData(res || null)
      } catch (error) {
        console.error("Error fetching WhatWeDo section:", error)
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <p className="text-center py-16">Loading...</p>
  if (!data) return <p className="text-center py-16">No data available</p>

  return (
    <section className="w-full bg-white pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-6 lg:px-8">
        {/* Title and subtitle */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-5xl font-semibold tracking-tight text-[#111827]">
            {data.titleSubtitle.heading}{" "}
            <span className="text-[#1F3A93]">{data.titleSubtitle.subtitle}</span>
          </h2>
          <p className="mt-3 text-sm text-gray-500 sm:text-base">{data.titleSubtitle.subtitle}</p>
        </div>

        {/* Cards + Image Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.1fr] lg:items-stretch">
          {/* Cards */}
         {/* Cards */}
<div className="flex flex-col gap-4">
  {data.cards.map((item, index) => (
    <button
      key={index}
      type="button"
      className="relative group flex h-44 sm:h-48 lg:h-52 items-start gap-4 rounded-xl border border-transparent px-4 py-3 text-left bg-white text-gray-900 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:bg-[#1F3A93] hover:text-white hover:shadow-md"
    >
      {/* Number aligned with content */}
      <div className="flex flex-col justify-start pt-2 text-4xl font-semibold tracking-[0.25em] text-gray-300 group-hover:text-white transition-colors duration-300">
        <span>{item.number}</span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-start gap-1">
        <h3 className="text-4xl font-semibold sm:text-base group-hover:text-white transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-lg leading-relaxed group-hover:text-white/80 transition-colors duration-300">
          {item.description}
        </p>
      </div>

      {/* Icon */}
      <div className="absolute bottom-4 right-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1F3A93]/20 bg-[#1F3A93] text-white hover:text-black hover:bg-white group-hover:border-white group-hover:bg-white/10 group-hover:text-black transition-colors duration-300 sm:h-12 sm:w-12">
          <Image src={contactUsIcon} alt="More details" width={16} height={16} className="h-4 w-4" />
        </div>
      </div>
    </button>
  ))}
</div>


          {/* Image */}
          <div className="relative mt-4 overflow-hidden rounded-2xl bg-black/5 shadow-md">
            {data.image && (
              <Image
                src={data.image.url}
                alt={data.image.alt}
                fill
                className="h-full w-full object-cover"
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 480px, (min-width: 768px) 90vw, 100vw"
                priority={false}
                unoptimized
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
