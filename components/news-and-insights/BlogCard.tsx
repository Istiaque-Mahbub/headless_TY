"use client"
import Image, { type StaticImageData } from "next/image"
import arrowIcon from "@/public/up right.svg"

type BlogCardProps = {
  image: StaticImageData
  title: string
  description: string
  category: string
  date?: string
  author?: string
}

export default function BlogCard({
  image,
  title,
  description,
  category,
  date,
  author,
}: BlogCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-blue-50 transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
      <div className="overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt={title}
          className="h-auto w-full object-cover transition-transform duration-200 hover:scale-[1.03]"
          placeholder="blur"
        />
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-4 sm:px-7 sm:pb-7 sm:pt-5">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="inline-flex rounded-sm bg-gray-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-900">
            {category}
          </span>
          {date ? (
            <span className="text-xs text-gray-500 sm:text-sm">{date}</span>
          ) : (
            <span />
          )}
        </div>

        <h3 className="mt-4 text-lg font-semibold leading-snug text-gray-900 sm:text-xl">
          {title}
        </h3>

        <p
          className="mt-3 flex-1 text-sm leading-relaxed text-gray-700 overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          {author ? (
            <span className="text-xs font-medium text-gray-500 sm:text-sm">
              By {author}
            </span>
          ) : (
            <span />
          )}

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[#1F3A93] px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-colors hover:bg-[#1F3A93]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-[#1F3A93]"
            aria-label={`Read full article: ${title}`}
          >
            <span>Read Full Article</span>
            <Image
              src={arrowIcon}
              alt=""
              width={16}
              height={16}
              className="h-4 w-4"
            />
          </button>
        </div>
      </div>
    </article>
  )
}
