"use client"

import Image from "next/image"
import Link from "next/link"
import { FormEvent } from "react"

import tyLogo from "@/public/TY logo.png"
import globeImage from "@/public/globe.svg"
import upRightIcon from "@/public/up right.svg"

const mainNavItemClass =
  "font-[Montserrat] text-[16px] font-semibold leading-[150%] text-[var(--Color-White,#FFF)]"

const serviceChildClass =
  "text-justify text-[14px] font-['Open Sans'] font-normal leading-[140%] text-[rgba(255,255,255,0.60)]"

const bodyTextClass =
  "font-['Open Sans'] text-[16px] font-normal leading-[150%] text-[var(--Color-White,#FFF)]"

export default function Footer() {
  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <footer className="flex w-full justify-center bg-[#1F3A93] text-white">
      <div className="flex w-full max-w-[1440px] flex-col gap-10 px-4 pb-6 pt-16 sm:px-8 lg:px-[135px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)]">
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

          <nav aria-label="Footer navigation" className="flex flex-col gap-6">
            <ul className="space-y-2">
              <li>
                <Link href="#" className={mainNavItemClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className={mainNavItemClass}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className={mainNavItemClass}>
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className={mainNavItemClass}>
                  Markets
                </Link>
              </li>
            </ul>
            <div className="space-y-2 pt-2">
              <p className={mainNavItemClass}>Services &amp; Products</p>
              <ul className="space-y-1">
                <li className={serviceChildClass}>Electronics Products</li>
                <li className={serviceChildClass}>Healthcare Products</li>
                <li className={serviceChildClass}>Logistics Support</li>
              </ul>
            </div>
          </nav>

          <div className="flex flex-col gap-6">
            <nav aria-label="Markets we serve" className="space-y-2">
              <p className={mainNavItemClass}>Markets We Serve</p>
              <ul className="space-y-1">
                <li className={serviceChildClass}>Bangladesh</li>
                <li className={serviceChildClass}>Germany</li>
                <li className={serviceChildClass}>China</li>
                <li className={serviceChildClass}>Other Asian Markets</li>
                <li className={serviceChildClass}>European Markets</li>
              </ul>
            </nav>

            <nav aria-label="Contact info" className="space-y-2">
              <p className={mainNavItemClass}>Contact Info</p>
              <ul className="space-y-1">
                <li className={serviceChildClass}>Hongkong Office</li>
                <li className={serviceChildClass}>Address</li>
                <li className={serviceChildClass}>+86 0000000000</li>
                <li className={serviceChildClass}>contact@abc.com</li>
              </ul>
            </nav>
          </div>

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
                  className="flex-1 bg-transparent text-[14px] font-['Open Sans'] leading-[150%] text-[var(--Color-White,#FFF)] placeholder:text-white/60 outline-none"
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
              <p className="font-[Montserrat] text-[22px] font-semibold text-[var(--Color-White,#FFF)]">
                Follow Us
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  aria-label="Visit Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  F
                </button>
                <button
                  type="button"
                  aria-label="Visit LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  in
                </button>
                <button
                  type="button"
                  aria-label="Visit X"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between gap-4">
          <p className="flex-1 text-center font-[Montserrat] text-[12px] font-normal leading-[150%] text-[rgba(255,255,255,0.60)]">
            © 2026 TY LAW International. All rights reserved
          </p>
          <div className="relative hidden h-24 w-24 overflow-hidden rounded-full bg-white/5 sm:block">
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
