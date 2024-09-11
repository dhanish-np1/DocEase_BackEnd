import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    server: {
      port: parseInt(process.env.PORT || '3000', 10),
    },
    database: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/DocEase',
    },
  };