import { Filter } from '@/ui/tweeter/explorepage/Filter';
import { Search } from '@/ui/tweeter/explorepage/Search';
import { TweeterLayout } from '@/ui/tweeter/hoc/TweeterLayout';
import { useIsMinWidth } from '@/common/hooks/useIsMinWidth';
import { LAPTOP_WIDTH } from '@/common/constants/width.constants';

export const ExplorePage = () => {
  const isMinWidth = useIsMinWidth(LAPTOP_WIDTH);

  return (
    <TweeterLayout>
      {isMinWidth && <Filter />}
      <Search />
    </TweeterLayout>
  );
};
