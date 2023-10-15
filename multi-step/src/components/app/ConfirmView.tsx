import { CardLayout } from "../layouts/CardLayout"

export const ConfirmView = () => {
  return (
    <CardLayout>
      <article className="flex flex-col gap-4 min-h-[300px] justify-center items-center">
          <img className="w-12" src="/img/icon-thank-you.svg" alt="Thank you icon" />
          <h4 className="text-xl text-blue-dark font-bold">Thank you</h4>
          <p className="text-center opacity-60">
            Thanks for confirming your subscription!
            <br />
            We hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@loremgaming.com
          </p>
      </article>
    </CardLayout>
  )
}
