import { NextFunction, Request, Response } from 'express';
import { BikeService } from './product.service';

// create a new bike
const createBikesInfo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // get data from body
    const bikeData = req.body;
    // send the data to service function
    const result = await BikeService.bikeInsertToDb(bikeData);
    // Respond with success
    res.status(201).json({
      message: 'Bike created successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    // Pass the error to the next middleware for handling
    next(error);
  }
};
// get bikes by query: name, brand, category
const getAllBikesByQuery = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // get query from query parameter
    const { searchTerm } = req.query;
    const result = await BikeService.getAllBikes(searchTerm as string);

    // Respond with success
    res.status(200).json({
      message: 'Bikes retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    // Pass the error to the next middleware for handling
    next(error);
  }
};
// get a specific bike by using id
const getBikeById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // get productId from params
    const { productId } = req.params;
    // send request to service function
    const result = await BikeService.findBikeById(productId as string);

    // Respond with success
    res.status(200).json({
      message: 'Bike retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    // Pass the error to the next middleware for handling
    next(error);
  }
};

export const BikeControllers = {
  createBikesInfo,
  getAllBikesByQuery,
  getBikeById,
};
