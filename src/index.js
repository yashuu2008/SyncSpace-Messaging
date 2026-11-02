import express from 'express';
import { PORT } from './config/serverconfig.js';
import { StatusCodes } from 'http-status-codes';
import connectDB from './config/dbconfig.js';
import apirouter from './routes/apirouter.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apirouter);
app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
