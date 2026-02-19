
import Hero from "@/components/home/Hero";
import OurAddress from "@/components/home/OurAddress";
import OverlapSection from "@/components/home/OverlapSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";


export default function HomePage() {
    return (
        <>
            <Hero highlightText="Asia and Europe" />
            <OverlapSection />
            <WhatWeDoSection />
            <OurAddress/>
        </>
    )
}
