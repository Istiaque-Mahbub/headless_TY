import parse from "node-html-parser";

export interface WhatWeDoSection {
  titleSubtitle: {
    heading: string;
    subtitle: string;
  };
  cards: {
    number: string;
    title: string;
    description: string;
  }[];
  image: {
    url: string;
    alt: string;
  } | null;
}

export function extractWhatWeDoSection(html: string): WhatWeDoSection | null {
  const root = parse(html);
  const wrapper = root.querySelector(".what-we-do");
  if (!wrapper) return null;

  // Extract title-subtitle block
  const titleSubtitleEl = wrapper.querySelector(".title-subtitle");
  if (!titleSubtitleEl) return null;

  const heading = titleSubtitleEl.querySelector("p")?.text.trim() || "";

  // The subtitle paragraph is inside the nested group below title-subtitle
  const subtitleEl = titleSubtitleEl.querySelector(".wp-block-group.has-global-padding p");
  const subtitle = subtitleEl?.text.trim() || "";

  // Extract cards - three cards identified by their classes
  const cardClasses = ["first-card", "second-card", "third-card"];
  const cards = cardClasses.map((cls) => {
    const cardEl = wrapper.querySelector(`.${cls}`);
    if (!cardEl) return null;

    // Card number is the first <p> inside the card group
    const number = cardEl.querySelector("p")?.text.trim() || "";

    // Card title - For second-card and third-card sometimes nested deeper, so grab first or second <p> accordingly
    // We'll look for a <p> that is not number
    let title = "";
    let description = "";

    // Find all <p> tags inside this card element
    const pTags = cardEl.querySelectorAll("p");

    // Find title: the first <p> that is not the number and not empty, usually the second <p>
    for (const p of pTags) {
      const text = p.text.trim();
      if (text && text !== number) {
        if (!title) {
          title = text;
        } else {
          description = text;
          break;
        }
      }
    }

    return { number, title, description };
  }).filter(Boolean) as {
    number: string;
    title: string;
    description: string;
  }[];

  // Extract image at the end inside <figure> with class wp-block-image
  const figure = wrapper.querySelector("figure.wp-block-image");
  let image = null;
  if (figure) {
    const img = figure.querySelector("img");
    if (img) {
      image = {
        url: img.getAttribute("src") || "",
        alt: img.getAttribute("alt") || "",
      };
    }
  }

  return {
    titleSubtitle: {
      heading,
      subtitle,
    },
    cards,
    image,
  };
}
