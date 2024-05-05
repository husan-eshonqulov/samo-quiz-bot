import { Schema, ValidatorProps } from 'mongoose';

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
      type: String,
      required: true,
      validate: {
        validator: (type: string) => type === 'channel',
        message: (props: ValidatorProps) => `${props.value} should be "channel"`
      }
    }
  },
  { timestamps: true }
);

export default channelSchema;
