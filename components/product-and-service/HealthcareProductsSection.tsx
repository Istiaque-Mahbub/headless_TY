import Image from "next/image"
import { Check } from "lucide-react"

import healthcareImage from "@/public/health-care.png"

export default function HealthcareProductsSection() {
  return (
   <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
      9→      <div className="mx-auto flex w-full max-w-[1170px] flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12">
        10→        <div className="order-2 flex-1 lg:order-1">
          <div className="mb-4 flex flex-wrap items-baseline gap-2">
            <h2
              className="text-[32px] font-semibold leading-none tracking-[-0.96px] text-black sm:text-[40px] lg:text-[48px]"
              style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
            >
              Healthcare
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
            Our healthcare division provides reliable medical devices, personal care products,
            and healthcare consumables. We ensure all products meet stringent regulatory
            requirements for international markets.
          </p>

          <div className="mb-6 flex flex-wrap gap-4 text-sm leading-[150%] text-[rgba(0,0,0,0.60)] sm:text-base">
            <span style={{ fontFamily: '"Open Sans", system-ui, sans-serif' }}>
              Medical Devices
            </span>
            <span style={{ fontFamily: '"Open Sans", system-ui, sans-serif' }}>
              Consumables
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-gray-100">
              <h3
                className="mb-4 text-sm font-semibold text-[#101010] sm:text-base"
                style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
              >
                Medical Devices
              </h3>
              <ul className="space-y-2">
                {[
                  "Diagnostic Equipment",
                  "Patient Monitoring",
                  "Surgical Instruments",
                  "Therapeutic Devices",
                  "Rehabilitation Equipment",
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

            <div className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-gray-100">
              <h3
                className="mb-4 text-sm font-semibold text-[#101010] sm:text-base"
                style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
              >
                Consumables
              </h3>
              <ul className="space-y-2">
                {[
                  "Disposable Supplies",
                  "Protective Equipment",
                  "Hygiene Products",
                  "Laboratory Consumables",
                  "Wound Care Items",
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

        102→        <div className="order-1 flex-1 lg:order-2 lg:flex lg:justify-end">
          <div className="flex-shrink-0 w-full aspect-[57/59] rounded-3xl border border-[#1F3A93]/20 lg:w-[570px] lg:h-[590px] overflow-hidden">
            <Image
              src={healthcareImage}
              alt="Healthcare products airplane"
              className="h-full w-full object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
