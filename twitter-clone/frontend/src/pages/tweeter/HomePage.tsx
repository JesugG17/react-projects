import { TweetPublish, Tweet } from '@/ui/tweeter';
import { TweeterLayout } from '@/ui/tweeter/hoc/TweeterLayout';

export const HomePage = () => {
  return (
    <TweeterLayout>
      <TweetPublish />
      {/* Here I gonna map an array with all the tweets and show them */}
      <Tweet />
    </TweeterLayout>
  );
};
