import { Route, Routes } from "react-router"
import { HomePage } from "@modules/group-chat/pages/HomePage"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />}/>
    </Routes>
  )
}
