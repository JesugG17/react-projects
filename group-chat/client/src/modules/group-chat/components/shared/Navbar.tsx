import { useState } from 'react';
import { ChatIcon, CloseMenuIcon, MenuIcon } from './Icons';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  const [tabSelected, setTabSelected] = useState({
    home: true,
    chats: false,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='relative'>
      <nav className='bg-black p-4 flex justify-between text-white'>
        <div className='flex items-center'>
          <ChatIcon />
          <p>Group chat</p>
        </div>
        <div></div>
        <div className='flex items-center md:hidden' onClick={() => setIsMenuOpen((previous) => !previous)}>
          {!isMenuOpen ? <MenuIcon /> : <CloseMenuIcon />}
        </div>
      </nav>
      <div
        className={`absolute font-medium transition-all duration-200 w-full flex flex-col  items-center justify-center text-lg  gap-3 text-white h-0 bg-black ${
          isMenuOpen && 'h-36'
        }`}
      >
        <Link className={`${isMenuOpen ? 'text-white' : 'text-transparent'}`} to='#'>Home</Link>
        <Link className={`${isMenuOpen ? 'text-white' : 'text-transparent'}`} to='#'>Chats</Link>
      </div>
    </header>
  );
};
