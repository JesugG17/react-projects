
export interface Question {
    question: string;
    correctAnswer: number;
    answers: string[];
    flag: string;
    userSelectedAnswer?: number;
    isCorrectAnswer?: boolean;
}



