import { create } from "zustand";
import { Question } from "../types/interfaces";
import { api } from "../api/api";
import { CountryAPI } from "../types/country-api";
import confetti from 'canvas-confetti';

interface State {
    questions: Question[];
    currentQuestion: number;
    isGameOver: boolean;
    isFlagQuiz: boolean;
    createQuestions: (limit: number,  isFlagQuiz: boolean, region: string) => Promise<void>;
    goNextQuestion: () => void;
    checkAnswer: (userSelectedAnswer: number) => void;
    resetGame: () => void;
};


export const useQuestionStore = create<State>((set, get) => ({
    questions: [],
    currentQuestion: 0,
    isGameOver: false,
    isFlagQuiz: false,
    createQuestions: async(limit: number,  isFlagQuiz: boolean, region: string) => {

        const endpoint = region === 'all' ? '/all' : `/region/${region}`;

        const { data } = await api.get<CountryAPI[]>(endpoint);

        const shuffledCountries = data.sort(() => Math.random() - 0.5).slice(0, limit);
        const allCountries = data.map( country => country.name.common);

        const questions: Question[] = shuffledCountries.map( country => {
            const question = (isFlagQuiz) 
                             ? 'Which country does this flag belong to?' 
                             : `${country.capital} is the capital of`;

            const correctAnswer = country.name.common;
            const restAnswers = allCountries.filter( c =>  c !== country.name.common).sort(() => Math.random() - 0.5).slice(0, 3);

            const answers = [...restAnswers, correctAnswer].sort(() => Math.random() - 0.5);
            const indexAnswer = answers.findIndex( c => c === correctAnswer );

            return {
                question,
                correctAnswer: indexAnswer,
                answers,
                flag: country.flags.svg
            }
        })

        set({ questions, isFlagQuiz });

    },
    goNextQuestion: () => {
        const { currentQuestion, questions } = get();
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion <= questions.length - 1) {
            return set({ currentQuestion: nextQuestion});
        }

        set({ isGameOver: true, isFlagQuiz: false });

    },
    checkAnswer: (userSelectedAnswer: number) => {
        const { questions, currentQuestion } = get();
       
        const question = questions[currentQuestion];
        const newQuestions = [...questions];

        const isCorrectAnswer = question.correctAnswer === userSelectedAnswer;

        if (isCorrectAnswer) confetti();
        
        newQuestions[currentQuestion] = {
            ...newQuestions[currentQuestion],
            isCorrectAnswer,
            userSelectedAnswer
        }
        set({ questions: newQuestions });
    },
    resetGame: () => {
        set({
            questions: [],
            currentQuestion: 0,
            isGameOver: false,
            isFlagQuiz: false
        })
    }

}));