import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import CoursePage from '@/components/pages/course-page';

import '@/styles/globals.scss';

const queryClient = new QueryClient();
const App = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <CoursePage />
    </QueryClientProvider>
  </>
);

export default App;
