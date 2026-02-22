import { Button } from "@/components/ui/button"
import { extractMissionVision } from "@/lib/fetchData/aboutUs/extractMissionAndVisionData"
import { fetchAboutUsData } from "@/lib/fetchData/aboutUs/fetchAboutUsData"
import Image from "next/image"
import contactUsIcon from "@/public/up right.svg";
export async function MissionAndVision() {
  const data = await fetchAboutUsData(extractMissionVision)
  console.log(data)

  if (!data) {
    return <div>Content not found</div>
  }

  const { heading, description, images, paragraphs, cta } = data

  // Defensive fallback for heading split
  const headingWords = heading ? heading.split(" ") : ["Our", "Mission", "&", "Vision"]
  const headingHighlight = headingWords.slice(1).join(" ")

  return (
    <section className="container mx-auto sm:px-12 py-16">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
          {headingWords[0]}{" "}
          <span className="text-indigo-700">{headingHighlight}</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
          {description}
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
        {/* Left Image */}
        <div className="relative w-full h-[320px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={images?.[0]?.src ?? ""}
            alt={images?.[0]?.alt ?? "Left image"}
            fill
            className="object-cover"
            sizes="(max-width: 270px) 100vw, 33vw"
            unoptimized
          />
        </div>

        {/* Middle Text & Button */}
        <div className="flex flex-col col-span-2 justify-center space-y-6 px-2 md:px-0">
          {paragraphs?.map((text: string, i: number) => (
            <p key={i} className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {text}
            </p>
          ))}

           <Button className="mt inline-flex items-center w-36 gap-2 rounded-full bg-[#1F3A93] z-99 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#1F3A93]/90">
            <span>{cta?.text ?? "Contact Us"}</span>
            <Image
              src={contactUsIcon}
              alt="Contact us"
              width={16}
              height={16}
              className="h-4 w-4 z-99"
            />
          </Button>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[320px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={images?.[1]?.src ?? ""}
            alt={images?.[1]?.alt ?? "Right image"}
            fill
            className="object-cover"
            sizes="(max-width: 270px) 100vw, 33vw"
            unoptimized
          />
        </div>
      </div>
    </section>
  )
}