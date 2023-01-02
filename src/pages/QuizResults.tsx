import { Box, Button, Heading, HStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

function QuizResults() {
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
