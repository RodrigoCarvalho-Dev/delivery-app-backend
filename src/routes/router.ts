import { Router } from 'express';
import { clientRouter } from './client/client.routes';

const router = Router();

router.use(clientRouter);

export { router };
