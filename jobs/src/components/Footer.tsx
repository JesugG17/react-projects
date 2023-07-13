import { FC } from 'react';
export const Footer: FC<Props> = ({ setPage, currentPage, maxPage }) => {
  
  return (
    <footer className="flex justify-end gap-5 p-4">
      <button
        disabled={ currentPage === 0 }
        onClick={() => {
          setPage((prevState) => prevState  - 1);
        }}
      >
        prev
      </button>
      <button
        disabled={ currentPage === maxPage }
        onClick={() => {
          setPage((prevState) => prevState + 1);
        }}
      >
        next
      </button>
    </footer>
  );
};

type Props = {
    setPage: React.Dispatch<React.SetStateAction<number>>;
    currentPage: number;
    maxPage: number;
}
