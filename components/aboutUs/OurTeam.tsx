import Image from "next/image"
import { fetchAboutUsData } from "@/lib/fetchData/aboutUs/fetchAboutUsData"
import { extractMeetOurTeam } from "@/lib/fetchData/aboutUs/extractTeamMember"


export async function OurTeamSection() {
  // Fetch team data dynamically
  const data = await fetchAboutUsData(extractMeetOurTeam)

  if (!data) {
    return <div>Content not found</div>
  }

  const { heading, subtitle, members } = data

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {heading.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-primary">
              {heading.split(" ").slice(-1)}
            </span>
          </h2>

          <p className="text-muted-foreground max-w-xl">{subtitle}</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col">
              {/* Image Card */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={member.image.src}
                  alt={member.name || member.image.alt || "Team member"}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Info */}
              <div className="mt-5">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}