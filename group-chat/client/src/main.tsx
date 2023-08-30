import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouter } from './common/routes/home/AppRouter';
import { Providers } from './common/components/Providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <AppRouter />
    </Providers>
  </React.StrictMode>
);
