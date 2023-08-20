import { LAPTOP_WIDTH } from '@/common/constants/width.constants';
import { useIsMinWidth } from '@/common/hooks/useIsMinWidth';
import { TweetPublish, Tweet } from '@/ui/tweeter';
import { Sidebar } from '@/ui/tweeter/Sidebar';
import { TweeterLayout } from '@/ui/tweeter/hoc/TweeterLayout';

export const HomePage = () => {
  const isMinWidth = useIsMinWidth(LAPTOP_WIDTH);
  return (
    <TweeterLayout>
      <div className="flex flex-col gap-5 items-center lg:w-3/6 place-self-center">
        <TweetPublish />
        <Tweet />
      </div>
      {isMinWidth && <Sidebar />}
    </TweeterLayout>
  );
};
