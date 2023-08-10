import { FC, PropsWithChildren, useState } from 'react';
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: FC<Props> = ({ children }) => {

  const [darkTheme, setDarkTheme] = useState(true);

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  }

  return (
    <ThemeContext.Provider value={{
      darkTheme,
      toggleDarkTheme
    }}>
      { children }
    </ThemeContext.Provider>
  )
}

type Props = PropsWithChildren;
