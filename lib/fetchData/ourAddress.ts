import parse from "node-html-parser"

export interface OurAddressData {
  titleSubtitle: {
    heading: string
    subtitle: string
  }
  country: string
  city: string
  image: {
    url: string
    alt: string
  } | null
}

export function extractOurAddressSection(html: string): OurAddressData | null {

  const root = parse(html)
  const section = root.querySelector(".our-address")
  if (!section) return null

  // Title and subtitle
  const titleEl = section.querySelector(".title-subtitle p:nth-child(1)")
  const subtitleEl = section.querySelector(".title-subtitle p:nth-child(2)")

  const heading = titleEl?.text.trim() || ""
  const subtitle = subtitleEl?.text.trim() || ""

  // Country and city
  const country = section.querySelector(".location .country")?.text.trim() || ""
  const city = section.querySelector(".location .city")?.text.trim() || ""

  // Image
  const imgEl = section.querySelector("figure img")
  const image = imgEl
    ? {
        url: imgEl.getAttribute("src") || "",
        alt: imgEl.getAttribute("alt") || "",
      }
    : null

  return {
    titleSubtitle: { heading, subtitle },
    country,
    city,
    image,
  }
}
