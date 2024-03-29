import { useStepStore } from '../store/step-store';
import { PersonalInfo, SelectPlan, PickAddons, Summary, ConfirmView } from './app';

export const Steps = () => {
  const currentStep = useStepStore((state) => state.currentStep);

  return (
    <main className='absolute top-24 w-full flex justify-center md:static lg:w-[90%] lg:block'>
      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <SelectPlan />}
      {currentStep === 3 && <PickAddons />}
      {currentStep === 4 && <Summary />}
      {currentStep === 5 && <ConfirmView />}
    </main>
  );
};
