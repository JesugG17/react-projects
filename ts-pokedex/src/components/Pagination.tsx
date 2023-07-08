import React, { FC } from 'react';

export const Pagination: FC<Props> = ({ page, setPage, isLoading }) => {
  return (
    <div className='pagination'>
      <button
        disabled={ page === 0 || isLoading }
        onClick={() => {
        setPage((prevState) => {
            if (prevState === 0) {
              return 0;
            }
            return prevState - 1;
            })
        }}>
        Prev
      </button>
      <button 
          disabled={ isLoading }
          onClick={() => {
          setPage((prevState) => prevState + 1);
          }}
      >
        Next
      </button>
    </div>
  )
}

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  isLoading: boolean;
}
