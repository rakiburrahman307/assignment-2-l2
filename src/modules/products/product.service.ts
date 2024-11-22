import { TBike } from './product.interface';
import Bike from './product.model';

const bikeInsertToDb = async (bikeData: TBike) => {
  const { name, brand, price, category, description, quantity, inStock } =
    bikeData;
  const result = await Bike.create({
    name,
    brand,
    price,
    category,
    description,
    quantity,
    inStock,
  });
  return result;
};
const

export const BikeService = {
    bikeInsertToDb,
};
