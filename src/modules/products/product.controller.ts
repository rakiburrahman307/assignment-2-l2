import { Request, Response } from 'express';
import { BikeService } from './product.service';

// create a new bike
const createBikesInfo = async (req: Request, res: Response) => {
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
    res.status(500).json({
      message: 'Failed to create bike',
      success: false,
      error: error?.message || 'Internal Server Error',
    });
  }
};
// get bikes by query: name, brand, category
const getAllBikesByQuery = async (req: Request, res: Response) => {
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
    res.status(500).json({
      message: 'Failed to retrieve bikes',
      success: false,
      error: error?.message || 'Internal Server Error',
    });
  }
};
// get a specific bike by using id
const getBikeById = async (req: Request, res: Response) => {
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
    res.status(404).json({
      message: 'Bike not found',
      success: false,
      error: error?.message || 'Not Found',
    });
  }
};

export const BikeControllers = {
  createBikesInfo,
  getAllBikesByQuery,
  getBikeById,
};
