import dotenv from 'dotenv';

dotenv.config();

const config = {
  botToken: process.env.BOT_TOKEN,
  mongoURI: process.env.MONGO_URI
};

export default config;
