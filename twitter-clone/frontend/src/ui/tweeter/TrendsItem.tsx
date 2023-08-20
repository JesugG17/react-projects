import { FC } from 'react';

export const TrendsItem: FC<Props> = ({ trend }) => {
  return (
    <li>
        <h5>{trend.hashtag}</h5>
        <p className='opacity-30'>{trend.numberOfTweets} tweets</p>
    </li>
  )
}

type Props = {
    trend: { hashtag: string, numberOfTweets: number }
}
