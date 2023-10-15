import { CardLayout } from "../layouts/CardLayout";

const title = 'Finishing up';
const paragraph = 'Double-check everything looks OK before confirming';

export const Summary = () => {
  return (
    <CardLayout title={title} paragraph={paragraph}>
        <article className="bg-background flex flex-col rounded-md items-start p-3 gap-2 lg:mt-3">
            <article className="flex w-full justify-between items-center border-b py-2">
                <div>
                    <h5 className="text-blue-dark font-bold text-sm">Arcade (Montly)</h5>
                    <button className="opacity-60 underline">Change</button>
                </div>
                <span className="text-blue-dark font-bold">$9/mo</span>
            </article>
            <article className="w-full flex justify-between">
                <span className="opacity-50">Online service</span>
                <span className="text-blue-dark">+$1/mo</span>
            </article>
            <article className="w-full flex justify-between">
                <span className="opacity-50">Larger storage</span>
                <span className="text-blue-dark">+$2/mo</span>
            </article>
        </article>
        <article className="flex justify-between mt-5 mb-2">
            <span className="opacity-60">Total (per month)</span>
            <span className="text-violet-light font-bold">+$12/mo</span>
        </article>
    </CardLayout>
  )
}
