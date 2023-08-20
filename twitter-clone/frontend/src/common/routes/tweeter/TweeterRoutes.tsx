import { TabsProvider } from '@/common/context/tabs/TabsProvider';
import { HomePage, ExplorePage, BookmarksPage } from '@/pages/tweeter';
import { Routes, Route } from 'react-router';

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
      </Routes>
    </TabsProvider>
  );
};
