import type { StaticImageData } from "next/image"
import newsImage1 from "@/public/news-image-1.png"
import newsImage2 from "@/public/news-image-2.png"

export type BlogPost = {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  image: StaticImageData
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "New EU Medical Device Regulation What Exporters Need To Know",
    excerpt:
      "The updated MDR framework introduces stricter compliance requirements for healthcare product imports. Here is a breakdown of the key changes effective March 2026.",
    category: "Regulations & Tips",
    date: "Feb 12, 2026",
    author: "Sarah Mitchell",
    image: newsImage1,
  },
  {
    id: 2,
    title: "Southeast Asian Electronics Market Sees Record Growth In Q1 2026",
    excerpt:
      "Export volumes from Vietnam and Thailand surged by 18% year-over-year, driven by increased demand for semiconductor components and consumer electronics across European markets.",
    category: "Trade Updates",
    date: "Feb 08, 2026",
    author: "Daniel Tan",
    image: newsImage2,
  },
]

