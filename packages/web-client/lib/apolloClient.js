import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from
        "@apollo/client";

let apolloClient;

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === "undefined", // set to true for SSR
        link: new HttpLink({
            uri: `${API_URL}/graphql`,
        }),
        cache: new InMemoryCache(),
    });
}

export function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient ?? createApolloClient();

    if (initialState) {
        const existingCache = _apolloClient.extract();

        _apolloClient.cache.restore({ ...existingCache, ...initialState });
    }

    if (typeof window === "undefined") return _apolloClient;

    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
}

export function useApollo(initialState) {
    return useMemo(() => initializeApollo(initialState), [initialState]);
}