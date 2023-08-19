import { PropsWithChildren, FC } from 'react';
import { useIsMinWidth } from '@/common/hooks/useIsMinWidth';
import { Wrapper } from '../../shared/Wrapper';
import { Footer, Navbar } from '../';
import { MOBILE_WIDTH } from '@/common/constants/width.constants';

export const TweeterLayout: FC<Props> = ({ children }) => {
  const isMinWidth = useIsMinWidth(MOBILE_WIDTH);

  return (
    <Wrapper styles="bg-background flex flex-col gap-5 items-center min-h-screen w-full">
      <Navbar />
      {children}
      {isMinWidth && <Footer />}
    </Wrapper>
  );
};

type Props = PropsWithChildren;
