import { create } from 'zustand';
import { Question } from '../types';
import { persist, devtools } from 'zustand/middleware';
import confetti from 'canvas-confetti';
interface State {
    questions: Question[]
    currentQuestion: number;
    fetchQuestions: (limit: number) => Promise<void>;
    selectAnswer: (questionId: number, answerIndex: number ) => void;
    goNextQuestion: () => void;
    goPrevQuestion: () => void;
    reset: () => void;
};

export const useQuestionsStore = create<State>()(devtools(persist((set, get) => {
    return {
        loading: false,
        questions: [],
        currentQuestion: 0,
        fetchQuestions: async(limit: number) => {
           const res = await fetch('https://javascript-quiz-g17.netlify.app/data.json');
           const json = await res.json();
           
           const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);

           set({ questions });
        },
        selectAnswer: (questionId: number, userSelectetedAnswer: number) => {
            
            // getting the current state
            const currentState = get();

            // searching the questionInfo and checking if the user answer is the correct answer
            const newQuestions = structuredClone(currentState.questions);
            const questionIndex = newQuestions.findIndex(question => question.id === questionId);
            const questionInfo = newQuestions[questionIndex];
            const isCorrectUserAnswer = questionInfo.correctAnswer === userSelectetedAnswer;


            if (isCorrectUserAnswer) confetti();
            // update the state
            newQuestions[questionIndex] = {
                ...questionInfo,
                isCorrectUserAnswer,
                userSelectetedAnswer
            };
            set({ questions: newQuestions });
        },
        goNextQuestion: () => {
            const { currentQuestion, questions } = get();
            const newQuestion = currentQuestion + 1;

            if (newQuestion < questions.length) {
                set({ currentQuestion: newQuestion });
            }
        },
        goPrevQuestion: () => {
            const { currentQuestion } = get();
            const prevQuestion = currentQuestion - 1;

            if (prevQuestion >= 0) {
                set({ currentQuestion: prevQuestion });
            }
            
        },
        reset: () => {
            set({ currentQuestion: 0, questions: [] });
        }
    }
}, {
    name: 'questions',
    getStorage: () => localStorage
})));


