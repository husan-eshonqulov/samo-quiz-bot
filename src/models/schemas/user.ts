import { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true
    },
    is_bot: {
      type: Boolean,
      required: true
    },
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    language_code: {
      type: String,
      length: 2,
      required: true
    }
  },
  { timestamps: true }
);

export default userSchema;
