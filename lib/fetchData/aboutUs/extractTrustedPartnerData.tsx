import parse from "node-html-parser"

export interface TrustedPartnerData {
  heading: string
  paragraphs: string[]
  features: { title: string; description: string }[]
  images: { src: string; alt: string; className: string }[]
}

export function extractTrustedPartner(html: string): TrustedPartnerData | null {
  const root = parse(html)

  // Find the trusted-partner container
  const container = root.querySelector(".trusted-partner")
  if (!container) return null

  // Heading (first <p>)
  const headingEl = container.querySelector("p")
  const heading = headingEl?.text.trim() || ""

  // All paragraphs inside container excluding feature titles/descriptions
  const paragraphEls = container.querySelectorAll("p")
  const paragraphs = paragraphEls
    .slice(1) // skip first heading <p>
    .filter(p => !p.closest(".first-card, .second-card, .thrid-card, .fouth-card"))
    .map(p => p.text.trim())

  // Feature cards
  const featureCards = ["first-card", "second-card", "thrid-card", "fouth-card"].map(
    cls => {
      const el = container.querySelector(`.${cls}`)
      if (!el) return null
      const ps = el.querySelectorAll("p")
      return {
        title: ps[0]?.text.trim() || "",
        description: ps[1]?.text.trim() || "",
      }
    }
  ).filter(Boolean) as { title: string; description: string }[]

  // Images inside figure.wp-block-image
  const imageEls = container.querySelectorAll("figure.wp-block-image img")
  const images = imageEls.map(img => ({
    src: img.getAttribute("src") || "",
    alt: img.getAttribute("alt") || "",
    className: img.getAttribute("class") || "",
  }))

  return {
    heading,
    paragraphs,
    features: featureCards,
    images,
  }
}