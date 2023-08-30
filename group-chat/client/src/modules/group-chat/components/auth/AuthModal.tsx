import { LoginForm } from './LoginForm';

export const AuthModal = () => {
  return (
    <section className='absolute top-0 right-0 bg-black flex justify-center items-center bg-opacity-40 w-full min-h-screen'>
      <LoginForm />
    </section>
  );
};
