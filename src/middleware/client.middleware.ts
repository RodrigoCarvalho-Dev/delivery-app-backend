import { NextFunction, Request, Response } from 'express';
import { error } from '../constants/error.constant';

function clientMiddleware(err: Error, request: Request, response: Response, next: NextFunction) {
  if (err instanceof Error) {
    response.status(error.BAD_REQUEST_ERROR_400.status).json({
      message: error.BAD_REQUEST_ERROR_400.message,
      status: error.BAD_REQUEST_ERROR_400.message,
    });
  }

  response.status(error.INTERNAL_ERROR_500.status).json({
    message: error.INTERNAL_ERROR_500.messege,
    status: error.INTERNAL_ERROR_500.status,
  });

  next();
}

export { clientMiddleware };
