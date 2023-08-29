import { useEffect, useState } from 'react';
import { ChatIcon, CloseMenuIcon, MenuIcon } from '../Icons';
import { Link } from 'react-router-dom';
import { DropMenu } from './DropMenu';
import { useIsMinWidth } from '@hooks/useIsMinWidth';
import { TABLET_WIDTH } from '@utils/constants/window.constants';
export const Navbar = () => {
  const [tabSelected, setTabSelected] = useState({
    home: true,
    chats: false,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMinWidth = useIsMinWidth(TABLET_WIDTH);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [isMinWidth]);

  return (
    <header className='relative'>
      <nav className='bg-black p-4 flex justify-between text-white'>
        <div className='flex items-center'>
          <ChatIcon />
          <p>Group chat</p>
        </div>
        <div className='hidden text-white md:flex md:items-center gap-5 text-lg'>
          <Link to='#'>Home</Link>
          <Link to='#'>Chats</Link>
        </div>
        <button className='hidden md:block'>
          Sign out
        </button>
        <div className='flex items-center md:hidden' onClick={() => setIsMenuOpen((previous) => !previous)}>
          {!isMenuOpen ? <MenuIcon /> : <CloseMenuIcon />}
        </div>
      </nav>
      <DropMenu isMenuOpen={isMenuOpen} />
    </header>
  );
};
