import { Schema, ValidatorProps } from 'mongoose';

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
    },
    answer: {
      type: Number,
      required: true,
      validate: {
        validator: (answer: number) =>
          Number.isInteger(answer) && answer >= 0 && answer <= 3,
        message: (props: ValidatorProps) =>
          `${props.value} should be an integer and between 0 and 3`
      }
    }
  },
  {
    timestamps: true,
    statics: {
      async getRandQuizzes(size: number) {
        const count = await this.countDocuments();
        return this.aggregate([{ $sample: { size: Math.min(size, count) } }]);
      }
    }
  }
);

export default quizSchema;
