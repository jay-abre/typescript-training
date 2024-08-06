// src/app.ts

import express from 'express';
import todoRoutes from './routes/todoRoutes';
import { ErrorHandler } from './middleware/errorHandler';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/todos', todoRoutes);

app.use(ErrorHandler.handleErrors);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});