import React, { FC } from 'react';

export const Pagination: FC<Props> = ({ refetch, setPage }) => {
  return (
    <div className='pagination'>
      <button 
        onClick={() => {
        setPage((prevState) => {
          if (prevState === 0) {
            return 0;
          }
          return prevState - 1;
        })
        // refetch()
      }}>Prev</button>
      <button onClick={() => {
        setPage((prevState) => prevState + 1);
        // refetch();
      }}>Next</button>
    </div>
  )
}

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  refetch: Function
}
