"use client"

import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"

export default function SupplierBuyerNews() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Step 1: Get the category ID by slug
        const catRes = await fetch(
          "http://try-headless.local/wp-json/wp/v2/categories?slug=supplier-buyer"
        )
        if (!catRes.ok) throw new Error("Failed to fetch category")
        const catData = await catRes.json()

        if (!catData.length) {
          setPosts([])
          return
        }

        const categoryId = catData[0].id

        // Step 2: Fetch posts in that category
        const res = await fetch(
          `http://try-headless.local/wp-json/wp/v2/posts?categories=${categoryId}&_embed&per_page=6`
        )
        if (!res.ok) throw new Error("Failed to fetch posts")
        const data = await res.json()

        if (!data.length) {
          setPosts([])
          return
        }

        // Step 3: Map posts into usable format
        const formattedPosts = data.map((post: any) => ({
          id: post.id,
          slug: post.slug,
          image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          title: post?.title?.rendered,
          description: post?.excerpt?.rendered.replace(/<[^>]*>/g, ""),
          category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized",
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

  if (loading) {
    return (
      <p className="text-center text-gray-500 py-8">Loading posts...</p>
    )
  }

  if (!posts.length) {
    return (
      <p className="text-center text-gray-500 py-8">
        No posts found in this category.
      </p>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8 py-8">
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  )
}