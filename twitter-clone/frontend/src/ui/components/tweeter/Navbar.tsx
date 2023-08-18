import { TweeterIcon } from '../shared/Icons';
import { ProfileButton } from './ProfileButton';

export const Navbar = () => {
  return (
    <nav className="bg-white p-2 shadow-mg w-full flex justify-between">
      <TweeterIcon />
      <ProfileButton />
    </nav>
  );
};
