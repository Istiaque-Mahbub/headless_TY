"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import contactUsIcon from "@/public/up right.svg"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Logo from "./Logo"

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-white font-semibold text-lg"
        >
          <Logo />
          <span className="text-[#1F3A93] text-xl">TY Law International</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-white text-sm font-medium">
          <Link href="#">About Us</Link>
          <Link href="#">Products & Services</Link>
          <Link href="#">Markets</Link>
          <Link href="#">News</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Careers</Link>
          <Link href="#" className="opacity-90">
            Account
          </Link>

          <Button className="rounded-full bg-[#1F3A93] py-4 px-3 text-white  flex items-center gap-2 transition">
            <span className="text-sm">Contact Us</span>
            <Image
              src={contactUsIcon}
              alt="arrow icon"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/20"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72">
            <nav className="flex flex-col gap-6 mt-10 text-base">
              <Link href="#">About Us</Link>
              <Link href="#">Products & Services</Link>
              <Link href="#">Markets</Link>
              <Link href="#">News</Link>
              <Link href="#">FAQ</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Account</Link>

              <Button className="rounded-full bg-blue-700 text-white flex items-center gap-2">
                <span>Contact Us</span>
                <Image
                  src={contactUsIcon}
                  alt="arrow icon"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
