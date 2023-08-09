import { FC, PropsWithChildren } from 'react';
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{}}>
      { children }
    </ThemeContext.Provider>
  )
}

type Props = PropsWithChildren;
