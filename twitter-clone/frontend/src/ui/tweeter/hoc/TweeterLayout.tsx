import { PropsWithChildren, FC } from 'react';
import { useIsMinWidth } from '@/common/hooks/useIsMinWidth';
import { LAPTOP_WIDTH } from '@/common/constants/width.constants';
import { Wrapper } from '@/ui/shared/Wrapper';
import { FooterNavigation, Navbar } from '../';

export const TweeterLayout: FC<Props> = ({ children }) => {
  const isMinWidth = useIsMinWidth(LAPTOP_WIDTH);

  return (
    <Wrapper styles="bg-background flex flex-col gap-5 items-center min-h-screen w-full">
      <Navbar />
      <div className="flex w-full justify-center lg:gap-5 lg:px-10">{children}</div>
      {!isMinWidth && (
        <>
          <div className="mb-10"></div>
          <FooterNavigation />
        </>
      )}
    </Wrapper>
  );
};

type Props = PropsWithChildren;
