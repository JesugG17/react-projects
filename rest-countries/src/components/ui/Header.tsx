import { MoonIcon } from "./Icons"

export const Header = () => {
  return (
    <header className="bg-primary-dark w-full text-white px-2 py-5 flex justify-between items-center shadow-lg">
      <h4 className="text-xs font-medium">Where in the  world?</h4>
      <button className="flex gap-3 items-center font-medium">
        <MoonIcon />
        Dark mode
      </button>
    </header>
  )
}
