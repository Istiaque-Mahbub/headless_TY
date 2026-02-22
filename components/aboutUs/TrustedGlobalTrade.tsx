import { extractTrustedPartner } from "@/lib/fetchData/aboutUs/extractTrustedPartnerData"
import { fetchAboutUsData } from "@/lib/fetchData/aboutUs/fetchAboutUsData"
import Image from "next/image"

export async function TrustedPartnerSection() {
  const data = await fetchAboutUsData(extractTrustedPartner)
  
  if (!data) {
    return <div>Content not found</div>
  }

  // Map images by alt text
  const plane = data.images.find(img => img.alt.toLowerCase().includes("plane"))
  const truck = data.images.find(img => img.alt.toLowerCase().includes("truck"))
  const ship = data.images.find(img => img.alt.toLowerCase().includes("ship"))
  const container = data.images.find(img => img.alt.toLowerCase().includes("container"))

  // Filter out undefined safely using a type guard
  const leftImages = [plane, truck].filter(
    (img): img is { src: string; alt: string; className: string } => !!img
  )
  const rightImages = [ship, container].filter(
    (img): img is { src: string; alt: string; className: string } => !!img
  )

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {data.heading.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-indigo-700">
                {data.heading.split(" ").slice(-1)}
              </span>
            </h2>

            {data.paragraphs.map((para, i) => (
              <p key={i} className="mt-6 text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {data.features.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex gap-4">
            {/* LEFT column of images + 300+ stat */}
            <div className="flex flex-col gap-4 flex-1">
              {leftImages.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" unoptimized />
                </div>
              ))}

              {/* 300+ Stat below truck */}
              <div className="mt-6 text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-indigo-700">300+</h3>
                <p className="text-muted-foreground mt-2">Trade People</p>
              </div>
            </div>

            {/* RIGHT column: ship + container stacked */}
            <div className="flex flex-col gap-4 flex-1">
              {rightImages.map((img, i) => (
                <div key={i} className="relative flex-1 rounded-xl overflow-hidden min-h-0">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" unoptimized />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}