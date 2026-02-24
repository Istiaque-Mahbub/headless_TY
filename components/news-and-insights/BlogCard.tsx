"use client"

import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type BlogCardProps = {
  image: StaticImageData | string | null
  title: string
  description: string
  category: string
  date?: string
  slug?: string
}

export default function BlogCard({
  image,
  title,
  description,
  category,
  date,
  slug,
}: BlogCardProps) {
  const hasImage =
    image && (typeof image === "string" ? image !== "" : true)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]">

      {/* Image */}
      {hasImage ? (
        <div className="relative h-[240px] w-full overflow-hidden">
          <Image
            src={image as string | StaticImageData}
            alt={title}
            fill
            unoptimized
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div className="flex h-[240px] w-full items-center justify-center bg-gray-200">
          <span className="text-gray-500">No image</span>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">

        {/* Category + Date */}
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            {category}
          </span>

          {date && (
            <span className="text-xs text-gray-500">
              {new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold leading-snug text-gray-900">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-gray-600 line-clamp-3">
          {description}
        </p>

        {/* Arrow Button */}
        {slug && (
          <div className="mt-auto flex justify-end pt-6">
            <Link
              href={`/news-and-insights/${slug}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F3A93] text-white transition hover:bg-[#162d73]"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </article>
  )
}