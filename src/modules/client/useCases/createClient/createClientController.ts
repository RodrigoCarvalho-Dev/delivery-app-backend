import { Request, Response } from "express";
import { CreateClientUseCase } from "./createClientUseCase"
import { success } from "../../../../constants/success.constant";

export class CreateClientController {

    async handle( req : Request, res : Response ) : Promise<void> {

        const createClientUseCase = new CreateClientUseCase();

        const { username, password } = req.body;

        const client = await createClientUseCase.execute({
            username : username,
            password : password
        });

        res.status(success.OK_STATUS_200.status).json({
            message : success.OK_STATUS_200.message,
            status : success.OK_STATUS_200.status,
            client : client
        })

    }
}