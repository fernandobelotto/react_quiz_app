import { Container, Heading, Text } from "@chakra-ui/react";
import { Outlet, useParams } from "react-router-dom";
import { useAppSelector } from "../store";
import { Quiz } from "../types";

function QuizPage() {
  const params = useParams();

  const quizId = params.quizId;

  const quizzes = useAppSelector((state) => state.quizzes.quizzes);

  const quiz: Quiz | undefined = quizzes.find(
    (quiz) => quiz.id === Number(quizId)
  );

  if (!quiz) {
    return (
      <Container>
        <Heading>Quiz Page</Heading>
        <Text>Quiz ID: {quizId}</Text>
        <Text>Quiz not found</Text>
      </Container>
    );
  }

  const { description, title } = quiz;

  return (
    <Container>
      <Heading>{title}</Heading>
      <Heading size="sm">{description}</Heading>
      <Outlet />
    </Container>
  );
}

export default QuizPage;
