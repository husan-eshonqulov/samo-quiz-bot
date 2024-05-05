import MyContext from '../../types/context';
import Quiz from '../../models/quiz';
import { sendQuiz } from '../../utils';

const test = async (ctx: MyContext) => {
  const count = Number(ctx.match);
  const quizzes = await Quiz.getRandQuizzes(count || 3);
  quizzes.forEach(async (quiz) => sendQuiz(ctx, quiz));
};

export default test;
