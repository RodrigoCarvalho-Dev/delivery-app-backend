import { Router } from 'express';

import { CreateDeliveryManController } from '../../modules/deliveryman/useCases/createDeliveryMan/createDeliveryManController';

const deliveryManRouter = Router();

const createDeliveryManController = new CreateDeliveryManController();

deliveryManRouter.post('/deliveryMan/register', createDeliveryManController.handle);

export { deliveryManRouter };
