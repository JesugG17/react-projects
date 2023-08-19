import { Routes, Route } from 'react-router-dom';
import { LoginPage, RegisterPage } from '@/pages/auth';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/register"
        element={<RegisterPage />}
      />
    </Routes>
  );
};
