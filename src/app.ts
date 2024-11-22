import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './modules/products/product.router';
const app: Application = express();

app.use(express.json());
app.use(cors());

// Define routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to the Bike Store API!',
    status: 200,
  });
});

// Error-Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Internal server error',
    status: 500,
  });
});

export default app;
