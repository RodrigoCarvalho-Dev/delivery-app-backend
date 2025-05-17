import { Request, Response } from 'express';
import { CreateDeliveryUseCase } from './createDeliveryUseCase';
import { success } from '../../../../constants/success.constant';

export class CreateDeliveryController {
  async handle(req: Request, res: Response): Promise<void> {
    const { item_name } = req.body;
    const { id_client } = req;

    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const delivery = await createDeliveryUseCase.execute({
      item_name: item_name,
      id_client: id_client,
    });

    res.status(201).json({
      message: success.CREATED_STATUS_201.message,
      status: success.CREATED_STATUS_201.status,
      delivery: {
        item_name: delivery.item_name,
        id_client: delivery.id_client,
        id: delivery.id,
        created_at: delivery.created_at,
        end_at: delivery.end_at,
      },
    });
  }
}
