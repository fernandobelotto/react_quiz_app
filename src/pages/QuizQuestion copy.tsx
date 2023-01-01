import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { Answer } from "../types";

type Props = {};

function QuizResults({}: Props) {
  const params = useParams();

  const navigate = useNavigate();

  const { quizId } = params;

  return (
    <Box p={2} m={2} border="1px solid">
      <Heading>Results page</Heading>
      <HStack>
        <Button
          onClick={() => {
            navigate(`/quiz/${quizId}/1`);
          }}
        >
          Play Again
        </Button>

        <Button
          onClick={() => {
            navigate(`/`);
          }}
        >
          Go to Home
        </Button>
      </HStack>
    </Box>
  );
}

export default QuizResults;
