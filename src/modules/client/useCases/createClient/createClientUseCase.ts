import { prisma } from "../../../../database/prismaClient";
import { error } from "../../../../constants/error.constant";
import { hash } from "bcrypt";
import { PrismaClient } from "@prisma/client";

interface ICreateClient {
    username : string;
    password : string;
}

interface ResponseCreateClient {
    id : string,
    username : string,
    password : string
}



export class CreateClientUseCase {


    async execute({ username, password } : ICreateClient) : Promise<ResponseCreateClient> {
        // validar se o usuário existe

        const existingClient = await prisma.clients.findFirst({
            where : {
                username : {
                    mode : "insensitive"
                }
            }
        });

        if ( existingClient ) {
            throw new Error(`${error.CONFLICT_ERROR_409.message} | status : ${error.CONFLICT_ERROR_409.status}`)
        }

        // criptografar a senha 

        const hashPassword = await hash(password, 10);

        // salvar o client

        const client = await prisma.clients.create({
            data : {
                username : username,
                password : hashPassword
            }
        });

        return client;

    }
}