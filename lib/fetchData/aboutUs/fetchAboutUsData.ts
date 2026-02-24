import { GraphQLClient, gql } from "graphql-request"

const endpoint =
  process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT ??
  "http://try-headless.local/graphql"

const GET_ABOUT_PAGE = gql`
  query GetAboutPage {
    page(id: "about-us", idType: URI) {
      id
      title
      content(format: RENDERED)
    }
  }
`

export async function fetchAboutUsData<T>(
  extractor: (html: string) => T | null
): Promise<T | null> {
  try {
    const client = new GraphQLClient(endpoint)

    const data = await client.request<{
      page: { content: string }
    }>(GET_ABOUT_PAGE)

    return extractor(data.page.content)
  } catch (error) {
    console.error("Failed to fetch About Us data from GraphQL endpoint", error)
    return null
  }
}
