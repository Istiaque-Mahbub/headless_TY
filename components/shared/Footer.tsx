"use client"

import Image from "next/image"
import Link from "next/link"
import { FormEvent } from "react"

import tyLogo from "@/public/TY logo.png"
import globeImage from "@/public/globe.svg"
import upRightIcon from "@/public/up right.svg"

const mainNavItemClass =
  "font-[Montserrat] text-[16px] font-semibold leading-[150%] text-white"

const serviceChildClass =
  "text-justify text-[14px] font-['Open Sans'] font-normal leading-[140%] text-white/60"

const bodyTextClass =
  "font-['Open Sans'] text-[16px] font-normal leading-[150%] text-white"

export default function Footer() {
  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <footer className="w-full bg-[#1F3A93] text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 py-10 sm:px-8 lg:px-[135px]">
        {/* Main Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          {/* Logo & About */}
          <div className="flex flex-col gap-5">
            <Image
              src={tyLogo}
              alt="TY LAW International Limited"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
            <p className={`${bodyTextClass} text-justify`}>
              High-quality sourcing, dependable logistics, and efficient export
              services bridging global markets with integrity.
            </p>
            <div className="h-14 w-14 rounded-full bg-white/8" />
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-6">
            <ul className="space-y-2">
              {["Home", "About Us", "News", "Markets"].map((item) => (
                <li key={item}>
                  <Link href="#" className={mainNavItemClass}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-2 pt-2">
              <p className={mainNavItemClass}>Services &amp; Products</p>
              <ul className="space-y-1">
                {[
                  "Electronics Products",
                  "Healthcare Products",
                  "Logistics Support",
                ].map((item) => (
                  <li key={item} className={serviceChildClass}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Markets & Contact */}
          <div className="flex flex-col gap-6">
            <nav aria-label="Markets we serve" className="space-y-2">
              <p className={mainNavItemClass}>Markets We Serve</p>
              <ul className="space-y-1">
                {[
                  "Bangladesh",
                  "Germany",
                  "China",
                  "Other Asian Markets",
                  "European Markets",
                ].map((item) => (
                  <li key={item} className={serviceChildClass}>
                    {item}
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Contact info" className="space-y-2">
              <p className={mainNavItemClass}>Contact Info</p>
              <ul className="space-y-1">
                {[
                  "Hongkong Office",
                  "Address",
                  "+86 0000000000",
                  "contact@abc.com",
                ].map((item) => (
                  <li key={item} className={serviceChildClass}>
                    {item}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter & Social */}
          <div className="flex flex-col justify-between gap-8">
            <form
              onSubmit={handleSubscribe}
              className="space-y-4"
              aria-label="Subscribe newsletter"
            >
              <p className={mainNavItemClass}>Subscribe Newsletter</p>
              <label htmlFor="footer-email" className="sr-only">
                Enter email
              </label>
              <div className="flex items-center gap-3 border-b border-white/40 pb-2">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter Email"
                  className="flex-1 bg-transparent text-[14px] font-['Open Sans'] leading-[150%] text-white placeholder:text-white/60 outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F3A93] focus-visible:ring-white"
                  aria-label="Subscribe"
                >
                  <Image
                    src={upRightIcon}
                    alt=""
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5"
                  />
                </button>
              </div>
            </form>

            <div className="space-y-3">
              <p className="font-[Montserrat] text-[22px] font-semibold text-white">
                Follow Us
              </p>
              <div className="flex gap-3 flex-wrap">
                {["F", "in", "X"].map((icon) => (
                  <button
                    key={icon}
                    type="button"
                    aria-label={`Visit ${icon}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-[12px] font-[Montserrat] font-normal leading-[150%] text-white/60">
            © 2026 TY LAW International. All rights reserved
          </p>
          <div className="relative h-24 w-24 overflow-hidden rounded-full bg-white/5">
            <Image
              src={globeImage}
              alt=""
              fill
              className="object-cover opacity-70"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}