import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppProps } from 'next/app';

import '@/styles/globals.scss';

const queryClient = new QueryClient();
const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default App;
