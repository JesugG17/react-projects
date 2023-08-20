import { FollowIcon, UnfollowIcon } from '@/ui/shared/Icons';
import { Wrapper } from '@/ui/shared/Wrapper';
import { useState } from 'react';

export const ProfileInfo = () => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Wrapper styles="bg-white w-11/12 p-6 rounded-lg absolute top-44 flex flex-col items-center gap-4 md:top-52 md:w-4/5">
      <img
        className="w-16 absolute left-30 -top-12 rounded border-2"
        src="/img/photo.jpg"
        alt=""
      />
      <div className="flex justify-center flex-col gap-1">
        <h4 className="font-bold text-center">Jesus Gastelum</h4>
        <div className="flex gap-5 justify-center text-[10px]">
          <p>
            <strong>2000</strong> following
          </p>
          <p>
            <strong>100</strong> followers
          </p>
        </div>
      </div>
      <p className="text-center text-gray-600">Programmer apassionate to web developing</p>
      <button
        className={`px-8 flex gap-1 justify-center py-2 rounded text-white text-xs ${
          isFollowed ? 'bg-red-600' : 'bg-blue-600'
        }`}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? (
          <>
            <UnfollowIcon />
            Unfollow
          </>
        ) : (
          <>
            <FollowIcon />
            Follow
          </>
        )}
      </button>
    </Wrapper>
  );
};
