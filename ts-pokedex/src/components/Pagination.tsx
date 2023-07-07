import React, { FC } from 'react';
export const Pagination: FC<Props> = ({ setPage }) => {
  return (
    <div>
      <button>prev</button>
      <button onClick={() => setPage((prevState) => prevState + 1)}>Next</button>
    </div>
  )
}

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
