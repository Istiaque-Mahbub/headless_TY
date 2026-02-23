import BlogCard from "@/components/news-and-insights/BlogCard"
import { blogPosts } from "@/lib/news-and-insights/blogPosts"

export default function BlogGrid() {
  return (
    <section className="w-full bg-white px-4 pb-16 sm:px-6 lg:px-[135px] lg:pb-[80px]">
      <div className="mx-auto w-full max-w-[1442px]">
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              title={post.title}
              description={post.excerpt}
              category={post.category}
              date={post.date}
              author={post.author}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
