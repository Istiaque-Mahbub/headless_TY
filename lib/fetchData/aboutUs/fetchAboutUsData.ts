import { GraphQLClient,gql } from "graphql-request"

const endpoint = "http://try-headless.local/graphql"

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
  const client = new GraphQLClient(endpoint)

  const data = await client.request<{
    page: { content: string }
  }>(GET_ABOUT_PAGE)

  return extractor(data.page.content)
}