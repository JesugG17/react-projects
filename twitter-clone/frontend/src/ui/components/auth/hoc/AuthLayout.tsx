import { PropsWithChildren, FC } from 'react';
import { Wrapper } from '../../shared/Wrapper';
import { TweeterIcon } from '../../shared/Icons';

export const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <Wrapper styles="w-full min-h-screen bg-background flex items-center justify-center">
      <section className="w-5/6 bg-white rounded-lg shadow min-h-2/4 p-4 flex flex-col items-center gap-5 md:w-2/4 lg:w-2/5 xl:w-1/4">
        <TweeterIcon />
        {children}
      </section>
    </Wrapper>
  );
};

type Props = PropsWithChildren;
