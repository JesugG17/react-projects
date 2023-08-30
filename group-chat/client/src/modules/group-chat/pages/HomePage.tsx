import { useAuthModal } from '@hooks/useAuthModal';
import { AuthModal } from '../components/auth/AuthModal';
import { Presentation } from '../components/home/Presentation';

export const HomePage = () => {
  const { isOpen } = useAuthModal();

  return (
    <>
      <Presentation />
      {isOpen && <AuthModal />}
    </>
  );
};
