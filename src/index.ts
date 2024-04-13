import bot from './bot';

const bootstrap = async () => {
  await bot.start({
    onStart: () => console.log('Bot has been successfully started...')
  });
};

bootstrap();
