import { GithubIcon, GoogleIcon } from "../shared/Icons"
import { Button } from "./hoc/Button"

export const OAuthSignIn = () => {
  return (
    <div className="flex flex-col gap-2">
        <Button>
            <GoogleIcon />
            Sign in with Google
        </Button>
        <Button>
            <GithubIcon />
            Sign in with Github
        </Button>
    </div>
  )
}
