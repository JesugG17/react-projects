const buttons = [1, 2, 3, 4];

export const Header = () => {
  return (
    <header className='relative'>
      <img
        className='w-full h-[150px] object-cover'
        src='/img/bg-sidebar-mobile.svg'
        alt='Bg mobile'
      />
      <nav className='absolute top-8 flex justify-center w-full'>
        <ul className='flex gap-3'>
          {buttons.map((button) => (
            <li
              key={button}
              className='w-7 h-7 first-of-type:bg-blue-light first-of-type:text-black rounded-full p-2 text-sm flex justify-center items-center text-white ring-1 ring-white'
            >
              {button}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
