import React, { FC } from 'react'
import { Filters } from './Filters';
import { Filters as FiltersType } from '../App';

export const Header: FC<Props> = ({ setFilters }) => {
  return (
    <header>
      <h1 className="title">React Shop 🛒</h1>
      <Filters 
        setFilters={ setFilters }
      />
    </header>
  );
};

type Props = {
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>
}
