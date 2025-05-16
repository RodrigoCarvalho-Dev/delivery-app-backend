import { error } from '../../../../constants/error.constant';
import { prisma } from '../../../../database/prismaClient';
import { hash } from 'bcrypt';

interface ICreateDeliveryManUseCase {
  username: string;
  password: string;
}

interface ResponseCreateDeliveryManUseCase {
  id: string;
  username: string;
  password: string;
}

export class CreateDeliveryManUseCase {
  async execute({
    username,
    password,
  }: ICreateDeliveryManUseCase): Promise<ResponseCreateDeliveryManUseCase> {
    const existingDeliveryMan = await prisma.deliveryman.findUnique({
      where: {
        username: username,
      },
    });

    if (existingDeliveryMan) {
      return existingDeliveryMan;
    }

    // criptografar a senha

    const hashPassword = await hash(password, 10);

    // salvar o client

    const deliveryMan = await prisma.deliveryman.create({
      data: {
        username: username,
        password: hashPassword,
      },
    });

    if (!deliveryMan) {
      throw new Error(
        `${error.INTERNAL_ERROR_500.messege} | status : ${error.INTERNAL_ERROR_500.status}`
      );
    }

    return deliveryMan;
  }
}
