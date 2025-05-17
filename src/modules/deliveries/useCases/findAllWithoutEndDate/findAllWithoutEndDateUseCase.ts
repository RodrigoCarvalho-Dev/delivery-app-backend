import { error } from '../../../../constants/error.constant';
import { prisma } from '../../../../database/prismaClient';

export class FindAllWithoutEndDateUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
        id_deliveryman: null,
      },
    });

    if (!deliveries) {
      throw new Error(error.INTERNAL_ERROR_500.messege);
    }

    return deliveries;
  }
}
