import { Bot } from 'grammy';

import config from '../config';

const bot = new Bot(config.botToken!);

bot.on('message:text', (ctx) => ctx.reply(ctx.message.text));

export default bot;
