import { useForm } from '@/hooks/useForm';
import { FC, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';

type Message =  {
    room: string;
    author: string;
    message: string;
    time: string;
}

export const Chat: FC<Props> = ({ socket, chat }) => {
  const { formState, onChange, onReset } = useForm({
    message: '',
  });

  const [messageList, setMessageList] = useState<Message[]>([]);

  const sendMessage = async () => {
    if (formState.message.length === 0) return;

    const messageData = {
      room: chat.room,
      author: chat.userName,
      message: formState.message,
      time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
    };

    setMessageList([...messageList, messageData])
    socket.emit('send_message', messageData);
    onReset();
  };

  useEffect(() => {
    socket.on('receive_message', (payload) => {
        setMessageList([...messageList, payload])
    });
  }, [socket]);

  return (
    <section className='chat-window'>
      <header className='chat-header'>
        <p>Live chat</p>
      </header>
      <main className='chat-body'>
        {
            messageList.map((item, index) => (
                <h1 key={index}>{item.message}</h1>
            ))
        }
      </main>
      <footer className='chat-footer'>
        <input
          type='text'
          placeholder='Message'
          name='message'
          value={formState.message}
          onChange={onChange}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </footer>
    </section>
  );
};

type Props = {
  socket: Socket;
  chat: { userName: string; room: string };
};
