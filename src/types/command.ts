import { CommandContext } from 'grammy';

import MyContext from './context';

export type CommandFn = (ctx: CommandContext<MyContext>) => Promise<void>;

export type Command = {
  command: string;
  description: string;
  method: CommandFn;
};

export type Commands = Command[];

export default Commands;
