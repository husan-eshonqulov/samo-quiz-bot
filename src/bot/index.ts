import { Bot } from 'grammy';

import config from '../config';
import MyContext from '../types/context';
import commands from './commands';
import { regCommands } from '../utils';

const bot = new Bot<MyContext>(config.botToken!);

bot.api.setMyCommands(commands);

regCommands(commands, bot);

bot.on('message:text', (ctx) => ctx.reply(ctx.message.text));

export default bot;
