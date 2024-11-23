import express from 'express';
import { BikeControllers } from './product.controller';
const router = express.Router();

router.post('/products', BikeControllers.createBikesInfo);
router.get('/products', BikeControllers.getAllBikesByQuery);
router.get('/products/:productId', BikeControllers.getBikeById);
router.put('/products/:productId', BikeControllers.docUpdatedById);
router.delete('/products/:productId',);

export default router;
