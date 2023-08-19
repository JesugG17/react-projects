import { FC, PropsWithChildren } from 'react';

export const Button: FC<Props> = ({ children }) => {
  return (
    <button className="flex font-medium flex-1 w-full gap-2 justify-center items-center border-2 border-opacity-5 border-black rounded-full p-1 text-xs md:text-base">
      {children}
    </button>
  );
};

type Props = PropsWithChildren;
