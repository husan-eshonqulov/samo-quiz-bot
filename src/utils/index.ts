import MyBot from '../types/bot';
import Commands from '../types/commands';
import MyMiddleware from '../types/middleware';
import logger from './logger';

export { logger };

export const regCommands = (commands: Commands, bot: MyBot) => {
  for (const name in commands) {
    bot.command(commands[name].command, commands[name].method);
  }
};

export const regMiddlewares = (middlewares: MyMiddleware[], bot: MyBot) => {
  middlewares.forEach((middleware) => {
    bot.use(middleware);
  });
};
