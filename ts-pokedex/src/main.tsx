import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'
import { AplicationLayout } from './layout/AplicationLayout';
import { AppRouter } from './router/AppRouter';
import { RouterProvider } from 'react-router';
export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <AplicationLayout>
        <RouterProvider router={AppRouter}/>
      </AplicationLayout>
    </QueryClientProvider>
  // </React.StrictMode>
)
