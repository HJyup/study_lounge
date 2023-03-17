import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import React from "react";
import CoursePage from "@/components/pages/course-page";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return(
      <QueryClientProvider client={queryClient}>
        <CoursePage />
      </QueryClientProvider>
  )
}
