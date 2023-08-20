import { Tweet } from '@/ui/tweeter';
import { TweeterLayout } from '@/ui/tweeter/hoc/TweeterLayout';
import { CoverImage, ProfileInfo, Filters } from '@/ui/tweeter/profilepage';

export const ProfilePage = () => {
  return (
    <TweeterLayout>
      <section className="flex flex-col gap-5 items-center">
        <CoverImage />
        <ProfileInfo />
        <div className="mb-40 md:mb-32"></div>
        <div className="flex flex-col gap-5 lg:flex-row">
          <Filters />
          <Tweet />
        </div>
      </section>
    </TweeterLayout>
  );
};
