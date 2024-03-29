import { Chat, ChatsList } from "../components/chats";

export const ChatsPage = () => {
  // const isMinWidth = useIsMinWidth(TABLET_WIDTH);
  return (
    <section className="flex p-2 shadow-lg">
      <ChatsList />
      <Chat />
    </section>
  )
};
