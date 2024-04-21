import MyContext from '../../types/context';

const start = async (ctx: MyContext) => {
  await ctx.reply('/start command typed!');
};

export default start;
