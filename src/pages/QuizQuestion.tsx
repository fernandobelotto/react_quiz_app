import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { Answer } from "../types";

type Props = {};

function QuizQuestion({}: Props) {
  const params = useParams();
  const { questionId, quizId } = params;

  const colorScheme = {
    true: "green",
    false: "red",
    idle: "gray",
  };

  const dispatch = useAppDispatch();

  const quizzes = useAppSelector((state) => state.quizzes.quizzes);

  const quiz = quizzes.find((quiz) => quiz.id === Number(quizId));

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  const question = quiz.questions.find(
    (question) => question.id === Number(questionId)
  );

  if (!question) {
    return <div>Question not found</div>;
  }

  const navigate = useNavigate();

  const [isCorrect, setIsCorrect] = useState<keyof typeof colorScheme>("idle");

  const handleSelectAnswer = ({ answer }: { answer: Answer }) => {
    if (answer.isCorrect) {
      setIsCorrect("true");
    } else {
      setIsCorrect("false");
    }

    const nextQuestion = quiz.questions.find(
      (question) => question.id === Number(questionId) + 1
    );

    setTimeout(() => {
      if (nextQuestion) {
        navigate(`/quiz/${quiz.id}/${nextQuestion.id}`);
        setIsCorrect("idle");
      } else {
        navigate(`/quiz/${quiz.id}/results`);
        setIsCorrect("idle");
      }
    }, 1000);
  };

  return (
    <Box p={2} m={2} border="1px solid">
      <>
        <Text
          border="1px solid"
          borderColor={colorScheme[isCorrect]}
          p={2}
          m={2}
        >
          {question.title}
        </Text>
        <VStack>
          {question.answers.map((answer) => (
            <Button
              colorScheme={
                isCorrect === "true"
                  ? "green"
                  : isCorrect === "false"
                  ? "red"
                  : "gray"
              }
              onClick={() => handleSelectAnswer({ answer })}
            >
              {answer.title}
            </Button>
          ))}
        </VStack>
      </>
    </Box>
  );
}

export default QuizQuestion;
