import { Schema } from 'mongoose';

const quizSchema = new Schema(
  {
    question: {
      type: String,
      required: true
    },
    options: {
      type: [String],
      required: true,
      validate: {
        validator: (options: string[]) => options.length === 4,
        message: 'options array must contain exactly four elements'
      }
    }
  },
  { timestamps: true }
);

export default quizSchema;
