import express, { Express } from 'express';
import { router } from './router';
import { clientRouter } from './client/client.routes';
import { deliveryManRouter } from './deliveryMan/deliveryMan.routes';
import { deliveryRouter } from './delivery/delivery.routes';

describe('Routes Test', () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use(router);
  });

  it('should use clientRouter', () => {
    router.use(clientRouter);

    expect(router).toBeInstanceOf(Function);
  });

  it('should use clientRouter', () => {
    router.use(deliveryManRouter);

    expect(router).toBeInstanceOf(Function);
  });

  it('should use clientRouter', () => {
    router.use(deliveryRouter);

    expect(router).toBeInstanceOf(Function);
  });
});
