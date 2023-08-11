import { useTheme } from "../../hooks/useTheme"
import { MoonIcon } from "./Icons"

export const Header = () => {

  const { toggleDarkTheme, isDarkTheme } = useTheme();

  return (
    <header className={`w-full px-2 py-5 flex justify-between items-center shadow-lg text-xs md:text-base lg:text-lg md:px-10 lg:px-20 ${ isDarkTheme && 'bg-primary-dark text-white'}`}>
      <h4 className="font-medium">Where in the  world?</h4>
      <button 
        className="flex gap-3 items-center font-medium"
        onClick={toggleDarkTheme}
      >
        <MoonIcon />
        Dark mode
      </button>
    </header>
  )
}
