import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer, GameSession, Question } from "../../types";

type InitialState = {
  session: GameSession | null;
};

const initialState: InitialState = {
  session: null,
};

const gameSessionSlice = createSlice({
  name: "gameSession",
  initialState,
  reducers: {
    setNewGameSession(state, action: PayloadAction<{ quizId: number }>) {
      state.session = {
        quizId: action.payload.quizId,
        questions: [],
        answers: [],
        score: 0,
      };
    },
    resetGameSession(state) {
      state.session = null;
    },
    addAnswer(
      state,
      action: PayloadAction<{ question: Question; answer: Answer }>
    ) {
      if (state.session) {
        state.session.answers.push(action.payload.answer);
        state.session.questions.push(action.payload.question);
      }
    },
  },
});

export const { setNewGameSession, resetGameSession, addAnswer } =
  gameSessionSlice.actions;

export const gameSessionReducer = gameSessionSlice.reducer;
