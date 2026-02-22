import parse from "node-html-parser"

export interface TitleSubtitleData {
  title: string
  subtitle: string
}

export function extractAboutUsTitleSubtitle(
  html: string
): TitleSubtitleData | null {
  const root = parse(html)

  // Get first container with title-subtitle class
  const container = root.querySelector(".title-subtitle")
  if (!container) return null

  const paragraphs = container.querySelectorAll("p")

  if (paragraphs.length < 2) return null

  const title = paragraphs[0].text.trim()
  const subtitle = paragraphs[1].text.trim()

  return {
    title,
    subtitle,
  }
}