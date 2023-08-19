import { PropsWithChildren, FC } from 'react';
import { Wrapper } from '../../shared/Wrapper';
import { Navbar } from '../Navbar';

export const TweeterLayout: FC<Props> = ({ children }) => {
  return (
    <Wrapper styles="bg-background flex flex-col gap-5 items-center min-h-screen w-full">
      <Navbar />
      {children}
    </Wrapper>
  );
};

type Props = PropsWithChildren;
