import { Response } from 'express';
import { UpdatedDeliveryManUseCase } from './updatedDeliveryManUseCase';
import { AuthenticatedRequest } from '../../../../middleware/ensureAutheticateDeliveryMan';
import { success } from '../../../../constants/success.constant';

export class UpdatedDeliveryManController {
  async handle(req: AuthenticatedRequest, res: Response) {
    const { id_deliveryman } = req;
    const { id } = req.params;

    const updatedDeliveryManUseCase = new UpdatedDeliveryManUseCase();

    const result = await updatedDeliveryManUseCase.execute({
      id_delivery: id,
      id_deliveryman: id_deliveryman,
    });

    res.status(success.OK_STATUS_200.status).json({
      message: success.OK_STATUS_200.message,
      status: success.OK_STATUS_200.status,
      updated: result,
    });
  }
}
