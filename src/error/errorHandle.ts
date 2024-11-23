import { NextFunction, Request, Response } from 'express';
import config from '../config/config';
import { ZodError } from 'zod';
const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).json({
    message:
      err instanceof ZodError
        ? 'Validation error'
        : err?.message || 'An unexpected error occurred',
    success: false,
    error: err?.error || {
      name: err?.name || 'Error',
      ...err,
    },
    stack: config.NODE_ENV === 'production' ? undefined : err?.stack,
  });
};

export default errorHandler;
