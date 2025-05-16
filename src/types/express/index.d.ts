import { Request } from 'express';

declare module 'express' {
  interface Request {
    body: {
      username: string;
      password : string;  
    };
  }
}