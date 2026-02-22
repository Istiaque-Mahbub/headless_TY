
import Hero from "@/components/home/Hero"
import OurAddress from "@/components/home/OurAddress"
import OverlapSection from "@/components/home/OverlapSection"
import WhatWeDoSection from "@/components/home/WhatWeDoSection"
import RequestQuoteSection from "@/components/home/RequestQuoteSection"

export default function HomePage() {
    return (
        <div className="relative">
            <Hero highlightText="Asia and Europe" />
            <OverlapSection />
            <WhatWeDoSection />
            <OurAddress />
            <RequestQuoteSection />
        </div>
    )
}
