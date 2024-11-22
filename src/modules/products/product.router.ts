import express from 'express';
import { BikeControllers } from './product.controller';
const router = express.Router();

router.get('/products', BikeControllers);
router.post('/products', BikeControllers.createBikesInfo);

export default router;
