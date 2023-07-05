import { create } from "zustand";
import { Question } from "../types/interfaces";
import { api } from "../api/api";
import { CountryAPI } from "../types/country-api";

interface State {
    questions: Question[];
    // countries: string[];
    currentQuestion: number;
    createQuestions: (limit: number, region?: string) => Promise<void>;
    goNextQuestion: () => void;
};


export const useQuestionStore = create<State>((set, get) => ({
    questions: [],
    currentQuestion: 0,
    createQuestions: async(limit: number, region: string = 'europe') => {
        const { data } = await api.get<CountryAPI[]>(`/region/${region}`);

        const shuffledCountries = data.sort(() => Math.random() - 0.5).slice(0, limit);
        const allCountries = data.map( country => country.name.common);

        const questions: Question[] = shuffledCountries.map( country => {
            const question = `${country.capital} is the capital of...`
            const correctAnswer = country.name.common;
            const restAnswers = allCountries.filter( c =>  c !== country.name.common).sort(() => Math.random() - 0.5).slice(0, 3);

            const answers = [...restAnswers, correctAnswer].sort(() => Math.random() - 0.5);
            const indexAnswer = answers.findIndex( c => c === correctAnswer );

            return {
                question,
                correctAnswer: indexAnswer,
                answers
            }
        })

        set({ questions });

    },
    goNextQuestion: () => {
        const { currentQuestion, questions } = get();
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion <= questions.length - 1) {
            set({ currentQuestion: nextQuestion});
        }


    }

}))