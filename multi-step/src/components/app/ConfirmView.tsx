import { CardLayout } from "../layouts/CardLayout"

export const ConfirmView = () => {
  return (
    <CardLayout>
      <article className="flex flex-col gap-4 justify-center min-h-[300px] md:max-w-[400px] lg:max-w-none items-center">
        <img className="w-12 md:w-16 lg:w-20" src="/img/icon-thank-you.svg" alt="Icon thank you" />
        <h4 className="text-blue-dark font-bold text-xl md:text-2xl">Thank you</h4>
        <p className="break-words text-center opacity-50 lg:text-lg">
            Thanks for confirming your subscription!
            <br />
            We hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@loremgaming.com
        </p>
      </article>
    </CardLayout>
  )
}
