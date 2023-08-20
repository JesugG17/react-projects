import { Trends } from './Trends';

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-4 w-1/4 xl:w-1/5">
      <Trends />
    </aside>
  );
};
