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
        validator: (value: string) => value === 'channel',
        message: (props: ValidatorProps) =>
          `${props.value} is not equal to "channel"`
      }
    }
  },
  { timestamps: true }
);

export default channelSchema;
