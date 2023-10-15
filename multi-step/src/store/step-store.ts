import { create } from 'zustand';

type State = {
  completedSteps: number[];
  currentStep: number;
};

type Action = {
  nextStep: () => void;
  previousStep: () => void;
  confirmAll: () => void;
  selectStep: (step: number) => void;
};

export const useStepStore = create<State & Action>((set, get) => ({
  completedSteps: [],
  currentStep: 1,
  nextStep: () => {
    const { completedSteps, currentStep } = get();

    const newCompletedSteps = [...completedSteps];
    if (!completedSteps.includes(currentStep)) {
      newCompletedSteps.push(currentStep);
    }

    if (currentStep === 4) return;

    set({
      currentStep: currentStep + 1,
      completedSteps: newCompletedSteps,
    });
  },
  previousStep: () => {
    const currentStep = get().currentStep;

    if (currentStep === 1) return;

    set({ currentStep: currentStep - 1 });
  },
  confirmAll: () => {
    set({currentStep: 5});
  },
  selectStep: (step: number) => {
    const completedSteps = get().completedSteps;

    if (!completedSteps.includes(step)) return;

    set({ currentStep: step });
  },
}));
