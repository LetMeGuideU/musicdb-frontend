import { ApolloClient, InMemoryCache, HttpLink, gql } from "apollo-boost";

export default async function getAlbums() {
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: "http://127.0.0.1:8000/graphql",
  });
  const client = new ApolloClient({
    link,
    cache,
  });

  return client.query({
    query: gql`
      {
        allAlbums {
          name
        }
      }
    `,
  });
}
