import parse from "node-html-parser"

export interface TeamMember {
  name: string
  position: string
  image: { src: string; alt: string }
}

export interface MeetOurTeamData {
  heading: string
  subtitle: string
  members: TeamMember[]
}

export function extractMeetOurTeam(html: string): MeetOurTeamData | null {
  const root = parse(html)

  // Find the meet-our-team container
  const container = root.querySelector(".meet-our-team")
  if (!container) return null

  // Heading & subtitle
  const titleContainer = container.querySelector(".title-subtitle")
  if (!titleContainer) return null

  const titleParagraphs = titleContainer.querySelectorAll("p")
  if (titleParagraphs.length < 2) return null

  const heading = titleParagraphs[0].text.trim()
  const subtitle = titleParagraphs[1].text.trim()

  // Team members
  const memberElements = container.querySelectorAll(
    ".member-one, .member-two, .member-third"
  )

  const members: TeamMember[] = memberElements.map(member => {
    const name = member.querySelectorAll("p")[0]?.text.trim() ?? ""
    const position = member.querySelectorAll("p")[1]?.text.trim() ?? ""
    const imgEl = member.querySelector("img")
    const image = {
      src: imgEl?.getAttribute("src") ?? "",
      alt: imgEl?.getAttribute("alt") ?? "",
    }

    return { name, position, image }
  })

  return {
    heading,
    subtitle,
    members,
  }
}