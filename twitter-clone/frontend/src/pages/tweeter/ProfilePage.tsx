import { Tweet } from "@/ui/tweeter"
import { TweeterLayout } from "@/ui/tweeter/hoc/TweeterLayout"
import { CoverImage, ProfileInfo, Filters } from "@/ui/tweeter/profilepage"

export const ProfilePage = () => {


  
  return (
    <TweeterLayout>
        <section className="flex flex-col items-center">
            <CoverImage />
            <ProfileInfo />
            <div className="mb-52"></div>
            <Filters />
            <Tweet />
        </section>
    </TweeterLayout>
  )
}
