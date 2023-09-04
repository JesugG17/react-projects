import { FC } from 'react';
import { Link } from 'react-router-dom';

export const DropMenu: FC<Props> = ({ isMenuOpen }) => {
  return (
    <div
      className={`absolute font-medium transition-all duration-200 w-full flex flex-col  items-center justify-center text-lg  gap-3 text-white h-0 bg-black ${
        isMenuOpen && 'h-36'
      }`}
    >
      <Link className={`${isMenuOpen ? 'block' : 'hidden'}`} to='/home'>
        Home
      </Link>
      <Link className={`${isMenuOpen ? 'block' : 'hidden'}`} to='/chats'>
        Chats
      </Link>
      <button className={`text-red-500 underline ${isMenuOpen ? 'block' : 'hidden'}`}>Sign out</button>
    </div>
  );
};

type Props = {
  isMenuOpen: boolean;
};
