import parse from "node-html-parser"

export interface MissionVisionData {
  heading: string
  description: string
  images: { src: string; alt: string }[]
  paragraphs: string[]
  cta?: { text: string; url: string }
}

export function extractMissionVision(html: string): MissionVisionData | null {
  const root = parse(html)

  // Find the mission-vision container
  const container = root.querySelector(".mission-vision")
  if (!container) return null

  // Heading & main description
  const titleContainer = container.querySelector(".title-subtitle")
  if (!titleContainer) return null

  const titleParagraphs = titleContainer.querySelectorAll("p")
  if (titleParagraphs.length < 2) return null

  const heading = titleParagraphs[0].text.trim()
  const description = titleParagraphs[1].text.trim()

  // Images inside the mission-vision section
  const imageElements = container.querySelectorAll("img")
  const images = imageElements.map(img => ({
    src: img.getAttribute("src") || "",
    alt: img.getAttribute("alt") || "",
  }))

  // Additional paragraphs in the middle-section
  const middleSection = container.querySelector(".middle-section")
  const paragraphs: string[] = middleSection
    ? middleSection.querySelectorAll("p").map(p => p.text.trim())
    : []

  // CTA button
  const ctaElement = middleSection?.querySelector("a")
  const cta = ctaElement
    ? { text: ctaElement.text.trim(), url: ctaElement.getAttribute("href") || "#" }
    : undefined

  return {
    heading,
    description,
    images,
    paragraphs,
    cta,
  }
}