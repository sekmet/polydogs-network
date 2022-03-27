import { ApolloProvider } from '@apollo/client';
import { DAppProvider } from '@usedappify/core';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import Script from 'next/script';

import { useApollo } from '@/services/apolloClient';
import { GRAPH_TESTNET_HTTPS_URI } from '@/utils/testnetConfig';

import '@/styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo({
    ...pageProps,
    network: {
      graphUri: GRAPH_TESTNET_HTTPS_URI,
    },
  });

  return (
    <SessionProvider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      session={pageProps.session}
    >
      <DAppProvider config={{}}>
        <ApolloProvider client={apolloClient}>
          <Script
            id="feather-icons-js"
            src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"
          />
          <Script
            id="uikit-js"
            src="https://cdn.jsdelivr.net/npm/uikit@3.13.4/dist/js/uikit.min.js"
          />
          <Component {...pageProps} />
        </ApolloProvider>
      </DAppProvider>
    </SessionProvider>
  );
};

export default MyApp;
