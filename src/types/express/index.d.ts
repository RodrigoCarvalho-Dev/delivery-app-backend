import 'express';

declare global {
  namespace Express {
    interface Request {
      id_client: string;
      id_deliveryman: string;
    }
  }
}
