import mongoose from 'mongoose';

import MyBot from '../types/bot';
import Commands from '../types/commands';
import MyMiddleware from '../types/middleware';
import logger from './logger';

export { logger };

export const regCommands = (commands: Commands, bot: MyBot) => {
  commands.forEach((command) => {
    bot.command(command.command, command.method);
  });
};

export const regMiddlewares = (middlewares: MyMiddleware[], bot: MyBot) => {
  middlewares.forEach((middleware) => {
    bot.use(middleware);
  });
};

export const connectDB = (uri: string) => {
  return mongoose.connect(uri);
};
