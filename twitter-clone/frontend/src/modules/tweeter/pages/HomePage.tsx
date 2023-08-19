import { TweetPublish } from '@/ui/components/tweeter/TweetPublish';
import { TweeterLayout } from '@/ui/components/tweeter/hoc/TweeterLayout';
import { Tweet } from '../../../ui/components/tweeter/Tweet';

export const HomePage = () => {
  return (
    <TweeterLayout>
      <TweetPublish />
      {/* Here I gonna map an array with all the tweets and show them */}
      <Tweet />
    </TweeterLayout>
  );
};
