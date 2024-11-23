import { Request, Response, NextFunction } from 'express';
import config from '../config/config';

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).json({
    message: err?.message || 'An unexpected error occurred',
    success: false,
    error: err?.error || {
      name: err?.name || 'Error',
      ...err,
    },
    stack: config.NODE_ENV === 'production' ? undefined : err?.stack,
  });
};

export default errorHandler;
