import { prisma } from '../../../../database/prismaClient';
import { hash } from 'bcrypt';

interface ICreateClient {
  username: string;
  password: string;
}

interface ResponseCreateClient {
  id: string;
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClient): Promise<ResponseCreateClient> {
    // validar se o usuário existe -> depois

    const existingClient = await prisma.clients.findUnique({
      where: { username },
    });

    if (existingClient) {
      return existingClient;
    }

    // criptografar a senha

    const hashPassword = await hash(password, 10);

    // salvar o client

    const client = await prisma.clients.create({
      data: {
        username: username,
        password: hashPassword,
      },
    });

    return client;
  }
}
