import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '@/modules/auth/pages/LoginPage';
import { RegisterPage } from '@/modules/auth/pages/RegisterPage';

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
    </Routes>
  )
}
