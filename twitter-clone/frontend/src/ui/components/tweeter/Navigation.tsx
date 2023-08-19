import { Link } from "react-router-dom"

export const Navigation = () => {
  return (
    <div className="flex items-center gap-12">
        <Link to='/home'>Home</Link>
        <Link to='/home'>Expore</Link>
        <Link to='/home'>Bookmarks</Link>
    </div>
  )
}
