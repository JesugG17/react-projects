
export const Steps = () => {
  return (
    <main className="absolute top-24 w-full flex justify-center">
        <section className="mx-auto w-5/6 rounded-md bg-white px-4 py-6 flex flex-col gap-3">
            <h4 className="text-blue-dark font-bold text-xl">Personal info</h4>
            <p className="opacity-50 text-sm font-medium">Please provide your name, email, address and phone</p>
            <form className="flex flex-col gap-5">
                <article className="flex flex-col">
                    <label className="text-blue-dark font-medium text-xs" htmlFor="name">Name</label>
                    <input className="border-2 border-gray-300 py-1 px-3 focus:outline-none rounded" id="name" type="text" placeholder="e.g Stephen King"/>
                </article>
                <article className="flex flex-col">
                    <label className="text-blue-dark font-medium text-xs" htmlFor="email">Email Address</label>
                    <input className="border-2 border-gray-300 py-1 px-3 focus:outline-none rounded" id="email" type="email" placeholder="e.g stephenking@lorem.com"/>
                </article>
                <article className="flex flex-col">
                    <label className="text-blue-dark font-medium text-xs" htmlFor="phone">Phone number</label>
                    <input className="border-2 border-gray-300 py-1 px-3 focus:outline-none rounded" id="phone" type="tel" placeholder="e.g +1 234 567 890"/>
                </article>
            </form>
        </section>
    </main>
  )
}
