import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QuizApp } from './QuizApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>,
)
