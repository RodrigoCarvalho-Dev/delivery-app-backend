import { compare } from 'bcrypt';
import { error } from '../../../constants/error.constant';
import { prisma } from '../../../database/prismaClient';
import { sign } from 'jsonwebtoken';

interface IAuthenticateDeliveryManUseCase {
  username: string;
  password: string;
}

interface ResponseIAuthenticateDeliveryManUseCase {
  token: string;
}

export class AuthenticateDeliveryManUseCase {
  async execute({
    username,
    password,
  }: IAuthenticateDeliveryManUseCase): Promise<ResponseIAuthenticateDeliveryManUseCase> {
    const deliveryMan = await prisma.deliveryman.findUnique({
      where: {
        username: username,
      },
    });

    if (!deliveryMan) {
      throw new Error(
        `${error.NOT_FOUND_ERROR_404.message} | status : ${error.NOT_FOUND_ERROR_404.status}`
      );
    }

    // Verificar se username está cadastrado

    const passwordMatch = await compare(password, deliveryMan.password);

    if (!passwordMatch) {
      throw new Error(
        `${error.PASSWORD_CONFLICT_MATCH_409.message} | status : ${error.PASSWORD_CONFLICT_MATCH_409.status}`
      );
    }

    // verificar se a senha corresponde ao username

    // gerar token

    const token = sign(
      {
        username,
      },
      String(process.env.SECRET_KEY),
      {
        subject: deliveryMan.id,
        expiresIn: '1d',
      }
    );

    return { token };
  }
}
