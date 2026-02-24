import { ReuseableBanner } from "../shared/resueableBanner";
import worldImage from "@/public/world-map.png"

export default function MarketsRegionsBannerSection() {
  return (
    <ReuseableBanner
      title="Markets & Regions"
      highlight="Regions"
      description="Bridging Asia and Europe with deep market expertise, regulatory knowledge, and end-to-end logistics capabilities."
      imageSrc={worldImage}
      imageAlt="Markets and Regions Map"
      imageWidth={1200}
      imageHeight={600}
      className="bg-[#36c1a5]"
    />
  )
}