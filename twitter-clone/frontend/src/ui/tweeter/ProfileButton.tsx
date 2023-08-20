import { LAPTOP_WIDTH } from '@/common/constants/width.constants';
import { useIsMinWidth } from '@/common/hooks/useIsMinWidth';
import { Link } from 'react-router-dom';

export const ProfileButton = () => {
  const isMinWidth = useIsMinWidth(LAPTOP_WIDTH);

  return (
    <Link 
      to='/profile/JesusGastelum'
      className="flex gap-2 items-center cursor-pointer"
    >
      <img
        className="w-8 rounded md:w-12"
        src="/img/photo.jpg"
        alt=""
      />
      {isMinWidth && <p>Jesus Gastelum</p>}
    </Link>
  );
};
