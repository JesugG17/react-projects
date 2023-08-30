export const Presentation = () => {
  return (
    <section className='h-screen bg-white flex flex-col justify-center items-center mt-10 px-4 w-full md:flex-row md:mt-0'>
      <picture className='w-2/4 flex justify-center'>
        <img className='w-full object-contain md:w-5/6' src='/img/chatting.jpg' alt='' />
      </picture>
      <div className='flex flex-col gap-3 text-center text-lg md:w-2/4 md:text-lg lg:text-2xl'>
        <p>
          Hello!, this is a group chat application where you can add friends and chat with them!. I hope you enjoy this!
        </p>
        <p className='text-sm opacity-50 underline'>
          If you have some feedback or recomendations you can leave a comment above
        </p>
        <div className='w-full flex items-center flex-col gap-3 text-sm mb-3'>
          <textarea
            className='w-2/4 border-2 p-2 resize-none'
            cols={3}
            rows={5}
            placeholder='Leave a comment!'
          ></textarea>
          <button className='bg-gray-200 p-1 rounded font-medium'>Submit</button>
        </div>
      </div>
    </section>
  );
};
