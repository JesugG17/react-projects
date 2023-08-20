import { PropsWithChildren, FC } from 'react';
import { useIsMinWidth } from '@/common/hooks/useIsMinWidth';
import { Wrapper } from '../../shared/Wrapper';
import { Footer, Navbar } from '../';
import { LAPTOP_WIDTH } from '@/common/constants/width.constants';

export const TweeterLayout: FC<Props> = ({ children }) => {
  const isMinWidth = useIsMinWidth(LAPTOP_WIDTH);

  return (
    <Wrapper styles="bg-background flex flex-col gap-5 items-center min-h-screen w-full">
      <Navbar />
      <div className='flex lg:justify-center lg:gap-5 lg:px-10'>
        {children}
      </div>
      {!isMinWidth && <Footer />}
    </Wrapper>
  );
};

type Props = PropsWithChildren;
