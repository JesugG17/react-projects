import { useForm } from '@/hooks/useForm';
import { FC, useEffect, useRef, useState } from 'react';
import { Socket } from 'socket.io-client';

type Message = {
  room: string;
  author: string;
  message: string;
  time: string;
};

export const Chat: FC<Props> = ({ socket, chat }) => {
  const { formState, onChange, onReset } = useForm({
    message: '',
  });

  const bottomRef = useRef<HTMLButtonElement | null>(null);

  const [messageList, setMessageList] = useState<Message[]>([]);

  const sendMessage = async () => {
    if (formState.message.length === 0) return;

    const messageData = {
      room: chat.room,
      author: chat.userName,
      message: formState.message,
      time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
    };

    setMessageList((previous) => [...previous, messageData]);
    socket.emit('send_message', messageData);
    onReset();
  };

  useEffect(() => {
    socket.on('receive_message', (payload) => {
      setMessageList((previous) => [...previous, payload]);
    });
  }, []);

  return (
    <section className='chat-window'>
      <header className='chat-header'>
        <p>Live chat</p>
      </header>
      <main className='chat-body'>
        {messageList.map((item, index) => (
          <div
            key={index}
            className='message'
            id={chat.userName === item.author ? 'you' : 'other'}
          >
            <div >
              <div
                className='message-content'
                
              >
                <p>{item.message}</p>
              </div>
              <div className='message-meta'>
                <p>{item.time}</p>
                <p>{item.author}</p>
              </div>

            </div>
          </div>
        ))}
      </main>
      <footer className='chat-footer'>
        <input
          type='text'
          placeholder='Message'
          name='message'
          value={formState.message}
          onChange={onChange}
        />
        <button ref={bottomRef} onClick={sendMessage}>&#9658;</button>
      </footer>
    </section>
  );
};

type Props = {
  socket: Socket;
  chat: { userName: string; room: string };
};
