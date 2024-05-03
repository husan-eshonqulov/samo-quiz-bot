import { CommandContext } from 'grammy';

import MyContext from './context';

type Command = (ctx: CommandContext<MyContext>) => Promise<void>;

export default Command;
