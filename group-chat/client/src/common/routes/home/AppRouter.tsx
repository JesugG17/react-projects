import { Navigate, Route, Routes } from 'react-router';
import { HomePage } from '@modules/group-chat/pages/HomePage';
import { GroupChatLayout } from '@modules/group-chat/components/shared/layout/GroupChatLayout';
import { ChatsPage } from '@modules/group-chat/pages/ChatsPage';

export const AppRouter = () => {
  return (
    <GroupChatLayout>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/chats' element={<ChatsPage />} />
        <Route path='/*' element={<Navigate to='/home' />} />
      </Routes>
    </GroupChatLayout>
  );
};
