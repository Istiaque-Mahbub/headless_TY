import { extractAboutUsTitleSubtitle } from "@/lib/fetchData/aboutUs/extractTitleSubtitle"
import { ReuseableBanner } from "../shared/resueableBanner"
import { fetchAboutUsData } from "@/lib/fetchData/aboutUs/fetchAboutUsData"


export default async function AboutUsBannerPage() {
  const data = await fetchAboutUsData(extractAboutUsTitleSubtitle)

  if (!data) {
    return <div>Content not found</div>
  }

  return (
    <ReuseableBanner
      title={data.title}
      highlight="Us"   // 👈 YOU control this
      description={data.subtitle}
      highlightClassName="text-indigo-900"
    />
  )
}