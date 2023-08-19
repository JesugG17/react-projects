import { TweetPublish } from '@/ui/components/tweeter/TweetPublish';
import { TweeterLayout } from '@/ui/components/tweeter/hoc/TweeterLayout';

export const HomePage = () => {
  return (
    <TweeterLayout>
      <TweetPublish />
    </TweeterLayout>
  );
};
