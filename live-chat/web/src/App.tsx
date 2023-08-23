import { io } from 'socket.io-client';
import { useForm } from './hooks/useForm';
import { Chat } from './components/Chat';

const socket = io('http://localhost:8080');

export const App = () => {
  const { formState, onChange } = useForm({
    userName: '',
    room: '',
  });

  const joinRoom = () => {
    if (formState.userName.length === 0 || formState.room.length === 0) return;

    socket.emit('join_room', formState);
  };

  return (
    <div>
      <h3>Join a chat</h3>
      <input
        type='text'
        placeholder='Username'
        name='userName'
        value={formState.userName}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='RoomID'
        name='room'
        value={formState.room}
        onChange={onChange}
      />
      <button onClick={joinRoom}>Join a Room</button>
      <Chat socket={socket} chat={formState as {userName: string, room: string}} />
    </div>
  );
};
