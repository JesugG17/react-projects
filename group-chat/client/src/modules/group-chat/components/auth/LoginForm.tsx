import { useAuthModal } from '@hooks/useAuthModal';

export const LoginForm = () => {
  const { toggleModal } = useAuthModal();

  return (
    <div className='w-5/6 p-4 flex flex-col gap-3 bg-white rounded shadow md:max-w-[400px]'>
      <div className='flex'>
        <h4 className='text-3xl flex-1 text-center'>Login</h4>
        <button onClick={toggleModal}>X</button>
      </div>
      <form className='flex flex-col gap-4' onSubmit={(event) => event.preventDefault()}>
        <input className='p-2 rounded border-2' type='email' placeholder='Email' />
        <input className='p-2 rounded border-2' type='text' placeholder='Password' />
        <button className='bg-black py-2 font-bold text-white rounded'>Sign up</button>
      </form>
    </div>
  );
};
