import HomeNavbar from "./HomeNavbar"
import Hero from "./Hero"
import OverlapSection from "./OverlapSection"
import WhatWeDoSection from "./WhatWeDoSection"
import GlobeSection from "./GlobeSection"
import RequestQuoteSection from "./RequestQuoteSection"

export default function HomePage() {
  return (
    <>
      <HomeNavbar />
      <Hero
        title="Bridging Asia And Europe"
        highlight="With Reliable Global Trade"
        subtitle="High-quality sourcing, dependable logistics, and efficient export services bridging global markets with integrity."
      />
      <OverlapSection />
      <WhatWeDoSection />
      <GlobeSection />
      <RequestQuoteSection />
    </>
  )
}
