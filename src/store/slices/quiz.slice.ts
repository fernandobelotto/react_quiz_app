import { createSlice } from "@reduxjs/toolkit";
import { mockQuizzes } from "../../mock";
import { Quiz } from "../../types";

type InitialState = {
  quizzes: Quiz[];
};

const initialState: InitialState = {
  quizzes: mockQuizzes,
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {},
});

export const {} = quizzesSlice.actions;

export const quizzesReducer = quizzesSlice.reducer;
