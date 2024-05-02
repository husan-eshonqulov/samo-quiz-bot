import { Schema } from 'mongoose';

const channelSchema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: 'channel',
      required: true
    }
  },
  { timestamps: true }
);

export default channelSchema;
