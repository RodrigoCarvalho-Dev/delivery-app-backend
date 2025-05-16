import { Request, Response } from 'express';
import { CreateDeliveryManUseCase } from './createDeliveryManUseCase';
import { success } from '../../../../constants/success.constant';

export class CreateDeliveryManController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    const createDeliveryManUseCase = new CreateDeliveryManUseCase();

    const deliveryMan = await createDeliveryManUseCase.execute({
      username: username,
      password: password,
    });

    res.status(201).json({
      message: success.CREATED_STATUS_201.message,
      status: success.CREATED_STATUS_201.status,
      deliveryMan: deliveryMan,
    });
  }
}
