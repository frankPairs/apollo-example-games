import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { apolloClient } from './apolloClient';

function StoreProvider({ children }) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}

export default StoreProvider;
