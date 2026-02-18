"use client"

import Image from "next/image"
import globeImage from "@/public/globe.svg"

export default function GlobeSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 text-left sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold leading-tight text-[#111827] sm:text-3xl lg:text-[2.1rem]">
              TY Law Builds Bridges
              <br />
              Across{" "}
              <span className="text-[#1F3A93]">
                The Globe
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
            A strong strategic presence across key Asian and European markets,
            driving global growth and cross-border opportunities for our
            partners.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl bg-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
          <div className="relative h-[320px] w-full sm:h-[380px] lg:h-[440px] xl:h-[480px]">
            <Image
              src={globeImage}
              alt="World map highlighting key trade markets"
              fill
              className="h-full w-full object-contain"
              sizes="(min-width: 1280px) 1170px, (min-width: 1024px) 960px, (min-width: 768px) 90vw, 100vw"
              priority={false}
            />

            <div className="pointer-events-none absolute left-[18%] top-[46%] hidden -translate-x-1/2 -translate-y-1/2 md:block">
              <div className="h-2 w-2 rounded-full bg-[#F97316] shadow-[0_0_0_6px_rgba(249,115,22,0.35)]" />
              <span className="mt-2 block text-xs font-medium text-gray-700">
                Germany
              </span>
            </div>

            <div className="pointer-events-auto absolute right-[20%] top-[50%] hidden -translate-y-1/2 md:block">
              <div className="rounded-2xl bg-white px-4 py-3 text-xs shadow-xl sm:px-5 sm:py-4 sm:text-sm">
                <p className="font-semibold text-[#111827]">
                  Bangladesh
                </p>
                <p className="mt-1 text-[11px] leading-snug text-gray-600 sm:text-xs">
                  45C BDC, Rangdhig (Dhaka)
                  <br />
                  Key Bangladesh hub
                  <br />
                  Serving Europe &amp; Asia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

