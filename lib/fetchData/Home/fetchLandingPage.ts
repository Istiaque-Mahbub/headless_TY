import { GraphQLClient } from "graphql-request";
import { GET_HOMEPAGE } from "./GetBanner";

export async function fetchHomeData<T>(
  extractor: (html: string) => T | null
): Promise<T | null> {
  const endpoint = "http://try-headless.local/graphql"; // replace with your WP URL
  const client = new GraphQLClient(endpoint);

  const data = await client.request<{ page: { content: string } }>(GET_HOMEPAGE);

  // Use the passed extractor function
  const result = extractor(data.page.content);

  return result;
}