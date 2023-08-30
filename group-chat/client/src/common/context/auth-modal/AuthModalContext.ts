import { createContext } from 'react';

type ContextSchema = {
  isOpen: boolean;
  toggleModal: () => void;
};

export const AuthModalContext = createContext<ContextSchema>({} as ContextSchema);
