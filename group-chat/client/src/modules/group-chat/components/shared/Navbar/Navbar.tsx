import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useIsMinWidth } from '@hooks/useIsMinWidth';
import { TABLET_WIDTH } from '@utils/constants/window.constants';
import { useAuthStore } from '@store/auth/authStore';
import { useAuthModal } from '@hooks/useAuthModal';
import { ChatIcon, CloseMenuIcon, MenuIcon } from '../Icons';
import { DropMenu } from './DropMenu';
export const Navbar = () => {
  const status = useAuthStore((state) => state.status);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMinWidth = useIsMinWidth(TABLET_WIDTH);
  const { toggleModal } = useAuthModal();
  const navigate = useNavigate();
  const isAuthorized = status === 'authorized';

  const handleClick = () => {
    if (!isAuthorized) {
      toast.info('You need to Sign in before to access here!', {
        position: 'top-center',
        theme: 'dark',
        autoClose: 2000,
      });
      return toggleModal();
    }

    navigate('/chats');
  };

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
          <button onClick={handleClick}>Chats</button>
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
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </header>
  );
};
