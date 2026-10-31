import mongoose from 'mongoose';
import { NODE_ENV, DEV_DB_URL, PROD_DB_URL } from './serverconfig.js';

export default async function connectDB() {
  try {
    if (NODE_ENV === 'development') {
      // Connect to development database
      await mongoose.connect(DEV_DB_URL);
    } else if (NODE_ENV === 'production') {
      // Connect to production database
      await mongoose.connect(PROD_DB_URL);
    }
    console.log(`Connected to the ${NODE_ENV} database successfully.`);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}
