import { useIsMobile } from '@/common/hooks/useIsMobile';

export const ProfileButton = () => {
  const isMobile = useIsMobile();

  return (
    <section className="flex gap-2 items-center">
      <img
        className="w-8 rounded"
        src="/img/photo.jpg"
        alt=""
      />
      {!isMobile && <p>Jesus Gastelum</p>}
    </section>
  );
};
