import { Router } from 'express';
import { CreateClientController } from '../../modules/client/useCases/createClient/createClientController';
import { AuthenticateClientController } from '../../modules/account/authenticateClient/authenticateClientController';

const clientRouter = Router();

const createClientController = new CreateClientController();

clientRouter.post('/client/register', createClientController.handle);

const authenticateClientController = new AuthenticateClientController();

clientRouter.post('/client/login', authenticateClientController.handle);

export { clientRouter };
