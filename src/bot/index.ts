import { Bot } from 'grammy';

import MyContext from '../types/context';
import config from '../config';
import commands from './commands';
import { regCommands } from '../utils';

const bot = new Bot<MyContext>(config.botToken!);

regCommands(bot, commands);

bot.on('message:text', async (ctx) => ctx.reply(ctx.message.text));

export default bot;
