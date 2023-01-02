import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import QuizPage from "../pages/QuizPage";
import QuizQuestion from "../pages/QuizQuestion";
import QuizResults from "../pages/QuizResults";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/quiz/:quizId" element={<QuizPage />}>
          <Route path=":questionId" element={<QuizQuestion />} />
          <Route path="results" element={<QuizResults />} />
        </Route>
      </Route>
    </Routes>
  );
}
