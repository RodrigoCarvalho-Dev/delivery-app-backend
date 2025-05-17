import express, { Express } from 'express';
import { deliveryRouter } from './delivery.routes';
import request from 'supertest';
import { success } from '../../constants/success.constant';

describe('Delivery Routes Test', () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use(deliveryRouter);
  });

  it('POST /delivery/create should be return the delivery as a response', async () => {
    const mockDelivery = {
      item_name: 'hamburguer',
      id_client: 'dda7f702-5b68-4025-b1be-dcb52e0f2a09',
    };

    const res = await request(app).post('/delivery/create').send(mockDelivery);

    expect(res.statusCode).toEqual(success.CREATED_STATUS_201.status);
    expect(res.body).toStrictEqual({
      message: success.CREATED_STATUS_201.message,
      status: success.CREATED_STATUS_201.status,
      delivery: {
        item_name: mockDelivery.item_name,
        id_client: mockDelivery.id_client,
        id: expect.any(String),
        created_at: expect.any(String),
        end_at: expect.any(String),
      },
    });
  });
});
