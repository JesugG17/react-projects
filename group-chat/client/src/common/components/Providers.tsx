import { AuthModalProvider } from '@context/auth-modal/AuthModalProvider';
import { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const Providers: FC<Props> = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthModalProvider>{children}</AuthModalProvider>
    </BrowserRouter>
  );
};

type Props = PropsWithChildren;
