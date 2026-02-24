import NewsHero from "@/components/news-and-insights/NewsHero"
import ArticleOverview from "@/components/news-and-insights/ArticleOverview"
import BlogGrid from "@/components/news-and-insights/BlogGrid"
import BlogShowcase from "@/components/news-and-insights/BlogShowcase"
import NewsletterBanner from "@/components/news-and-insights/NewsletterBanner"
import Head from "next/head"


export default function NewsAndInsightsPage() {
    return (
       <>
       <Head>
        <title>News & Insights | TY International</title>
        <meta name="description" content="Stay updated with the latest news and insights from TY International." />
       </Head>
        <main className="relative flex flex-col ">
            <NewsHero />
            <ArticleOverview />
            <BlogGrid />
            <BlogShowcase />
            <NewsletterBanner />
        </main>
       </>
    )
}