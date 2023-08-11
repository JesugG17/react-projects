import { FC, PropsWithChildren, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storage = localStorage.getItem('darkTheme');
    return storage === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkTheme', String(isDarkTheme));
  }, [isDarkTheme]);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

type Props = PropsWithChildren;
