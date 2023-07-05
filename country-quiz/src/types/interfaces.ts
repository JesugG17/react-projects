
export interface Question {
    question: string;
    correctAnswer: number;
    answers: string[];
    userSelectedAnswer?: number;
    isCorrectAnswer?: boolean;
}



