import { FC } from 'react';
import { LeftArrow, RightArrow } from './Icons';


export const Footer: FC<Props> = ({ setPage, currentPage, maxPage }) => {

  const buttonsNumbers = [currentPage + 1 , currentPage + 2, currentPage + 3];


  return (
    <footer className="flex justify-end gap-5 p-4 items-center">
      <button
        className='border-2 w-[36px] h-[36px] flex items-center justify-center rounded-md cursor-pointer hover:border-search'
        disabled={ currentPage === 0 }
        onClick={() => {
          setPage((prevState) => prevState  - 1);
        }}
      >
        <LeftArrow />
      </button>
      
      {
        buttonsNumbers.map( number => (
          <button 
            key={number}
            className={`border-2 w-[36px] h-[36px] text-text flex items-center justify-center rounded-md cursor-pointer ${ currentPage ===  number  - 1 ? 'bg-search text-white border-search' :  'hover:bg-search hover:border-search hover:text-white '}`}
            onClick={() => setPage(number - 1)}
          >
            { number }
          </button>
        ))
      }
      {
        currentPage + 3 !== maxPage +  1 && 
        (
          <div className='flex gap-3'>
            ...
            <button 
              className='border-2 w-[36px] h-[36px] text-text flex items-center justify-center rounded-md cursor-pointer hover:border-search hover:text-white hover:bg-search'
              onClick={() => setPage(maxPage)}
            >
              { maxPage + 1}
            </button>
          </div>
        )
      }
     
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
