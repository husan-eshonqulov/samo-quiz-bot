import bot from './bot';

const bootstrap = () => {
  bot.start({
    onStart: () => console.log('Bot has been successfully started...')
  });
};

bootstrap();
