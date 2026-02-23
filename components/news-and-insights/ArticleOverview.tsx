import Image from "next/image"
import largeNews from "@/public/large-image-news.png"
import arrowIcon from "@/public/up right.svg"
import BlogGrid from "./BlogGrid"

export default function ArticleOverview() {
  return (
    <section className="relative mt-20  w-full bg-white px-4  sm:px-6 lg:px-[135px] ">
      <div className="mx-auto w-full max-w-[1442px]">
        <div
          className="relative mx-auto flex w-full max-w-[1180px] flex-col gap-8"
          style={{ transform: "translateY(-40%)" }}
        >
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src={largeNews}
              alt="Featured news article"
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="-mb-46">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="inline-flex rounded-sm bg-gray-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-black">
                Trade Update
              </span>
              <span className="text-xs text-gray-600 sm:text-sm">
                Feb 21, 2026
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-semibold leading-snug text-black sm:text-3xl lg:text-[32px]">
              New Trade Corridors Opening Between{" "}
              <span className="text-[#1F3A93]">Bangladesh And Europe</span>
            </h2>

            <p className="mt-3 max-w-[900px] text-sm leading-relaxed text-gray-700 sm:text-base">
              Recent developments in Bangladesh&apos;s port infrastructure and new
              EU trade agreements are creating unprecedented opportunities for
              electronics and healthcare product exports. Learn how these changes
              could benefit your business.
            </p>

            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1F3A93] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#1F3A93]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-[#1F3A93]"
              aria-label="Read full article"
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
      </div>
    </section>
  )
}
