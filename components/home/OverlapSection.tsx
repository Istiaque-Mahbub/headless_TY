"use client"

import { Button } from "@/components/ui/button"
import { fetchHomeData } from "@/lib/fetchData/Home/fetchLandingPage"
import { extractOverlaySection } from "@/lib/fetchData/Home/GetTheOverLay"
import Image from "next/image"
import { useEffect, useState } from "react"
import contactUsIcon from "@/public/up right.svg"

export interface OverlaySection {
  video: { url: string }
  title: string
  description1: string
  description2: string
  button: { text: string; href: string }
}

export default function OverlapSection() {
  const [data, setData] = useState<OverlaySection | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetchHomeData(extractOverlaySection)
        if (!res) {
          console.warn("No overlay data returned")
          setData(null)
        } else {
          setData(res)
          console.log("Fetched overlay section:", res)
        }
      } catch (error) {
        console.error("Error fetching overlay section:", error)
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <p className="text-center py-16">Loading...</p>
  if (!data) return <p className="text-center py-16">No data available</p>

  // Text to highlight in the title
  const highlightText = "Bangladesh, China & Germany"
  const titleParts = data.title.split(highlightText)

  return (
    <section className="relative z-10 -mt-44 w-full bg-white pb-16 lg:pb-24">
      <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        
        {/* Video Container */}
        <div className="relative z-30 h-[520px] w-full max-w-md overflow-hidden rounded-xl bg-black/5 shadow-md sm:h-[580px] sm:max-w-lg sm:mx-auto lg:mx-0 lg:h-[640px] lg:-translate-y-10 xl:-translate-y-16">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={data.video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
              {titleParts[0]}
              <span className="text-[#1F3A93]">{highlightText}</span>
              {titleParts[1]}
            </h2>
            <p className="text-sm text-gray-700 sm:text-base">{data.description1}</p>
            <p className="text-sm text-gray-700 sm:text-base">{data.description2}</p>
          </div>

          <div className="mt-4 sm:mt-6">
            <Button className="inline-flex items-center gap-2 rounded-full bg-[#1F3A93] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#1F3A93]/90">
              <span>{data.button.text || "Contact Us"}</span>
              <Image
                src={contactUsIcon}
                alt="Contact us"
                width={16}
                height={16}
                className="h-4 w-4"
              />
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
