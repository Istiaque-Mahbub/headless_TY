"use client"

import Image from "next/image"
import oceanLogo from "@/public/ocean logo.png"
import { Button } from "@/components/ui/button"

export default function OverlapSection() {
  return (
    <section className="relative z-20 -mt-[180px] w-full bg-white pb-16 pt-0 lg:pb-24">
      <div className="mx-auto flex w-full max-w-[1170px] flex-col gap-10 px-4 sm:px-6 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-12 lg:px-8">
        <div
          className="relative z-30 order-1 h-[520px] w-full max-w-[420px] overflow-hidden rounded-xl bg-black/5 shadow-md sm:h-[580px] sm:max-w-[460px] sm:mx-auto lg:order-none lg:h-[640px] lg:max-w-[420px] lg:mx-0 lg:-translate-y-40 xl:-translate-y-40"
        >
          <Image
            src={oceanLogo}
            alt="Aerial view of ocean freight"
            fill
            className="h-full w-full object-cover"
            sizes="(min-width: 1280px) 570px, (min-width: 1024px) 500px, (min-width: 768px) 90vw, 100vw"
            priority={false}
          />
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold leading-snug text-[#1F3A93] sm:text-3xl lg:text-[2.1rem]">
              Bridging Bangladesh, China &amp; Germany For Reliable Trade
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              TY Law International Limited is a Hong Kong-based company
              specializing in international trade between China and other Asian
              countries, particularly Bangladesh, as well as European markets
              with a focus on Germany. We deliver reliable sourcing, logistics,
              and export services.
            </p>
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              We are committed to delivering reliable sourcing, logistics, and
              export services, creating value for both suppliers and buyers
              across continents.
            </p>
          </div>

          <div className="mt-2">
            <Button className="h-11 min-w-[140px] rounded-full bg-[#1F3A93] px-6 text-sm font-semibold text-white shadow-md transition duration-300 hover:translate-y-0.5 hover:bg-[#1F3A93]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F3A93]">
              Know More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
