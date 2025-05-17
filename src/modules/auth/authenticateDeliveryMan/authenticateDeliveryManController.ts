import { Request, Response } from 'express';
import { success } from '../../../constants/success.constant';
import { AuthenticateDeliveryManUseCase } from './authenticateDeliveryManUseCase';

export class AuthenticateDeliveryManController {
  async handle(req: Request, res: Response) {
    const { username, pasword } = req.body;

    const authenticateDeliveryManUseCase = new AuthenticateDeliveryManUseCase();

    const token = await authenticateDeliveryManUseCase.execute({
      username: username,
      password: pasword,
    });

    res.status(201).json({
      message: success.AUTHENTICATION_CREATED_STATUS_201.message,
      status: success.AUTHENTICATION_CREATED_STATUS_201.status,
      token: token,
    });
  }
}
