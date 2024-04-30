import { GrammyError, HttpError } from 'grammy';
import bot from './bot';
import config from './config';
import { logger, connectDB } from './utils';

const bootstrap = async () => {
  try {
    await connectDB(config.mongoURI!);
    logger.info(`${config.mongoURI} has been connected...`);
  } catch (error) {
    logger.error(error);
  }

  bot.start({
    onStart: () => {
      logger.info(`https://t.me/${bot.botInfo.username} has been started...`);
    }
  });

  bot.catch((err) => {
    const ctx = err.ctx;
    logger.error(`Error while handling update ${ctx.update.update_id}`);
    const e = err.error;
    if (e instanceof GrammyError) {
      logger.error('Error in request: ', e.description);
    } else if (e instanceof HttpError) {
      logger.error('Could not contact Telegram:', e);
    } else {
      logger.error('Unknown error:', e);
    }
  });
};

bootstrap();
