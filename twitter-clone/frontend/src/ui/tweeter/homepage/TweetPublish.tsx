import { Wrapper } from '@/ui/shared/Wrapper';
import { ImageIcon, WorldIcon } from '@/ui/shared/Icons';

export const TweetPublish = () => {
  return (
    <Wrapper styles="bg-white flex flex-col gap-4 p-2 rounded-lg shadow w-11/12 md:p-4 md:w-4/5 lg:w-full">
      <p className="text-xs font-medium md:text-base">Tweet something</p>
      <div className="flex gap-2 items-center md:gap-3">
        <img
          className="object-cover rounded w-1/5 md:w-12"
          src="/img/photo.jpg"
          alt=""
        />
        <textarea
          className="w-full focus:outline-none text-xs md:text-base resize-none"
          placeholder="What's happening?"
          name=""
          id=""
        ></textarea>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 text-xs">
          <ImageIcon />
          <div className="flex gap-1 items-center">
            <WorldIcon />
            <p className="text-[10px] font-medium text-[#0063F8] md:text-base">
              Everyone can reply
            </p>
          </div>
        </div>
        <button className="text-xs text-white bg-blue-500 px-4 py-1 rounded ">Tweet</button>
      </div>
    </Wrapper>
  );
};
