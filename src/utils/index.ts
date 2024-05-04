import mongoose from 'mongoose';

import MyBot from '../types/bot';
import MyContext from '../types/context';
import MyQuiz from '../types/quiz';
import Commands from '../types/command';
import logger from './logger';

export { logger };

export const regCommands = (bot: MyBot, commands: Commands) => {
  commands.forEach((command) => {
    bot.command(command.command, command.method);
  });
};

export const connectDB = async (uri: string) => {
  return mongoose.connect(uri);
};

export const sendQuiz = async (ctx: MyContext, quiz: MyQuiz) => {
  if (ctx.update.channel_post) {
    const chatId = ctx.update.channel_post.chat.id;
    ctx.api.sendPoll(chatId, quiz.question, quiz.options, {
      type: 'quiz',
      correct_option_id: quiz.answer,
      explanation: quiz.explanation
    });
  }
};
