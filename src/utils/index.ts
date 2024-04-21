import MyBot from '../types/bot';
import Commands from '../types/commands';

export const regCommands = (commands: Commands, bot: MyBot) => {
  for (const name in commands) {
    bot.command(commands[name].title, commands[name].command);
  }
};
