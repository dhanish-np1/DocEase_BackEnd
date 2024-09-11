import express from 'express';
import { config } from './infrastructure/config/config';
import { connectToDatabase } from './infrastructure/database/mongoos';

const app = express();
const port = config.server.port;

app.use(express.json());



// Connect to MongoDB and start the server
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
