import { useForm } from '@/hooks/useForm';
import { FC, useEffect } from 'react';
import { Socket } from 'socket.io-client';

export const Chat: FC<Props> = ({ socket, chat }) => {
  const { formState, onChange, onReset } = useForm({
    message: '',
  });

  const sendMessage = async () => {
    if (formState.message.length === 0) return;

    const messageData = {
      room: chat.room,
      author: chat.userName,
      message: formState.message,
      time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
    };

    await socket.emit('send_message', messageData);
    onReset();
  };

  useEffect(() => {
    socket.on('receive_message', (payload) => {
        console.log(payload);
    });
  }, [socket]);

  return (
    <section>
      <header className='chat-header'>
        <p>Live chat</p>
      </header>
      <main className='chat-body'></main>
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
