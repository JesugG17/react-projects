import { FC } from 'react';
import { useFilter } from '../hooks/useFilter';

export const FiltersListItem: FC<Props> = ({ filter }) => {
  const { removeFilter } = useFilter();

  return (
    <li onClick={() => removeFilter(filter)} className="bg-neutral-grayish-bg flex gap-1 text-primary rounded font-bold">
      <span className="px-2">{filter}</span>
      <button className="bg-primary px-2 rounded-tr rounded-br hover:bg-very-dark-grayish-cyan transition-all duration-200">
        <img className="w-3 h-3" src="/img/icon-remove.svg" alt="Icon remove" />
      </button>
    </li>
  );
};

type Props = {
  filter: string;
};
