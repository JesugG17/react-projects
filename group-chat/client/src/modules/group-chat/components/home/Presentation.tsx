
export const Presentation = () => {
  return (
    <section className="h-screen bg-white flex items-center px-2 w-full">
      <picture className="w-2/4 flex justify-center">
        <img className="w-3/4 object-contain" src="/img/chatting.jpg" alt="" />
      </picture>
      <div className="w-2/4 flex flex-col gap-3 text-center text-3xl">
        <p>
          Hello!, this is a group chat application where you can
          add friends and chat with them!. I hope you enjoy this!
        </p>
        <p className="text-sm opacity-50 underline">
          If you have some feedback or recomendations you can leave a comment above
        </p>
        <div className="w-full flex items-center flex-col gap-3 text-sm mb-3">
          <textarea className="w-2/4 border-2 p-2 resize-none" cols={3} rows={5} placeholder="Leave a comment!"></textarea>
          <button className="bg-gray-200 p-1 rounded font-medium">Submit</button>
        </div>
      </div>
    </section>
  )
}
