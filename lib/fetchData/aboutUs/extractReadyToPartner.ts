import parse from "node-html-parser"

export interface ReadyToPartnerData {
  image: {
    src: string
    alt: string
  } | null
  heading: string
  subtext: string
  buttonText: string
}

export function extractReadyToPartner(html: string): ReadyToPartnerData | null {
  const root = parse(html)

  // Find the ready-to-partner container
  const container = root.querySelector(".ready-to-partner")
  if (!container) return null

  // Image
  const imgEl = container.querySelector("img")
  const image = imgEl
    ? { src: imgEl.getAttribute("src") || "", alt: imgEl.getAttribute("alt") || "" }
    : null

  // Paragraphs
  const pElements = container.querySelectorAll("p")
  const heading = pElements[0]?.text.trim() ?? ""
  const subtext = pElements[1]?.text.trim() ?? ""

  // Button
  const buttonEl = container.querySelector(".wp-block-button__link")
  const buttonText = buttonEl?.text.trim() ?? ""

  return {
    image,
    heading,
    subtext,
    buttonText,
  }
}