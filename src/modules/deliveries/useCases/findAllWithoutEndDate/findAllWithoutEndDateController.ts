import { Request, Response } from 'express';
import { FindAllWithoutEndDateUseCase } from './FindAllWithoutEndDateUseCase';
import { success } from '../../../../constants/success.constant';

export class FindAllWithoutEndDateController {
  async handle(req: Request, res: Response) {
    const findAllWithoutEndDateUseCase = new FindAllWithoutEndDateUseCase();

    const deliveries = findAllWithoutEndDateUseCase.execute();

    res.status(success.OK_STATUS_200.status).json(deliveries);
  }
}
