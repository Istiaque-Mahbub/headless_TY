import BlogCard from "@/components/news-and-insights/BlogCard"
import { blogShowcasePosts } from "@/lib/news-and-insights/blogShowcasePosts"

export default function BlogShowcase() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-[135px] lg:py-[64px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Latest <span className="text-[#1F3A93]">Articles</span>
          </h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Explore our latest insights, industry updates, and expert perspectives
            designed to keep you informed and ahead.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogShowcasePosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

