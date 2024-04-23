import MyBot from '../types/bot';
import Commands from '../types/commands';
import MyMiddleware from '../types/middleware';

export const regCommands = (commands: Commands, bot: MyBot) => {
  for (const name in commands) {
    bot.command(commands[name].title, commands[name].command);
  }
};

export const regMiddlewares = (middlewares: MyMiddleware[], bot: MyBot) => {
  middlewares.forEach((middleware) => {
    bot.use(middleware);
  });
};
