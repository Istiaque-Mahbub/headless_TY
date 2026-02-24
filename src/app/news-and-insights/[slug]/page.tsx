"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"

interface Post {
  id: number
  date: string
  title: { rendered: string }
  content: { rendered: string }
  featured_media: number
}

interface Media {
  id: number
  source_url: string
  alt_text: string
}

export default function NewsAndInsightsDetailsPage() {
  const params = useParams()
  const slug = params?.slug as string

  const [post, setPost] = useState<Post | null>(null)
  const [featuredMedia, setFeaturedMedia] = useState<Media | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    const fetchPost = async () => {
      try {
        // Fetch the post by slug
        const res = await fetch(
          `http://try-headless.local/wp-json/wp/v2/posts?slug=${slug}`
        )
        const data = await res.json()
        const fetchedPost: Post = data[0] || null
        setPost(fetchedPost)

        // Fetch the featured image if available
        if (fetchedPost?.featured_media) {
          const mediaRes = await fetch(
            `http://try-headless.local/wp-json/wp/v2/media/${fetchedPost.featured_media}`
          )
          const mediaData: Media = await mediaRes.json()
          setFeaturedMedia(mediaData)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-xl font-semibold text-[#1F3A93]">
        Loading article...
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-xl font-semibold text-red-500">
        Article not found.
      </div>
    )
  }

  const title = post.title?.rendered
  const content = post.content?.rendered

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className="bg-white">
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-r from-[#32C7AF] via-[#37C1A4] to-[#2E9E8E] py-20 sm:py-24">
        <div className="mx-auto max-w-[1000px] px-4 text-center text-white">
          <p className="mb-4 text-sm uppercase tracking-wider opacity-90">
            News & Insights
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          {/* Publish date styled lighter */}
          <p className="mt-4 text-sm font-semibold underline hover:text-gray-500 text-black">Published: {formattedDate}</p>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      {featuredMedia && (
        <div className="relative mx-auto -mt-16 mb-16 w-full max-w-[1100px] px-4">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={featuredMedia.source_url}
              alt={featuredMedia.alt_text || title}
              width={1200}
              height={700}
              className="h-auto w-full object-cover"
              unoptimized
            />
          </div>
        </div>
      )}

      {/* CONTENT SECTION */}
      <section className="mx-auto max-w-[900px] px-4 pb-28">
        <div
          className="
            flex
            flex-col
            gap-6
            text-left
            text-gray-700
            leading-relaxed
            md:text-2xl
            sm:text-base
          "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>
    </article>
  )
}