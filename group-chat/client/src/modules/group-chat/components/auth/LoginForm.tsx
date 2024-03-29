export const LoginForm = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h4 className='text-3xl font-medium'>Login</h4>
      <form className='flex flex-col gap-4' onSubmit={(event) => event.preventDefault()}>
        <input className='p-2 rounded border-2' type='email' placeholder='Email' />
        <input className='p-2 rounded border-2' type='text' placeholder='Password' />
        <button className='bg-black py-2 font-bold text-white rounded'>Sign in</button>
      </form>
    </div>
  );
};
