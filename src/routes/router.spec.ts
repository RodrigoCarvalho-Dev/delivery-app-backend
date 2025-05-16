import express, { Express } from 'express';
import { router } from './router';
import { clientRouter } from './client/client.routes';

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
});
