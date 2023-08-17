import { Navigate, Route, Routes } from 'react-router';
import { AuthRoutes } from '../auth/AuthRoutes';
import { TweeterRoutes } from '../tweeter/TweeterRoutes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<TweeterRoutes />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
