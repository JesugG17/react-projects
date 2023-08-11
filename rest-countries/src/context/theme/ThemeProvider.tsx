import { FC, PropsWithChildren, useState } from 'react';
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: FC<Props> = ({ children }) => {

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{
      isDarkTheme,
      toggleDarkTheme
    }}>
      { children }
    </ThemeContext.Provider>
  )
}

type Props = PropsWithChildren;
