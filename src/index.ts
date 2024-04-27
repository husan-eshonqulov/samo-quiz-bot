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
};

bootstrap();
