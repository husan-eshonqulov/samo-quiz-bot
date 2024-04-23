import MyContext from '../../types/context';

const start = async (ctx: MyContext) => {
  await ctx.reply(ctx.t('start-command'));
};

export default start;
