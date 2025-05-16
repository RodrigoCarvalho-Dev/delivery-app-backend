import { config } from "dotenv";
import express from "express";
import { router } from "./routes/router";

config();

const app = express();
app.use(express.json())

app.use(router);

app.listen( process.env.PORT ?? 3000, () => {
    console.log("rodando na porta http://localhost:3000")
});

