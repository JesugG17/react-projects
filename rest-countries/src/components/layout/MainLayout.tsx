import { PropsWithChildren, FC } from 'react';
import { Header } from '../ui/Header';
import { useTheme } from '../../hooks';

export const MainLayout: FC<Props> = ({ children }) => {
  const { isDarkTheme } = useTheme();
  return (
    <div className={`w-full min-h-screen ${isDarkTheme && 'bg-background-dark'}`}>
        <Header />
        { children }
    </div>
  )
}

type Props = PropsWithChildren;
