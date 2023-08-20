import { Link } from 'react-router-dom';
import { BookmarkFilledIcon, ExploreIcon, HomeIcon } from '../shared/Icons';

export const FooterNavigation = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white p-4 shadow-lg flex justify-between">
      <Link to="/home">
        <HomeIcon />
      </Link>
      <Link to="/explore">
        <ExploreIcon />
      </Link>
      <Link to="/bookmarks">
        <BookmarkFilledIcon />
      </Link>
    </footer>
  );
};
