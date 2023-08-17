import { FC } from 'react';

export const Wrapper: FC<Props> = ({ children, styles }) => {
  return <div className={styles}>{children}</div>;
};

type Props = {
  children: React.ReactNode;
  styles: string;
};
