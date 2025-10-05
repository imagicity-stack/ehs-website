import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import admissionsRoute from './routes/admissions.js';
import contactRoute from './routes/contact.js';
import eventsRoute from './routes/events.js';
import authRoute from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/eldenheights';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
  res.json({ message: 'The Elden Heights School API is running', motto: 'Towards Eternal Glory' });
});

app.use('/api/admissions', admissionsRoute);
app.use('/api/contact', contactRoute);
app.use('/api/events', eventsRoute);
app.use('/api/login', authRoute);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed', error);
    app.listen(PORT, () => {
      console.log(`Server running in fallback mode on port ${PORT}`);
    });
  });
