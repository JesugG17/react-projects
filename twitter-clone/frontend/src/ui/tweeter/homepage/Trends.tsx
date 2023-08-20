import { Wrapper } from '@/ui/shared/Wrapper';
import { TrendsItem } from './TrendsItem';

const trends = [
  {
    hashtag: '#programming',
    numberOfTweets: 215,
  },
  {
    hashtag: '#programming',
    numberOfTweets: 215,
  },
  {
    hashtag: '#programming',
    numberOfTweets: 215,
  },
  {
    hashtag: '#programming',
    numberOfTweets: 215,
  },
];

export const Trends = () => {
  return (
    <Wrapper styles="bg-white shadow-lg text-[16px] rounded-lg p-3 divide-y flex flex-col gap-4">
      <h4>Trends for you</h4>
      <ul className="flex flex-col gap-2 divide-y">
        {trends.map((trend, index) => (
          <TrendsItem
            key={index}
            trend={trend}
          />
        ))}
      </ul>
    </Wrapper>
  );
};
