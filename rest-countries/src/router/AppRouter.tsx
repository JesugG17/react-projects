import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Detail } from '../pages';
import { MainLayout } from '../components/layout';

export const AppRouter = () => {
  return (
    <MainLayout>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/*' element={<Navigate to='/home' />} />
        </Routes>
    </MainLayout>
  )
}
