import { createContext } from 'react'

type ContexType = {
    darkTheme: boolean;
    toggleDarkTheme: () => void;
}

export const ThemeContext = createContext<ContexType>({} as ContexType);