import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { FC } from 'react';
import { IS_DEVELOPMENT } from './constants/isDevelopment';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { FilterProvider } from './context/filter/FilterProvider';


export const Router: FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <>
    {
      IS_DEVELOPMENT
      ? (
        <BrowserRouter>
          { children }
        </BrowserRouter>
      )
      : (
        <HashRouter>
          { children }
        </HashRouter>
      )
    }
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <AppRouter />
      </FilterProvider>
    </Router>
  </React.StrictMode>,
)
