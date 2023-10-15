import { twMerge } from 'tailwind-merge';
import { useStepStore } from '../store/step-store';

export const Footer = () => {
  const { previousStep, nextStep, confirmAll, currentStep } = useStepStore();

  return (
    <footer className='fixed w-full flex justify-between bottom-0 bg-white p-4'>
      <button
        onClick={previousStep}
        className={twMerge('font-bold opacity-50', currentStep === 1 && 'opacity-0 cursor-none')}
      >
        Go back
      </button>
      {currentStep === 4 ? (
        <button onClick={confirmAll} className='bg-violet-light py-2 px-4 rounded-md text-white font-medium'>
          Confirm
        </button>
      ) : (
        <button onClick={nextStep} className='bg-blue-dark text-white p-2 rounded'>
          Next step
        </button>
      )}
    </footer>
  );
};
