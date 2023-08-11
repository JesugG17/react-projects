import { useTheme } from "../../hooks/useTheme"

export const MoonIcon = () => {
  const { isDarkTheme } = useTheme();
  return (
    <img className={`w-6 h-6 ${ isDarkTheme && 'invert'}`} src="/img/moon.png" alt="Moon icon" />
  )
}

export const SearchIcon = () => {
  const { isDarkTheme } = useTheme();
  return (
    <img className={`w-5 h-5 ${ isDarkTheme && 'invert'}`} src="/img/search.svg" alt="Search icon" />
  )
}

export const LeftArrowIcon = () => {
  const { isDarkTheme } = useTheme();
  return (
    <img className={`w-4 h-4 ${ isDarkTheme && 'invert'}`} src="/img/left-arrow.png" alt="Left arrow icon" />
  )
}

export const SadFaceIcon = () => {
  const { isDarkTheme } = useTheme();
  return (
    <img className={`w-16 h-16 ${ isDarkTheme && 'invert'}`} src="/img/sad.png" alt="Sad face icon" />
  )
}