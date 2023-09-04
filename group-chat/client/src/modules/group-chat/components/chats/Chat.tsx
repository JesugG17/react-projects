const messages = [
    {
      author: 'You',
      message: "Hello, this is a message",
      time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
    },
    {
      author: 'Other',
      message: "Hello, this is a message",
      time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
    },
    {
      author: 'You',
      message: "Hello, this is a message",
      time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
    },
    {
      author: 'Other',
      message: "Hello, this is a message asdasasd adasd dadasd  asdasdasd asdasd asdasd asdasdsssssssssssssssssssss dasddddddddddddddddds  asdasddasdasd  asdasdas",
      time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
    },
    {
      author: 'Other',
      message: "Hell-",
      time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
    },
  
  ];
export const Chat = () => {
  return (
    <main className='bg-slate-500 w-full h-[565px] rounded flex flex-col '>
      <article className='bg-blue-400 w-full flex p-2 text-white'>Jesus Gastelum</article>
      <ul className='flex flex-col gap-5 flex-1 p-2'>
        {messages.map((message, index) => (
          <li
            key={index}
            className={`w-auto max-w-[220px] text-clip text-xs rounded p-1 gap-2 flex flex-col text-white ${
              message.author === 'You' ? 'self-end bg-green-500' : 'self-start bg-blue-400'
            }`}
          >
            <span>{message.message}</span>
            <div className='flex gap-3 justify-end'>
              <small>{message.author}</small>
              <small>{message.time}</small>
            </div>
          </li>
        ))}
      </ul>
      <form className='w-full flex bg-white rounded'>
        <input className='flex-1 p-1 focus:outline-none' type='text' placeholder='Send a message' />
        <button className='bg-blue-500 p-1 text-white'>send</button>
      </form>
    </main>
  );
};
