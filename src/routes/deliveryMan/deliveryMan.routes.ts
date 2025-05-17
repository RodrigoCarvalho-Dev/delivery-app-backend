import { Router } from 'express';

import { CreateDeliveryManController } from '../../modules/deliveryman/useCases/createDeliveryMan/createDeliveryManController';
import { AuthenticateClientController } from '../../modules/auth/authenticateClient/authenticateClientController';

const deliveryManRouter = Router();

const createDeliveryManController = new CreateDeliveryManController();

deliveryManRouter.post('/deliveryMan/register', createDeliveryManController.handle);

const authenticateDeliveryManController = new AuthenticateClientController();

deliveryManRouter.post('/deliveryMan/login', authenticateDeliveryManController.handle);

export { deliveryManRouter };
