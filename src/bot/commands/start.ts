import MyContext from '../../types/context';

const start = async (ctx: MyContext) => {
  await ctx.reply('Hi!');
};

export default start;
