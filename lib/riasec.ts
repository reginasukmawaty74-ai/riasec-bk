export type Answer = {
  questionId: number;
  type: string;
  score: number;
};

export function calculateRIASEC(answers: Answer[]) {
  const result = {
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0,
  };

  answers.forEach((answer) => {
    result[answer.type as keyof typeof result] += answer.score;
  });

  const hollandCode = Object.entries(result)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((item) => item[0])
    .join("");

  return {
    ...result,
    hollandCode,
  };
}