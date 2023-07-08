import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'
import { AppRouter } from './router/AppRouter';
import { AplicationLayout } from './layout/AplicationLayout';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <AplicationLayout>
        <RouterProvider router={AppRouter}/>
      </AplicationLayout>
    </QueryClientProvider>
  // </React.StrictMode>
)
