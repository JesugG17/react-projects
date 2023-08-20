import { Search } from '@/ui/tweeter/explorepage/Search';
import { TweeterLayout } from '@/ui/tweeter/hoc/TweeterLayout';

export const ExplorePage = () => {
  return (
    <TweeterLayout>
      {/* <Filter /> */}
      <Search />
    </TweeterLayout>
  );
};
