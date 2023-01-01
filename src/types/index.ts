export type Quiz = {
  id: number;
  title: string;
  description: string;
  questions: Question[];
};

export type Question = {
  id: number;
  title: string;
  answers: Answer[];
};

export type Answer = {
  id: number;
  title: string;
  image?: string;
  isCorrect: boolean;
};

export type GameSession = {
  quizId: number;
  questions: Question[];
  answers: Answer[];
  score: number;
};
