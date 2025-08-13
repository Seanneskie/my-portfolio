import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export function makeApolloClient() {
  return new ApolloClient({
    link: new HttpLink({ uri: "/api/graphql", fetch }),
    cache: new InMemoryCache(),
  });
}
