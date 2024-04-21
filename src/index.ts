import bot from './bot';

const bootstrap = async () => {
  bot.start({
    onStart: () => console.log('Bot has been successfully started...')
  });
};

bootstrap();
