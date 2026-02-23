import type { StaticImageData } from "next/image"
import blog1 from "@/public/blog1.png"
import blog2 from "@/public/blog2.png"
import blog3 from "@/public/blog3.png"
import blog4 from "@/public/blog4.png"
import blog5 from "@/public/blog5.png"
import blog6 from "@/public/blog6.png"

export type BlogShowcasePost = {
  id: number
  title: string
  description: string
  category: string
  image: StaticImageData
}

export const blogShowcasePosts: BlogShowcasePost[] = [
  {
    id: 1,
    title: "Intelligent Innovations: AI-Powered Solutions Reshape Healthcare Supply Chains",
    description:
      "From predictive inventory management to real-time cold chain monitoring, AI is transforming how healthcare products move across borders and reach hospitals faster.",
    category: "Industry Trends",
    image: blog1,
  },
  {
    id: 2,
    title: "TV Law Partners With Leading Shenzhen PCB Manufacturer",
    description:
      "A new strategic partnership in Shenzhen strengthens PCB sourcing for European electronics brands, improving lead times while maintaining strict quality standards.",
    category: "Supplier Insights",
    image: blog2,
  },
  {
    id: 3,
    title: "Export Documentation Checklist: Avoiding Common Customs Delays",
    description:
      "Incorrect declarations and missing certificates remain the top causes of port delays. Review this practical checklist before your next outbound shipment.",
    category: "Regulations & Tips",
    image: blog3,
  },
  {
    id: 4,
    title: "Global Chip Shortage Eases: New Predictions for Electronics Traders",
    description:
      "With new fabs coming online in Asia and Europe, pricing pressures are starting to stabilize. Here is what component buyers should expect in the next 12 months.",
    category: "Market Outlook",
    image: blog4,
  },
  {
    id: 5,
    title: "Verified Buyer Network Expands To Three New Markets",
    description:
      "Our vetted buyer network now includes partners in Eastern Europe, North Africa, and South America, opening new routes for mid-sized exporters.",
    category: "Trade Updates",
    image: blog5,
  },
  {
    id: 6,
    title: "Wearable Health Tech Demand Surges in North American Clinics",
    description:
      "Hospitals are rapidly adopting connected monitoring devices, creating new compliance and logistics challenges for cross-border distributors.",
    category: "Healthcare & MedTech",
    image: blog6,
  },
]

