import { Navigate, Route, Routes } from 'react-router';
import { AuthRoutes } from '../auth/AuthRoutes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        {/* <Route path="/*" element={<TweeterRoutes />} /> */}
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
};
