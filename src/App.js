import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Home from './screens/Home';
import client from './ApolloClient';

const App = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);

export default App;
