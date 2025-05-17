import { Request, Response } from 'express';
import { AutheticateClientUseCase } from './authenticateClientUseCase';
import { success } from '../../../constants/success.constant';

export class AuthenticateClientController {
  async handle(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;

    const authenticateClientUseCase = new AutheticateClientUseCase();

    const { token, client } = await authenticateClientUseCase.execute({
      username: username,
      password: password,
    });

    res.status(201).json({
      message: success.AUTHENTICATION_CREATED_STATUS_201.message,
      status: success.AUTHENTICATION_CREATED_STATUS_201.status,
      client: client,
      token: token,
    });
  }
}
