import { BookmarkIcon, ExploreIcon, HomeIcon } from '../shared/Icons';

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white p-4 shadow-lg flex justify-between">
      <HomeIcon />
      <ExploreIcon />
      <BookmarkIcon />
    </footer>
  );
};
