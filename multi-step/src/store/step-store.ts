import { create } from 'zustand';

type State = {
  completedSteps: number[];
  currentStep: number;
};

type Action = {
  nextStep: () => void;
  previousStep: () => void;
  selectStep: (step: number) => void;
};

export const useStepStore = create<State & Action>((set, get) => ({
  completedSteps: [],
  currentStep: 3,
  nextStep: () => {
    const { completedSteps, currentStep } = get();

    const newCompletedSteps = [...completedSteps];
    if (!completedSteps.includes(currentStep)) {
      newCompletedSteps.push(currentStep);
    }

    set({
      currentStep: currentStep + 1,
      completedSteps: newCompletedSteps,
    });
  },
  previousStep: () => {
    const currentStep = get().currentStep;

    set({ currentStep: currentStep - 1 });
  },
  selectStep: (step: number) => {
    const completedSteps = get().completedSteps;

    if (!completedSteps.includes(step)) return;

    set({ currentStep: step });
  },
}));
