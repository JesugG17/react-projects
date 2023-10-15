import { useStepStore } from "../store/step-store";
import { twMerge } from 'tailwind-merge';

const buttons = [1, 2, 3, 4];

export const Header = () => {

  const currentStep = useStepStore(state => state.currentStep);

  return (
    <header className='relative'>
      <img
        className='w-full h-[150px] object-cover'
        src='/img/bg-sidebar-mobile.svg'
        alt='Bg mobile'
      />
      <nav className='absolute top-8 flex justify-center w-full'>
        <ul className='flex gap-3'>
          {buttons.map((button, index) => (
            <li
              key={button}
              className={twMerge('w-7 h-7 rounded-full p-2 text-sm flex justify-center items-center text-white ring-1 ring-white', currentStep === index + 1  && 'bg-blue-light text-black', currentStep === 5 && 'last-of-type:bg-blue-light last-of-type:text-black')}
            >
              {button}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
