import { prisma } from '../../../../database/prismaClient';

interface IUpdatedDeliveryManUseCase {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdatedDeliveryManUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdatedDeliveryManUseCase) {
    const result = await prisma.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman: id_deliveryman,
      },
    });

    return result;
  }
}
