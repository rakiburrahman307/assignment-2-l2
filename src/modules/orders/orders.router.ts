import express from 'express';
import { orderControllers } from './orders.controller';
const orderRouter = express.Router();

// all order related routes 
orderRouter.post('/orders', orderControllers.createProductOrder);

export default orderRouter;
