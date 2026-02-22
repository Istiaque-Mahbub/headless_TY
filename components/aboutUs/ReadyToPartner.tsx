import Image from "next/image"
import { Button } from "@/components/ui/button"
import contactUsIcon from "@/public/up right.svg";
import { fetchAboutUsData } from "@/lib/fetchData/aboutUs/fetchAboutUsData"
import { extractReadyToPartner } from "@/lib/fetchData/aboutUs/extractReadyToPartner"

export async function ReadyToPartnerSection() {
  // Fetch data dynamically
  const data = await fetchAboutUsData(extractReadyToPartner)

  if (!data) {
    return <div>Content not found</div>
  }

  const { image, heading, subtext, buttonText } = data

  return (
    <section className="py-16 h-[500px]">
      <div className="container mx-auto px-4" >
        <div className="relative overflow-hidden rounded-2xl "
        style={{ background: "linear-gradient(100.35deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 100%)", }}>
          {/* Background Image */}
          {image && (
            <div className="relative h-[420px] w-full">
              <Image
                src={image.src}
                alt={image.alt || "Ready to Partner"}
                fill
                priority
                className="object-cover"
                unoptimized
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-4">
                <h2 className="text-5xl md:text-5xl font-bold text-white leading-tight">
                  {heading.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h2>

                <p className="mt-4 text-white/80 text-lg max-w-xl">{subtext}</p>

                {buttonText && (
                  <Button className="mt inline-flex items-center gap-2 rounded-full bg-[#1F3A93] z-99 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#1F3A93]/90">
            <span>{buttonText || "Contact Us"}</span>
            <Image
              src={contactUsIcon}
              alt="Contact us"
              width={16}
              height={16}
              className="h-4 w-4 z-99"
            />
          </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}