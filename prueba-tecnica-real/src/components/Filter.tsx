import { Tab, TabProps } from 'semantic-ui-react';
import { useTodos } from '../hooks';
import { Filter as FilterEnum } from '../context/TodoProvider';

export const Filter = () => {
  const { setFilter, filter } = useTodos();

  const handleTabChange = (_: any, data: TabProps) => {
    const filters = {
      0: FilterEnum.ALL,
      1: FilterEnum.PENDING,
      2: FilterEnum.COMPLETED,
    };

    type indexFilter = keyof typeof filters;
    setFilter(filters[data.activeIndex as indexFilter]);
  };

  const getCurrentActiveIndex = () => {
    if (filter === FilterEnum.ALL) return 0;

    if (filter === FilterEnum.PENDING) return 1;

    return 2;
  };

  const index = getCurrentActiveIndex();

  return (
    <Tab
      onTabChange={handleTabChange}
      menu={{ fluid: true }}
      style={{ marginRight: 50 }}
      activeIndex={index}
      menuPosition="right"
      panes={panes}
    />
  );
};

const panes = [
  {
    menuItem: 'Todo',
  },
  {
    menuItem: 'Pendiente',
  },
  {
    menuItem: 'Completado',
  },
];
