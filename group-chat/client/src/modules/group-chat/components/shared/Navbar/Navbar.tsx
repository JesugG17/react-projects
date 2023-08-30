import { useEffect, useState } from 'react';
import { ChatIcon, CloseMenuIcon, MenuIcon } from '../Icons';
import { Link } from 'react-router-dom';
import { DropMenu } from './DropMenu';
import { useIsMinWidth } from '@hooks/useIsMinWidth';
import { TABLET_WIDTH } from '@utils/constants/window.constants';
import { useAuthStore } from '@store/auth/authStore';
import { useAuthModal } from '@hooks/useAuthModal';
export const Navbar = () => {
  const status = useAuthStore((state) => state.status);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMinWidth = useIsMinWidth(TABLET_WIDTH);
  const { toggleModal } = useAuthModal();

  const isAuthorized = status === 'authorized';

  useEffect(() => {
    setIsMenuOpen(false);
  }, [isMinWidth]);

  return (
    <header className='relative'>
      <nav className='bg-black p-4 flex justify-between text-white'>
        <Link to='/home ' className='flex items-center'>
          <ChatIcon />
          <p>Group chat</p>
        </Link>
        <div className='hidden text-white md:flex md:items-center gap-5 text-lg'>
          <Link to='/home'>Home</Link>
          <Link to='/chats'>Chats</Link>
        </div>
        {isAuthorized ? (
          <button className='hidden md:block'>Sign out</button>
        ) : (
          <button className='hidden md:block' onClick={toggleModal}>
            Sign up
          </button>
        )}
        <div className='flex items-center md:hidden' onClick={() => setIsMenuOpen((previous) => !previous)}>
          {!isMenuOpen ? <MenuIcon /> : <CloseMenuIcon />}
        </div>
      </nav>
      <DropMenu isMenuOpen={isMenuOpen} />
    </header>
  );
};
