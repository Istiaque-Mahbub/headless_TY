"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import Logo from "@/components/shared/Logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import contactUsIcon from "@/public/up right.svg"

const navItems = [
  { label: "About Us", href: "#" },
  { label: "Products & Services", href: "#" },
  { label: "Markets", href: "#" },
  { label: "News", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Account", href: "#" },
]

export default function HomeNavbar() {
  return (
    <header className="w-full bg-gradient-to-r from-[#32C7AF] via-[#37C1A4] to-[#2E9E8E] text-white">
      <div className="mx-auto flex h-16 w-full max-w-[1170px] items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-medium lg:gap-8 lg:text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative transition hover:opacity-80"
            >
              {item.label}
            </Link>
          ))}

          <Button className="flex items-center gap-2 rounded-full bg-[#1F3A93] px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#1F3A93]/90">
            <span>Contact Us</span>
            <Image
              src={contactUsIcon}
              alt="Contact us"
              width={16}
              height={16}
              className="h-4 w-4"
            />
          </Button>
        </nav>

        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 border-l border-white/10 bg-gradient-to-b from-[#32C7AF] via-[#37C1A4] to-[#2E9E8E] text-white"
            >
              <div className="mt-10 flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="mt-4 flex items-center gap-2 rounded-full bg-[#1F3A93] px-5 py-2 text-sm font-semibold text-white hover:bg-[#1F3A93]/90">
                  <span>Contact Us</span>
                  <Image
                    src={contactUsIcon}
                    alt="Contact us"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
