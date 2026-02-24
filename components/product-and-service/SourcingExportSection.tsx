import Image from "next/image"

import sourcingExportImage from "@/public/source-export.png"
import SourcingSupportCards from "@/components/product-and-service/SourcingSupportCards"

export default function SourcingExportSection() {
  return (
    <section className="w-full bg-white px-4 pb-16 pt-4 sm:px-6 sm:pb-20 sm:pt-6 lg:px-8 lg:pb-24 lg:pt-8">
      <div className="mx-auto w-full max-w-[1170px]">
        <div className="mb-8 text-center">
          <h2
            className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-[40px]"
            style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
          >
            Sourcing &{" "}
            <span className="text-[#1F3A93]">Export Services</span>
          </h2>
          <p
            className="mt-4 text-xs leading-[150%] text-[rgba(0,0,0,0.60)] sm:text-sm lg:text-base"
            style={{ fontFamily: '"Open Sans", system-ui, sans-serif' }}
          >
            End-to-end, fully integrated solutions designed to power and streamline every aspect
            of your international trading operations across global markets.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <Image
            src={sourcingExportImage}
            alt="Sourcing and export services port view"
            className="h-full w-full object-cover"
            priority={false}
          />
        </div>

        <SourcingSupportCards />
      </div>
    </section>
  )
}
