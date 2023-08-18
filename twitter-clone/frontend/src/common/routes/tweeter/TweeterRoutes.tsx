import { HomePage } from '@/modules/tweeter/pages/HomePage';
import { Routes, Route } from 'react-router';

export const TweeterRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<HomePage />}/>
    </Routes>
  )
}
