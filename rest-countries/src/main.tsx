import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppRouter } from './router/AppRouter';
import { Providers } from './components/providers/Providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <Providers>
      <AppRouter />
    </Providers>
  // </React.StrictMode>,
)
