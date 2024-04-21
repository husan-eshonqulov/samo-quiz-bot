import { Bot } from 'grammy';

import config from '../config';
import commands from './commands';
import { addCommands } from '../utils';

const bot = new Bot(config.botToken!);

addCommands(commands, bot);

bot.on('message:text', (ctx) => ctx.reply(ctx.message.text));

export default bot;
