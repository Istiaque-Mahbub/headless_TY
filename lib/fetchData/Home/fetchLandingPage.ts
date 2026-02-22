import { GraphQLClient } from "graphql-request";
import { GET_HOMEPAGE } from "./GetBanner";

export async function fetchHomeData<T>(
  extractor: (html: string) => T | null
): Promise<T | null> {
  const endpoint =
    process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT ??
    "http://try-headless.local/graphql";

  try {
    const client = new GraphQLClient(endpoint);
    const data = await client.request<{ page: { content: string } }>(
      GET_HOMEPAGE
    );

    return extractor(data.page.content);
  } catch (error) {
    console.error("Failed to fetch home data from GraphQL endpoint", error);
    return null;
  }
}
