import { FC } from 'react';
import { Socket } from "socket.io-client";

export const Chat: FC<Props> = ({ socket, chat }) => {
    console.log(socket, chat);
  return (
    <div>Chat</div>
  )
}

type Props = {
    socket: Socket
    chat: {userName: string, room: string}
}
