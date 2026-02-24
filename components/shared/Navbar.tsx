"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
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
  { label: "About Us", href: "/about-us" },
  { label: "Products & Services", href: "/product-and-service" },
  { label: "Markets", href: "/markets-regions" },
  { label: "News & Insights", href: "/news-and-insights" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Careers", href: "#" },
  { label: "Account", href: "#" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="w-full px-5 bg-gradient-to-r from-[#32C7AF] via-[#37C1A4] to-[#2E9E8E] text-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex h-16 w-full lg:max-w-[1460px] items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-wrap items-center gap-6 text-sm font-medium" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = item.href !== "#" && pathname.startsWith(item.href)
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative whitespace-nowrap transition hover:opacity-80 ${isActive ? "text-[#1F3A93]" : "text-white"
                  }`}
              >
                {item.label}
              </Link>
            )
          })}
          <Link href="/contact-us">

            <Button className="flex items-center gap-2 rounded-full bg-[#1F3A93] px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#1F3A93]/90">
              <span>Contact Us</span>
              <Image
                src={contactUsIcon}
                alt="Contact us"
                width={16}
                height={16}
                className="h-4 w-4"
              />
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-64 max-w-[80vw] border-l border-white/10 bg-gradient-to-b from-[#32C7AF] via-[#37C1A4] to-[#2E9E8E] text-white p-6"
            >
              <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
                {navItems.map((item) => {
                  const isActive = item.href !== "#" && pathname.startsWith(item.href)
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`text-lg font-medium hover:underline ${isActive ? "text-[#1F3A93]" : "text-white"
                        }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}

                <Link href="/contact-us">
                  <Button className="mt-6 flex items-center gap-2 rounded-full bg-[#1F3A93] px-5 py-2 text-sm font-semibold text-white hover:bg-[#1F3A93]/90">
                    <span>Contact Us</span>
                    <Image
                      src={contactUsIcon}
                      alt="Contact us"
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
