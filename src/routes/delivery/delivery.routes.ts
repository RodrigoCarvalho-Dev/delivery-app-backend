import { Router } from 'express';
import { CreateDeliveryController } from '../../modules/deliveries/useCases/createDelivery/createDeliveryController';
import { ensureAuthenticateClient } from '../../middleware/ensureAuthenticateClient';
import { FindAllWithoutEndDateController } from '../../modules/deliveries/useCases/findAllWithoutEndDate/findAllWithoutEndDateController';

const deliveryRouter = Router();

const createDeliveryController = new CreateDeliveryController();

deliveryRouter.post('/delivery/create', ensureAuthenticateClient, createDeliveryController.handle);

const findAllWithoutEndDateController = new FindAllWithoutEndDateController();

deliveryRouter.get('/delivery/search', findAllWithoutEndDateController.handle);

export { deliveryRouter };
