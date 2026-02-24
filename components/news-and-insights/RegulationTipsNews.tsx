"use client"

import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"

export default function RegulationTipsNews() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        // 1️⃣ Get category ID by slug
        const catRes = await fetch(
          "http://try-headless.local/wp-json/wp/v2/categories?slug=regulations-tips"
        )
        if (!catRes.ok) throw new Error("Failed to fetch category")
        const catData = await catRes.json()

        if (!catData.length) {
          setPosts([])
          return
        }

        const categoryId = catData[0].id

        // 2️⃣ Fetch posts in that category with _embed & per_page=6
        const res = await fetch(
          `http://try-headless.local/wp-json/wp/v2/posts?categories=${categoryId}&_embed&per_page=6`
        )
        if (!res.ok) throw new Error("Failed to fetch posts")
        const data = await res.json()

        if (!data.length) {
          setPosts([])
          return
        }

        // 3️⃣ Map posts into usable format
        const formattedPosts = data.map((post: any) => ({
          id: post.id,
          slug: post.slug,
          image:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          title: post.title?.rendered || "No title",
          description: post.excerpt?.rendered.replace(/<[^>]*>/g, "") || "",
          category:
            post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized",
          date: new Date(post.date).toLocaleDateString(),
          author: post._embedded?.author?.[0]?.name || "Unknown",
        }))

        setPosts(formattedPosts)
      } catch (err) {
        console.error(err)
        setPosts([])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading)
    return <p className="text-center py-8 text-gray-500">Loading posts...</p>

  if (!posts.length)
    return <p className="text-center py-8 text-gray-500">No posts found.</p>

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8 py-8">
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  )
}