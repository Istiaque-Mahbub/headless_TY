import { ReuseableBanner } from "../shared/resueableBanner"


export default async function ContactUsBannerPage() {
 

  return (
    <ReuseableBanner
      title="Contact Us"
      highlight="Us"   // 👈 YOU control this
      description="We're here to answer your questions and discuss your international "
      highlightClassName="text-indigo-900"
    />
  )
}