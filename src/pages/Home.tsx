import {
  Box,
  Button,
  Center,
  Heading,
  VStack,
  Text,
  Container,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { setNewGameSession } from "../store/slices/gameSession.slice";
import { Quiz } from "../types";

export const Home = () => {
  const quizzes = useAppSelector((state) => state.quizzes.quizzes);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleStartQuiz = (quizId: number) => {
    dispatch(setNewGameSession({ quizId }));
    navigate(`/quiz/${quizId}/1`);
  };

  return (
    <Container maxW="container.lg">
      <Heading>Quiz App</Heading>
      <HStack>
        {quizzes.map((quiz: Quiz) => (
          <VStack p={5} border="1px solid" rounded="lg" key={quiz.id}>
            <Heading>{quiz.title}</Heading>
            <Text>{quiz.description}</Text>
            <Text>{quiz.questions.length} questions</Text>
            <Button onClick={() => handleStartQuiz(quiz.id)}>Start</Button>
          </VStack>
        ))}
      </HStack>
    </Container>
  );
};
