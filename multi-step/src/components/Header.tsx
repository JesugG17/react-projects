import { useStepStore } from "../store/step-store";
import { twMerge } from 'tailwind-merge';

const STEPS = [
  {
    stepNumber: 1,
    stepName: 'YOUR INFO'
  },
  {
    stepNumber: 2,
    stepName: 'SELECT PLAN'
  },
  {
    stepNumber: 3,
    stepName: 'ADD-ONS'
  },
  {
    stepNumber: 4,
    stepName: 'SUMMARY'
  },
]

export const Header = () => {

  const currentStep = useStepStore(state => state.currentStep);

  return (
    <header className='relative'>
      <img
        className='w-full h-[150px] object-cover md:hidden'
        src='/img/bg-sidebar-mobile.svg'
        alt='Bg mobile'
      />
      <img className="hidden md:block h-full object-cover" src="/img/bg-sidebar-desktop.svg" alt="Bg desktop" />
      <nav className='absolute top-8 flex justify-center w-full md:justify-start md:left-8'>
        <ul className='flex gap-4 md:flex-col md:gap-8'>
          {STEPS.map((step) => (
            <li
              className="md:flex md:gap-5 md:items-center"
              key={step.stepNumber}
            >
              <div className={twMerge('text-white ring-1 ring-white p-4 w-6 h-6 flex justify-center items-center rounded-full', currentStep === step.stepNumber && 'bg-blue-light text-black')}>{step.stepNumber}</div>
              <div className="hidden text-white md:flex md:flex-col">
                <span className="opacity-40 text-xs">STEP {step.stepNumber}</span>
                <h5 className="text-sm font-medium">{step.stepName}</h5>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
