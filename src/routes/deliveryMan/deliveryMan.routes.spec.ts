import request from 'supertest';
import express, { Express } from 'express';
import { success } from '../../constants/success.constant';
import { deliveryManRouter } from './deliveryMan.routes';

describe('Client Routes Test', () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use(deliveryManRouter);
  });

  it('POST /deliveryMan/register should return the client created as a reponse', async () => {
    const mockClient = {
      username: 'jonh doe',
      password: '123456',
    };

    const res = await request(app).post('/deliveryMan/register').send(mockClient);

    expect(res.statusCode).toEqual(success.CREATED_STATUS_201.status);
    expect(res.body).toStrictEqual({
      message: success.CREATED_STATUS_201.message,
      status: success.CREATED_STATUS_201.status,
      deliveryMan: {
        id: expect.any(String),
        username: mockClient.username,
        password: expect.any(String),
      },
    });
  });
});
