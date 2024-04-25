import MyContext from '../../types/context';

const start = async (ctx: MyContext) => {
  await ctx.reply(ctx.t('welcome-message'));
};

export default start;
