import { AuthModalContext } from '@context/auth-modal/AuthModalContext';
import { useContext } from 'react';

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);

  if (context == undefined) {
    throw new Error('You must envolve the application into a AuthModalProvider');
  }

  return context;
};
