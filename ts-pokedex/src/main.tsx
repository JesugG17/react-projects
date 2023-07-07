import React from 'react'
import ReactDOM from 'react-dom/client'
import { Pokedex } from './Pokedex'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <Pokedex />
    </QueryClientProvider>
  </React.StrictMode>,
)
