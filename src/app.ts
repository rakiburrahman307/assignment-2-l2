import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './modules/products/product.router';
import errorHandler from './error/errorHandle';
const app: Application = express();

app.use(express.json());
app.use(cors());

// Define routes
app.use('/api', router);

// home page welcome Message
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to the Bike Store API!',
    status: 200,
  });
});
// if any route not found
app.get('/*', (req: Request, res: Response) => {
  res.status(404).json({
    message: `Page not found: ${req?.originalUrl}`,
    status: 404,
  });
});
// Error-Handling Middleware
app.use(errorHandler);

export default app;
