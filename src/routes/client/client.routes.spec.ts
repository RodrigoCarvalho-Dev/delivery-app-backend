import request from 'supertest';
import express, { Express } from 'express';
import { clientRouter } from './client.routes';
import { success } from '../../constants/success.constant';

describe('Client Routes Test', () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use(clientRouter);
  });

  it('POST /client/register should return the client created as a reponse', async () => {
    const mockClient = {
      username: 'jonh doe',
      password: '123456',
    };

    const res = await request(app).post('/client/register').send(mockClient);

    expect(res.statusCode).toEqual(success.CREATED_STATUS_201.status);
    expect(res.body).toStrictEqual({
      message: success.CREATED_STATUS_201.message,
      status: success.CREATED_STATUS_201.status,
      client: {
        id: expect.any(String),
        username: mockClient.username,
        password: expect.any(String),
      },
    });
  });

  it('POST /client/login should return the token access to the client as a response', async () => {
    const mockClient = {
      username: 'jonh doe',
      password: '123456',
    };

    const res = await request(app).post('/client/login').send(mockClient);

    expect(res.statusCode).toEqual(success.CREATED_STATUS_201.status);
    expect(res.body).toStrictEqual({
      message: success.AUTHENTICATION_CREATED_STATUS_201.message,
      status: success.AUTHENTICATION_CREATED_STATUS_201.status,
      token: expect.any(String),
    });
  });
});
