import { io } from 'socket.io-client';
import { useForm } from './hooks/useForm';

const socket = io('http://localhost:8080');

export const App = () => {
  const { formState, onChange } = useForm({
    userName: '',
    room: '',
  });

  const joinRoom = () => {};

  return (
    <div>
      <h3>Join a chat</h3>
      <input
        type='text'
        placeholder='Username'
        value={formState.userName}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='RoomID'
        value={formState.room}
        onChange={onChange}
      />
      <button>Join a Room</button>
    </div>
  );
};
