import { Router } from 'express';
import { clientRouter } from './client/client.routes';
import { deliveryManRouter } from './deliveryMan/deliveryMan.routes';
import { deliveryRouter } from './delivery/delivery.routes';

const router = Router();

router.use(clientRouter);
router.use(deliveryManRouter);
router.use(deliveryRouter);

export { router };
