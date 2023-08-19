import { useIsMinWidth } from '@/common/hooks/useIsMinWidth';
import { TweeterIcon, TweeterIconWithName } from '../shared/Icons';
import { ProfileButton } from './ProfileButton';
import { Navigation } from './Navigation';
import { MOBILE_WIDTH } from '@/common/constants/width.constants';

export const Navbar = () => {
  const isMinWidth = useIsMinWidth(MOBILE_WIDTH);

  return (
    <nav className="bg-white px-4 py-2 shadow-mg w-full flex justify-between lg:px-10">
      {isMinWidth ? <TweeterIcon /> : <TweeterIconWithName />}
      {!isMinWidth && <Navigation />}
      <ProfileButton />
    </nav>
  );
};
