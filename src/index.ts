import bot from './bot';
import { logger } from './utils';

const bootstrap = () => {
  bot.start({
    onStart: () => {
      logger.info(`https://t.me/${bot.botInfo.username} has been started...`);
    }
  });
};

bootstrap();
