import { model } from 'mongoose';

import quizSchema from './schemas/quiz';

const Quiz = model('Quiz', quizSchema);

export default Quiz;
