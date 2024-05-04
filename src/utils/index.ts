import mongoose from 'mongoose';

import MyBot from '../types/bot';
import Commands from '../types/commands';
import logger from './logger';
import MyQuiz from '../types/quiz';
import MyContext from '../types/context';

export { logger };

export const regCommands = (commands: Commands, bot: MyBot) => {
  commands.forEach((command) => {
    bot.command(command.command, command.method);
  });
};

export const connectDB = (uri: string) => {
  return mongoose.connect(uri);
};

export const sendQuiz = async (ctx: MyContext, quiz: MyQuiz) => {
  if (ctx.update.channel_post) {
    const chatId = ctx.update.channel_post.chat.id;
    ctx.api.sendPoll(chatId, quiz.question, quiz.options, {
      type: 'quiz',
      correct_option_id: quiz.answer
    });
  }
};
