import NewsHero from "@/components/news-and-insights/NewsHero"
import ArticleOverview from "@/components/news-and-insights/ArticleOverview"
import BlogGrid from "@/components/news-and-insights/BlogGrid"
import BlogShowcase from "@/components/news-and-insights/BlogShowcase"
import NewsletterBanner from "@/components/news-and-insights/NewsletterBanner"
import Footer from "@/components/shared/Footer"

export default function NewsAndInsightsPage() {
    return (
        <main className="relative flex flex-col ">
            <NewsHero />
            <ArticleOverview />
            <BlogGrid />
            <BlogShowcase />
            <NewsletterBanner />
            <Footer />
        </main>
    )
}
