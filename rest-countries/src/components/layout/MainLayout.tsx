import { PropsWithChildren, FC } from 'react';
import { Header } from '../ui/Header';

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className='w-full min-h-screen dark:bg-background-dark'>
        <Header />
        { children }
    </div>
  )
}

type Props = PropsWithChildren;
