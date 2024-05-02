import { model } from 'mongoose';

import channelSchema from './schemas/channel';

const Channel = model('Channel', channelSchema);

export default Channel;
