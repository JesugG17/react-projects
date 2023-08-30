import { create } from 'zustand';

interface State {
  status: 'non-authorized' | 'authorized' | 'checking';
}

interface Actions {
  login: (email: string, password: string) => Promise<void>;
  register: (userName: string, email: string, password: string) => Promise<void>;
}

export const useAuthStore = create<State & Actions>((set, get) => ({
  status: 'non-authorized',
  login: async (email: string, password: string) => {},
  register: async (userName: string, email: string, password: string) => {},
}));
