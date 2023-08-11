import { createContext } from 'react'

type ContexType = {
    isDarkTheme: boolean;
    toggleDarkTheme: () => void;
}

export const ThemeContext = createContext<ContexType>({} as ContexType);