import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router/Router'

import './index.css'
import { JobsProvider } from './context/JobsProvider'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <JobsProvider>
      <RouterProvider router={ Router }/>
    </JobsProvider>
  </React.StrictMode>,
)
