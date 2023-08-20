import { useIsMinWidth } from '@/common/hooks/useIsMinWidth';
import { TweeterIcon, TweeterIconWithName } from '../shared/Icons';
import { ProfileButton } from './ProfileButton';
import { Navigation } from './Navigation';
import { LAPTOP_WIDTH } from '@/common/constants/width.constants';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const isMinWidth = useIsMinWidth(LAPTOP_WIDTH);

  console.log(isMinWidth);

  return (
    <nav className="bg-white px-4 py-2 shadow-mg w-full flex justify-between lg:px-10 items-center">
      <Link to='/home'>
        {!isMinWidth ? <TweeterIcon /> : <TweeterIconWithName />}
      </Link>
      {isMinWidth && <Navigation />}
      <ProfileButton />
    </nav>
  );
};
