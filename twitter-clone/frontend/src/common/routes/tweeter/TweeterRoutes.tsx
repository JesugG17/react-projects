import { TabsProvider } from '@/common/context/tabs/TabsProvider';
import { HomePage, ExplorePage, BookmarksPage } from '@/pages/tweeter';
import { ProfilePage } from '@/pages/tweeter/ProfilePage';
import { Routes, Route, Navigate } from 'react-router';

export const TweeterRoutes = () => {
  return (
    <TabsProvider>
      <Routes>
        <Route
          path="/home"
          element={<HomePage />}
        />
        <Route
          path="/explore"
          element={<ExplorePage />}
        />
        <Route
          path="/bookmarks"
          element={<BookmarksPage />}
        />
        <Route
          path="/profile/:id"
          element={<ProfilePage />}
        />
        <Route
          path="/*"
          element={<Navigate to="/auth/login" />}
        />
      </Routes>
    </TabsProvider>
  );
};
