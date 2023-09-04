import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { useAuthModal } from '@hooks/useAuthModal';
import { Tabs } from './Tabs';

export const AuthModal = () => {
  const [tabSelected, setTabSelected] = useState(0);
  const { toggleModal } = useAuthModal();
  return (
    <section className='absolute top-0 right-0 bg-black flex justify-center items-center bg-opacity-40 w-full min-h-screen'>
      <main className='w-5/6 flex flex-col gap-5 p-4 bg-white rounded shadow md:w-[400px]'>
        <div className='flex'>
          <Tabs tabSelected={tabSelected} setTab={setTabSelected} />
          <button className='hover:brightness-125 transition-all duration-200' onClick={toggleModal}>
            ❌
          </button>
        </div>
        {tabSelected === 0 ? <LoginForm /> : <RegisterForm />}
      </main>
    </section>
  );
};
