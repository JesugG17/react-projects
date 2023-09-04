const chats = [
    {
      friend: "Jesus Gastelum",
      lastMessage: "Hey guy"
    },
    {
      friend: "Jesus Gastelum",
      lastMessage: "Hey guy"
    },
    {
      friend: "Jesus Gastelum",
      lastMessage: "Hey guy"
    },
    {
      friend: "Jesus Gastelum",
      lastMessage: "Hey guy"
    },
    {
      friend: "Jesus Gastelum",
      lastMessage: "Hey guy"
    },
  
  ]
export const ChatsList = () => {
  return (
    <article className='hidden md:flex flex-col w-1/4 bg-slate-200 '>
      <h3 className='text-center bg-white font-bold'>Chats</h3>
      <ul className='flex flex-col p-1 divide-y'>
        {chats.map((chat, index) => (
          <li className='flex flex-col gap-2' key={index}>
            <strong>{chat.friend}</strong>
            <small>{chat.lastMessage}</small>
          </li>
        ))}
      </ul>
    </article>
  );
};
