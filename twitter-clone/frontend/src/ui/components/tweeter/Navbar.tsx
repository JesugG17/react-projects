import { useIsMobile } from '@/common/hooks/useIsMobile';
import { TweeterIcon, TweeterIconWithName } from '../shared/Icons';
import { ProfileButton } from './ProfileButton';
import { Navigation } from './Navigation';

export const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <nav className="bg-white px-4 py-2 shadow-mg w-full flex justify-between lg:px-10">
      {isMobile ? <TweeterIcon /> : <TweeterIconWithName />}
      {!isMobile && <Navigation />}
      <ProfileButton />
    </nav>
  );
};
