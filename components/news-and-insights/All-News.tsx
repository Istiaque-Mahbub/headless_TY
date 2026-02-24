"use client"
import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"

export default function AllNews() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          "http://try-headless.local/wp-json/wp/v2/posts?per_page=6&_embed"
        )
        if (!res.ok) throw new Error("Failed to fetch posts")
        const data = await res.json()
    console.log(data)
        setPosts(
          data.map((post: any) => ({
            id: post.id,
            slug: post.slug,
            image:
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
            title: post.title.rendered,
            description: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
            category:
              post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized",
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

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  )
}