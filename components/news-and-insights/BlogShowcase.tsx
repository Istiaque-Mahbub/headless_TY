"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"

import TradeUpdatesNews from "./TradeUdatesNews"
import AllNews from "./All-News"
import RegulationTipsNews from "./RegulationTipsNews"
import IndustryNews from "./IndustryNews"
import SupplierBuyerNews from "./SupplierBuyerNews"

const categories = [
  "All",
  "Trade Updates",
  "Industry News",
  "Regulations & Tips",
  "Supplier & Buyer",

]

export default function BlogShowcase() {
  const [activeCategory, setActiveCategory] = useState("All")

  const renderComponent = () => {
    switch (activeCategory) {
      case "Trade Updates":
        return <TradeUpdatesNews />
      case "Industry News":
        return <IndustryNews />
      case "Regulations & Tips":
        return <RegulationTipsNews />
      case "Supplier & Buyer":
        return <SupplierBuyerNews />
      default:
        return <AllNews />
    }
  }

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-[135px] lg:py-[64px]">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Latest <span className="text-[#1F3A93]">Articles</span>
          </h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Explore our latest insights, industry updates, and expert perspectives.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition",
                activeCategory === category
                  ? "bg-[#1F3A93] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Render Posts */}
        {renderComponent()}
      </div>
    </section>
  )
}