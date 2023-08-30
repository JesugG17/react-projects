import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../Navbar/Navbar';

export const GroupChatLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

type Props = PropsWithChildren;
