import { create } from "zustand";
import { Question } from "../types/interfaces";
import { api } from "../api/api";
import { CountryAPI } from "../types/country-api";

interface State {
    questions: Question[];
    currentQuestion: number;
    createQuestions: (limit: number, region?: string) => Promise<void>;
};


export const useQuestionStore = create<State>((set, get) => ({
    questions: [],
    currentQuestion: 0,
    createQuestions: async(limit: number, region: string = 'europe') => {
        const { data } = await api.get<CountryAPI[]>(`/${region}`);
        const countries = data.sort(() => Math.random() - 0.5).slice(0, limit);

        

    }

}))