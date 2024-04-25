import { Bot } from 'grammy';

import config from '../config';
import MyContext from '../types/context';
import middlewares from '../middlewares';
import commands from './commands';
import { regMiddlewares, regCommands } from '../utils';

const bot = new Bot<MyContext>(config.botToken!);

bot.api.setMyCommands(commands);

regMiddlewares(middlewares, bot);
regCommands(commands, bot);

bot.on('message:text', (ctx) => ctx.reply(ctx.message.text));

export default bot;
