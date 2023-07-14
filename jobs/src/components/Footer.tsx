import { FC } from 'react';
import { LeftArrow, RightArrow } from './Icons';


export const Footer: FC<Props> = ({ setPage, currentPage, maxPage }) => {



  return (
    <footer className="flex justify-center md:justify-end gap-5 p-4 items-center">
      <button
        className='border-2 w-[36px] h-[36px] flex items-center justify-center rounded-md cursor-pointer hover:border-search'
        disabled={ currentPage === 0 }
        onClick={() => {
          setPage((prevState) => prevState  - 1);
        }}
      >
        <LeftArrow />
      </button>
      
      <p className='text-text'>{ currentPage + 1 } / { maxPage + 1 }</p>
     
      <button
        className='border-2 w-[36px] h-[36px] flex items-center justify-center rounded-md cursor-pointer hover:border-search'
        disabled={ currentPage === maxPage }
        onClick={() => {
          setPage((prevState) => prevState + 1);
        }}
      >
        <RightArrow />
      </button>
    </footer>
  );
};

type Props = {
    setPage: React.Dispatch<React.SetStateAction<number>>;
    currentPage: number;
    maxPage: number;
}
