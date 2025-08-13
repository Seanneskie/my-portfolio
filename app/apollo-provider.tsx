"use client";

import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { makeApolloClient } from "@/lib/apollo-client";

export default function ApolloWrapper({ children }: { children: ReactNode }) {
  const client = makeApolloClient();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
