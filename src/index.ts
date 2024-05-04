import bot from './bot';
import config from './config';
import { logger, connectDB } from './utils';

const bootstrap = async () => {
  await connectDB(config.mongoURI!);
  logger.info(`"${config.mongoURI}" database has been connected...`);

  bot.start({
    onStart: () => {
      logger.info(
        `"https://t.me/${bot.botInfo.username}" bot has been started...`
      );
    }
  });
};

bootstrap();
