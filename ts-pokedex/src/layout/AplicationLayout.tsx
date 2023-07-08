import { FC, PropsWithChildren } from "react"
import { Navbar } from '../components/Navbar';

export const AplicationLayout: FC<Props>  = ({ children }) => {
  return (
    <main className="main__container">
        <Navbar />
        { children }
    </main>
  )
}

type Props = PropsWithChildren
