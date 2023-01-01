import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { gameSessionReducer } from "./slices/gameSession.slice";
import { quizzesReducer } from "./slices/quiz.slice";

const store = configureStore({
  reducer: {
    gameSession: gameSessionReducer,
    quizzes: quizzesReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
