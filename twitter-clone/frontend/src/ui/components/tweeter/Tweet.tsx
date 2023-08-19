import { BookmarkIcon, CommentsIcon, HeartIcon, ImageIcon, ShareIcon } from '../shared/Icons';
import { Wrapper } from '../shared/Wrapper';

export const Tweet = () => {
  return (
    <Wrapper styles="bg-white w-11/12 shadow-lg p-4 rounded flex flex-col gap-2">
      <header className="flex gap-4 items-center">
        <img
          className="w-1/6 rounded-lg object-cover"
          src="/img/photo.jpg"
          alt=""
        />
        <div className="flex flex-col gap-1">
          <h4 className="text-xs font-bold">Jesus Gastelum</h4>
          <p className="text-xs opacity-30">19 august at 12:00</p>
        </div>
      </header>
      <main className="flex flex-col gap-2">
        <p>Traveling - it leaves you speechless, then turns you intto a storyteller</p>
        <img
          className="rounded"
          src="/img/test.jpg"
          alt=""
        />
        <div className="flex gap-4 text-[10px] self-end">
          <p className="opacity-30">400 comments</p>
          <p className="opacity-30">50k retweets</p>
          <p className="opacity-30">234 saved</p>
        </div>
        <div className="flex justify-between">
          <CommentsIcon />
          <ShareIcon />
          <HeartIcon />
          <BookmarkIcon />
        </div>
      </main>
      <footer className="flex gap-3">
        <img
          className="w-8 rounded"
          src="/img/photo.jpg"
          alt=""
        />
        <div className="flex w-full justify-between px-3 py-1 bg-slate-100 rounded">
          <input
            className="text-xs flex-1 focus:outline-none bg-slate-100"
            type="text"
            placeholder="Tweet your reply"
          />
          <ImageIcon />
        </div>
      </footer>
    </Wrapper>
  );
};
