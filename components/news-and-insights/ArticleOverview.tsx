"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import arrowIcon from "@/public/up right.svg"

interface WPPost {
  id: number
  date: string
  link: string
  title: { rendered: string }
  excerpt: { rendered: string }
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[]
    "wp:term"?: { name: string }[][]
  }
}

export default function ArticleOverview() {
  const [post, setPost] = useState<WPPost | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const slug = "new-trade-corridors-opening-between-bangladesh-and-europe"
        const res = await fetch(
          `http://try-headless.local/wp-json/wp/v2/posts?slug=${slug}&_embed`
        )
        if (!res.ok) throw new Error("Failed to fetch post")
        const data: WPPost[] = await res.json()
      console.log(data)
        if (data.length > 0) setPost(data[0])
      } catch (error) {
        console.error(error)
      }
    }
    fetchPost()
  }, [])

  if (!post) return null

  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.png"
  const categoryName = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "News"

  return (
    <section className="relative mt-50  w-full bg-white px-4 sm:px-6 lg:px-[135px]">
      <div className="mx-auto w-full max-w-[1442px]">
        <div
          className="relative mx-auto flex w-full max-w-[1180px] flex-col gap-8"
          style={{ transform: "translateY(-40%)" }}
        >
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src={featuredMedia}
              alt={post.title.rendered}
              className="h-auto w-full object-cover"
              width={740}
              height={740}
              priority
              unoptimized
            />
          </div>

          <div className="-mb-46">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm gap-2 sm:gap-0">
              <span className="inline-flex rounded-sm bg-gray-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-black">
                {categoryName}
              </span>
              <span className="text-xs text-gray-600 sm:text-sm">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-semibold leading-snug text-black sm:text-3xl lg:text-[32px]">
              {post.title.rendered.split(" ").map((word, idx) =>
                idx === post.title.rendered.split(" ").length - 2 ? (
                  <span key={idx} className="text-[#1F3A93]">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h2>

            <div
              className="mt-3 max-w-[900px] text-sm leading-relaxed text-gray-700 sm:text-base"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />

            <a
              href={post.link}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1F3A93] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#1F3A93]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-[#1F3A93]"
              aria-label="Read full article"
            >
              <span>Read Full Article</span>
              <Image src={arrowIcon} alt="" width={16} height={16} className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}