import mongoose from 'mongoose';
import { TBike } from './product.interface';
const { Schema } = mongoose;

const bikeSchema = new Schema<TBike>(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ["Mountain", "Road", "Hybrid", "Electric"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const Bike = mongoose.model("bikes", bikeSchema);

export default Bike;
