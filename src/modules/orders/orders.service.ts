import { BikeService } from '../products/product.service';
import { TOrder } from './orders.interface';
import Order from './orders.model';



const createOrder = async (orderData: TOrder) => {
    const order = await Order.create(orderData);
    return order;
  };
const validateAndUpdateBikeInfo = async (
  productId: string,
  quantity: number,
) => {
  // Find the bike by ID
  const bike = await BikeService.findBikeById(productId);

  if (!bike) {
    throw new Error('Bike not found');
  }

  // Check if sufficient stock is available
  if (bike.quantity < quantity) {
    throw new Error('Stock not available');
  }

  // Reduce the bike's quantity
  const newQuantity = bike.quantity - quantity;

  // Update the bike's quantity and inStock status
  await BikeService.updateDoc(productId, {
    quantity: newQuantity,
    inStock: newQuantity > 0,
  });

  return bike;
};
export const orderService = {
    createOrder,
  validateAndUpdateBikeInfo,
};
