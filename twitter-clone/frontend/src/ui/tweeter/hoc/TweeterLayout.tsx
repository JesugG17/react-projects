import { PropsWithChildren, FC } from 'react';
import { useIsMobile } from '@/common/hooks/useIsMobile';
import { Wrapper } from '../../shared/Wrapper';
import { Footer, Navbar } from '../';

export const TweeterLayout: FC<Props> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <Wrapper styles="bg-background flex flex-col gap-5 items-center min-h-screen w-full">
      <Navbar />
      {children}
      {isMobile && <Footer />}
    </Wrapper>
  );
};

type Props = PropsWithChildren;
