import { config } from 'dotenv';
import express from 'express';
import { router } from './routes/router';
import { clientMiddleware } from './middleware/client.middleware';

config();

const app = express();
app.use(express.json());

app.use(router);

app.use(clientMiddleware);

app.listen(process.env.PORT ?? 3000);
