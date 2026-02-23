'use client'

import Image from "next/image"
import newsletterBg from "@/public/newsletter-bg.png"
import arrowIcon from "@/public/up right.svg"

export default function NewsletterBanner() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-[135px] lg:py-[64px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="relative h-[300px] w-full overflow-hidden rounded-[32px]">
          <Image
            src={newsletterBg}
            alt="Airplane flying at sunset"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/10" />

          <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 px-6 sm:flex-row sm:justify-between sm:px-10">
            <div className="max-w-mdpx-6 py-4">
              <h2 className="md:text-5xl font-semibold leading-tight text-white sm:text-[32px]">
                Subscribe To Our
                <br />
                Newsletter
              </h2>
            </div>

            <form
              className="flex w-full max-w-xl items-center gap-3"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter Email"
                className="h-12 flex-1 rounded-xl border border-transparent bg-white px-4 text-sm text-gray-900 shadow-sm outline-none ring-0 placeholder:text-gray-400 focus:border-[#1F3A93] focus:ring-2 focus:ring-[#1F3A93]"
              />
              <button
                type="submit"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1F3A93] text-white shadow-md transition-colors hover:bg-[#1F3A93]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-[#1F3A93]"
                aria-label="Subscribe to newsletter"
              >
                <Image
                  src={arrowIcon}
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
