import { twMerge } from 'tailwind-merge';
import { useStepStore } from '../store/step-store';

export const Footer = () => {
  const { previousStep, nextStep, confirmAll, currentStep } = useStepStore();

  return (
    <footer className='fixed w-full flex justify-between bottom-0 bg-white p-4 md:static lg:w-[85%]'>
      <button
        onClick={previousStep}
        className={twMerge('font-bold opacity-50 transition-all duration-150 hover:opacity-100 hover:text-blue-dark', currentStep === 1 && 'opacity-0 cursor-none')}
      >
        Go back
      </button>
      {currentStep === 4 ? (
        <button onClick={confirmAll} className='bg-violet-light py-2 px-4 rounded-md text-white font-medium transition-all duration-200 hover:brightness-150'>
          Confirm
        </button>
      ) : (
        <button onClick={nextStep} className='bg-blue-dark text-white p-2 rounded-md lg:px-4 transition-all duration-200 hover:brightness-110'>
          Next step
        </button>
      )}
    </footer>
  );
};
