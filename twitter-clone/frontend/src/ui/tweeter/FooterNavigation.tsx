import { Link } from 'react-router-dom';
import { BookmarkFilledIcon, ExploreIcon, HomeIcon } from '../shared/Icons';
import { useTabs } from '@/common/hooks/useTabs';

const LINKS_ICONS = [
  {
    href: '/home',
    icon: <HomeIcon />,
  },
  {
    href: '/explore',
    icon: <ExploreIcon />,
  },
  {
    href: '/bookmarks',
    icon: <BookmarkFilledIcon />,
  },
];

export const FooterNavigation = () => {
  const { tabSelected, setTabSelected } = useTabs();

  console.log(LINKS_ICONS[0].icon.props);

  return (
    <footer className="fixed bottom-0 w-full bg-white px-4 shadow-lg flex justify-between">
      {LINKS_ICONS.map((item, index) => (
        <Link
          key={item.href}
          className={`border-b-4 py-4 ${
            tabSelected === index
              ? 'font-bold text-blue-500 border-b-blue-500'
              : 'border-b-transparent text-black font-normal'
          } `}
          to={item.href}
          onClick={() => setTabSelected(index)}
        >
          {item.icon}
        </Link>
      ))}
    </footer>
  );
};
