import { Link } from 'react-router-dom';
import { useTabs } from '@/common/hooks/useTabs';

const LINKS = [
  {
    href: '/home',
    text: 'Home',
  },
  {
    href: '/explore',
    text: 'Explore',
  },
  {
    href: '/bookmarks',
    text: 'Bookmarks',
  },
];

export const Navigation = () => {
  const { tabSelected, setTabSelected } = useTabs();

  return (
    <div className="flex items-center gap-12">
      {LINKS.map((link, index) => (
        <Link
          key={link.href}
          to={link.href}
          onClick={() => setTabSelected(index)}
          className={`border-b-4 py-4 rounded-b ${
            tabSelected === index
              ? 'font-bold text-blue-500 border-b-blue-500'
              : 'border-b-transparent text-black font-normal'
          } `}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};
