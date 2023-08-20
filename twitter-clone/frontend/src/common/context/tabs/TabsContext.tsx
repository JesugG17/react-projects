import { createContext } from 'react';

type ContextSchema = {
  tabSelected: number;
  setTabSelected: React.Dispatch<React.SetStateAction<number>>;
};

export const TabsContext = createContext<ContextSchema>({} as ContextSchema);
