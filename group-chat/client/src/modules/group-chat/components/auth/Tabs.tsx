import { FC } from 'react';

export const Tabs: FC<Props> = ({ tabSelected, setTab }) => {
  return (
    <ul className='flex flex-1 justify-center gap-5'>
      <li
        className={`cursor-pointer border-b-4 ${tabSelected === 0 ? 'border-b-black' : 'border-transparent'}`}
        onClick={() => setTab(0)}
      >
        Login
      </li>
      <li
        className={`cursor-pointer border-b-4 ${tabSelected === 1 ? 'border-b-black' : 'border-transparent'}`}
        onClick={() => setTab(1)}
      >
        Register
      </li>
    </ul>
  );
};

type Props = {
  tabSelected: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
};
