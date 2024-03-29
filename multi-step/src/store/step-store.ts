import { create } from 'zustand';

type PriceSelected = 'montly' | 'yearly';

type Summary = {
  plan: {
    type: string;
    price: number;
  },
  addons: {
    type: string;
    price: number;
  }
}

type State = {
  completedSteps: number[];
  currentStep: number;
  priceSelected: PriceSelected;
  summary: Summary;
};

type Action = {
  nextStep: () => void;
  previousStep: () => void;
  setPriceSelected: (priceSelected: PriceSelected) => void;
  confirmAll: () => void;
  selectStep: (step: number) => void;
};

export const useStepStore = create<State & Action>((set, get) => ({
  completedSteps: [],
  currentStep: 1,
  summary: {
    plan: { type: 'Arcade', price: 2 },
    addons: { type: 'Larger Storage', price: 10 }
  },
  priceSelected: 'montly',
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
  setPriceSelected: (planSelected: PriceSelected) => {
    set({ priceSelected: planSelected });
  },
  confirmAll: () => {
    set({ currentStep: 5 });
  },
  selectStep: (step: number) => {
    const completedSteps = get().completedSteps;

    if (!completedSteps.includes(step)) return;

    set({ currentStep: step });
  },
}));
