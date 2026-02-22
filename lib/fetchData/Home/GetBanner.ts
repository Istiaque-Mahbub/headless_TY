
import { GraphQLClient, gql } from "graphql-request";
import { parse } from "node-html-parser";

// TypeScript type for banner data
export interface Banner {
  title: string;
  description: string;
  image: { url: string; alt: string };
  button: { text: string; href: string };
}

// GraphQL query to fetch homepage content
export const GET_HOMEPAGE = gql`
  query GetHomePage {
    page(id: "home", idType: URI) {
      id
      title
      content
    }
  }
`;

// Function to parse HTML and extract banner-section
export function extractBanner(html: string): Banner | null {
  const root = parse(html);

  // Find the outermost banner-section group (first one)
  const bannerGroup = root.querySelector(".banner-section");
  if (!bannerGroup) return null;

  // Extract paragraphs inside this banner group
  const paragraphs = bannerGroup.querySelectorAll("p");
  const title = paragraphs[0]?.text.replace(/\n/g, " ").trim() || "";
  const description = paragraphs[1]?.text.replace(/\n/g, " ").trim() || "";

  // Extract the first image inside this banner group
  const img = bannerGroup.querySelector("img");
  const imageUrl = img?.getAttribute("src") || "";
  const imageAlt = img?.getAttribute("alt") || "";

  // Extract the first button inside this banner group
  const buttonEl = bannerGroup.querySelector(".wp-block-button a");
  const buttonText = buttonEl?.text || "";
  const buttonHref = buttonEl?.getAttribute("href") || "#";

  return {
    title,
    description,
    image: { url: imageUrl, alt: imageAlt },
    button: { text: buttonText, href: buttonHref },
  };
}

// Function to fetch homepage content and extract banner
