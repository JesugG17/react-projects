import { FC } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { IS_DEVELOPMENT } from '../../constants/isDevelopment';

export const Router: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {IS_DEVELOPMENT ? (
        <BrowserRouter>{children}</BrowserRouter>
      ) : (
        <HashRouter>{children}</HashRouter>
      )}
    </>
  );
};
