import { Request, Response } from 'express';
import { CreateClientUseCase } from './createClientUseCase';
import { success } from '../../../../constants/success.constant';
import { error } from '../../../../constants/error.constant';

export class CreateClientController {
  async handle(req: Request, res: Response): Promise<void> {
    try {
      const createClientUseCase = new CreateClientUseCase();

      const { username, password } = req.body;

      const client = await createClientUseCase.execute({
        username: username,
        password: password,
      });

      res.status(success.CREATED_STATUS_201.status).json({
        message: success.CREATED_STATUS_201.message,
        status: success.CREATED_STATUS_201.status,
        client: client,
      });
    } catch (errorParam) {
      console.error(errorParam);
      res.status(500).json({
        message: error.INTERNAL_ERROR_500.messege,
        status: error.INTERNAL_ERROR_500.status,
      });
    }
  }
}
