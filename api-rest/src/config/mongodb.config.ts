import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: './.env.development.local' });

import mongoose from 'mongoose';

const URI = process.env.MONGODB_URI;

const mongoConnect = async () => {
  try {
    await mongoose.connect(URI);
  } catch (error) {
    console.log(error);
  }
};

export { mongoConnect };
