import { LAPTOP_WIDTH } from '@/common/constants/width.constants';
import { useIsMinWidth } from '@/common/hooks/useIsMinWidth';

export const ProfileButton = () => {
  const isMinWidth = useIsMinWidth(LAPTOP_WIDTH);

  return (
    <section className="flex gap-2 items-center">
      <img
        className="w-8 rounded md:w-12"
        src="/img/photo.jpg"
        alt=""
      />
      {isMinWidth && <p>Jesus Gastelum</p>}
    </section>
  );
};
