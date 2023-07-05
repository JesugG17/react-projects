import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CountryApp } from './CountryApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CountryApp />
  </React.StrictMode>,
)
