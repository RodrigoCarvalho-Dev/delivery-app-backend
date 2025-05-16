import { Router } from 'express';
import { clientRouter } from './client/client.routes';
import { deliveryManRouter } from './deliveryMan/deliveryMan.routes';

const router = Router();

router.use(clientRouter);
router.use(deliveryManRouter);

export { router };
