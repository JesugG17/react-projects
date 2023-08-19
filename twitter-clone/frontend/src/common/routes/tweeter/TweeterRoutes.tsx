import { HomePage } from '@/pages/tweeter/HomePage';
import { Routes, Route } from 'react-router';

export const TweeterRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={<HomePage />}
      />
    </Routes>
  );
};
