import parse from "node-html-parser"

export interface JourneyCard {
  year: string
  title: string
  description: string
}

export interface OurJourneyData {
  heading: string
  subtitle: string
  cards: JourneyCard[]
}

export function extractOurJourney(html: string): OurJourneyData | null {
  const root = parse(html)

  // Find the our-journey container
  const container = root.querySelector(".our-journey")
  if (!container) return null

  // Heading & subtitle
  const titleContainer = container.querySelector(".title-subtitle")
  if (!titleContainer) return null

  const titleParagraphs = titleContainer.querySelectorAll("p")
  if (titleParagraphs.length < 2) return null

  const heading = titleParagraphs[0].text.trim()
  const subtitle = titleParagraphs[1].text.trim()

  // Cards (milestones)
  const cardElements = container.querySelectorAll(
    ".card-one, .card-two, .card-three, .card-four, .card-five"
  )

  const cards: JourneyCard[] = cardElements.map(card => {
    const pElements = card.querySelectorAll("p")
    const year = pElements[0]?.text.trim() ?? ""
    const title = pElements[1]?.text.trim() ?? ""
    const description = pElements[2]?.text.trim() ?? ""
    return { year, title, description }
  })

  return {
    heading,
    subtitle,
    cards,
  }
}