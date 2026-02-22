import parse from "node-html-parser";

export interface OverlaySection {
  video: {
    url: string;
  };
  title: string;
  description1: string;
  description2: string;
  button: {
    text: string;
    href: string;
  };
}


export function extractOverlaySection(html: string): OverlaySection | null {
  const root = parse(html)
  const section = root.querySelector(".overlay-section")
  if (!section) return null

  // Video
  const videoEl = section.querySelector("video")
  const videoUrl = videoEl?.getAttribute("src") || "/ocean-video.mp4"

  // Paragraphs
  const paragraphs = section.querySelectorAll("p")
  const title = paragraphs[0]?.text.trim() || ""
  const description1 = paragraphs[1]?.text.trim() || ""
  const description2 = paragraphs[2]?.text.trim() || ""

  // Button
  const buttonEl = section.querySelector(".wp-block-button a")
  const buttonText = buttonEl?.text.trim() || "Know More"
  const buttonHref = buttonEl?.getAttribute("href") || "#"

  return {
    video: { url: videoUrl },
    title,
    description1,
    description2,
    button: { text: buttonText, href: buttonHref },
  }
}
