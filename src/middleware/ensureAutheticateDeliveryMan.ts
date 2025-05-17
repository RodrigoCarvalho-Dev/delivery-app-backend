import { NextFunction, Request, Response } from 'express';
import { error } from '../constants/error.constant';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export interface AuthenticatedRequest extends Request {
  id_deliveryman: string;
}

export async function ensureAuthenticateDeliveryMan(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader: any = req.headers.authorization;

  if (!authHeader) {
    res.status(error.UNAUTHORIZED_ERROR_401.status).json({
      message: error.UNAUTHORIZED_ERROR_401.message,
      status: error.UNAUTHORIZED_ERROR_401.status,
    });
  }

  const [, token] = authHeader?.split(' ');

  try {
    const { sub } = verify(token, String(process.env.SECRET_KEY)) as IPayload;

    req.id_deliveryman = sub;
  } catch {
    res.status(error.UNAUTHORIZED_ERROR_401.status).json({
      message: 'invalid token',
      status: error.UNAUTHORIZED_ERROR_401.status,
    });
  }

  next();
}
