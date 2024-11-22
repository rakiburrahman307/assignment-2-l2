import { Request, Response } from 'express';
import { BikeService } from './product.service';


// const getBike = (req: Request, res: Response) => {
//     try {
//       // send request to service function
//       const result = await BikeService.getBikeById(req.params.id);
//       // respond with success
//       res.status(200).json({
//         message: 'Bike found successfully',
//         success: true,
//         data: result,
//       });
//     } catch (error: any) {
//       res.status(404).json({
//         message: 'Bike not found',
//         success: false,
//         error: error.message || 'Not Found',
//       });
//     }
//   }
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
      error: error.message || 'Internal Server Error',
    });
  }
};

export const BikeControllers = {
  createBikesInfo,
};
