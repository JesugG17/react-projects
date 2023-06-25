import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Pokedex } from './Pokedex'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Pokedex />
  </React.StrictMode>,
)
