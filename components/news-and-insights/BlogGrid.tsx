"use client"

import { useEffect, useState } from "react"
import BlogCard from "@/components/news-and-insights/BlogCard"

export default function BlogGrid() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          "http://try-headless.local/wp-json/wp/v2/posts?per_page=2&_embed"
        )
        if (!res.ok) throw new Error("Failed to fetch posts")
        const data = await res.json()
        console.log(data)
        setPosts(
          data.map((post: any) => ({
            id: post.id,
            slug: post.slug,
            image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
            title: post.title?.rendered || "Untitled",
            description: post.excerpt?.rendered.replace(/<[^>]*>/g, "") || "",
            category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized",
            date: new Date(post.date).toLocaleDateString(),
            author: post._embedded?.author?.[0]?.name || "Unknown",
          }))
        )
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) return <p>Loading...</p>
  if (!posts.length) return <p>No posts found.</p>

  return (
    <section className="w-full mt-10 md:mt-5 bg-white px-4 pb-16 sm:px-6 lg:px-[135px] lg:pb-[80px]">
      <div className="mx-auto w-full max-w-[1442px]">
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
              category={post.category}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </section>
  )
}