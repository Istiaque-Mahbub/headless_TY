import { Card, CardContent } from "@/components/ui/card"
import { extractOurJourney, OurJourneyData } from "@/lib/fetchData/aboutUs/extractJourneyCard"
import { fetchAboutUsData } from "@/lib/fetchData/aboutUs/fetchAboutUsData"


export default async function OurJourney() {
  // Fetch data dynamically
  const data: OurJourneyData | null = await fetchAboutUsData(extractOurJourney)

  if (!data) return <div>Content not found</div>

  const { heading, subtitle, cards } = data

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="lg:flex  mb-16 lg:container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            {heading.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-[#1F3A93]">
              {heading.split(" ").slice(-2).join(" ")}
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            {subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#1F3A93]" />

          <div className="flex flex-col gap-16">
            {cards.map((item, index) => {
              const isLeft = index % 2 === 0

              return (
                <div key={index} className="relative grid grid-cols-2 items-center">
                  {/* Left Side */}
                  <div className={`flex ${isLeft ? "justify-end pr-6" : "justify-start pl-6"}`}>
                    {isLeft && (
                      <Card className="w-full sm:w-[420px] shadow-sm">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-primary">{item.year}</h3>
                          <h4 className="mt-2 font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* Right Side */}
                  <div className={`flex ${!isLeft ? "justify-start pl-6" : "justify-end pr-6"}`}>
                    {!isLeft && (
                      <Card className="w-full sm:w-[420px] shadow-sm">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-primary">{item.year}</h3>
                          <h4 className="mt-2 font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1F3A93] border-4 border-[#CBD1E6] z-10" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}