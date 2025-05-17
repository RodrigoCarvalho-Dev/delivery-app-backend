import { prisma } from '../../../../database/prismaClient';

interface ICreateDeliveryUseCase {
  item_name: string;
  id_client: string;
}

interface ResponseCreateDeliveryUseCase {
  item_name: string;
  id_client: string;
  id: string;
  id_deliveryman: string | null;
  created_at: Date;
  end_at: Date | null;
}

export class CreateDeliveryUseCase {
  async execute({
    item_name,
    id_client,
  }: ICreateDeliveryUseCase): Promise<ResponseCreateDeliveryUseCase> {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name: item_name,
        id_client: id_client,
      },
    });

    return delivery;
  }
}
