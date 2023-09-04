import { FC, PropsWithChildren, useState } from 'react';
import { AuthModalContext } from './AuthModalContext';

export const AuthModalProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AuthModalContext.Provider
      value={{
        isOpen,
        toggleModal,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

type Props = PropsWithChildren;
