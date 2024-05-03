import MyContext from '../../types/context';
import Channel from '../../models/channel';
import { logger } from '../../utils';

const start = async (ctx: MyContext) => {
  const update = ctx.update;

  if (update.channel_post) {
    const chat = update.channel_post.chat;
    const channel = await Channel.findOne({ id: chat.id });
    if (channel) {
      channel.title = chat.title;
      channel.type = chat.type;
      await channel.save();
      logger.info(`"${channel.title}" channel has been updated...`);
    } else {
      const newChannel = new Channel(chat);
      await newChannel.save();
      logger.info(`"${newChannel.title}" channel has been added...`);
    }
  }

  await ctx.reply('Hi!');
};

export default start;
