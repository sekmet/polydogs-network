import { useMemo } from 'react';

import {
  ApolloClient,
  createHttpLink,
  ApolloLink,
  split,
} from '@apollo/client';
import { /* ApolloCache, */ InMemoryCache } from '@apollo/client/cache';
//import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import fetch from 'cross-fetch';
import { createClient } from 'graphql-ws';

import { getAuthenticationToken } from '@/utils/state';
import {
  GRAPH_TESTNET_HTTPS_URI,
  GRAPH_TESTNET_WSS_URI,
} from '@/utils/testnetConfig';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: any;

function createApolloClient(graphUri?: string, initialState?: any) {
  const authLink = new ApolloLink((operation, forward) => {
    const token = getAuthenticationToken();
    console.log('jwt token:', token);

    operation.setContext({
      headers: {
        'x-access-token': token ? `Bearer ${token}` : '',
      },
    });
    return forward(operation);
  });

  const httpLink = createHttpLink({
    uri: graphUri ?? GRAPH_TESTNET_HTTPS_URI,
    fetch,
  });

  /*const wsLink = process.browser
    ? new GraphQLWsLink(
        createClient({
          url: GRAPH_TESTNET_WSS_URI,
          lazy: true,
          keepAlive: 10_000, // ping server every 10 seconds
        })
      )
    : () => {
        console.log('SSR');
      };

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription' &&
        process.browser
      );
    },
    wsLink as ApolloLink,
    httpLink
  );*/

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
    ssrMode: !process.browser,
    connectToDevTools: true,
  });
}

export function initializeApollo(initialState = null, graphUri?: string) {
  const _apolloClient =
    apolloClient ?? createApolloClient(String(initialState), graphUri);

  /* if (initialState) {
    const existingCache = _apolloClient.extract()

    // @ts-ignore
    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })
    _apolloClient.cache.restore(data)
  } */

  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export const graphqlClient = initializeApollo(String(GRAPH_TESTNET_HTTPS_URI));

export const useApollo = (pageProps: any) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(
    () => initializeApollo(state, pageProps?.network?.graphUri),
    [state]
  );
  return store;
};
