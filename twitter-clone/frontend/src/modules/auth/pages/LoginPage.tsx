import { OAuthSignIn } from "@/ui/components/auth/OAuthSignIn"
import { TweeterIcon } from "@/ui/components/shared/Icons"
import { Wrapper } from "@/ui/components/shared/Wrapper"

export const LoginPage = () => {
  return (
    <Wrapper styles="w-full min-h-screen bg-background flex items-center justify-center">
      <section className="w-5/6 bg-white rounded-lg shadow min-h-2/4 p-4 flex flex-col items-center gap-5">
          <header className="flex flex-col gap-5 items-center w-full">
            <TweeterIcon />
            <OAuthSignIn />
          </header>          
      </section>
    </Wrapper>
  )
}
