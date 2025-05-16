import { error } from "../../../constants/error.constant";
import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateClient {
    username : string;
    password : string;
}

interface ResponseAuthenticateClient {
    token : string;
}

export class AutheticateClientUseCase {

    async execute( { username, password } : IAuthenticateClient ) : Promise<ResponseAuthenticateClient> {
        // receber username, password 

        const client = await prisma.clients.findFirst({
            where : {
                username : username
            }
        })

        if (!client) {
            throw new Error(`${error.NOT_FOUND_ERROR_404.message} | status : ${error.NOT_FOUND_ERROR_404.status}`)
        } 

        // Verificar se username está cadastrado

        const passwordMatch = await compare(password, client.password);
        
        if ( !passwordMatch ) {
            throw new Error(`${error.PASSWORD_CONFLICT_MATCH_409.message} | status : ${error.PASSWORD_CONFLICT_MATCH_409.status}`)
        }

        // verificar se a senha corresponde ao username

        // gerar token 

        const token = sign({
            username
        }, String(process.env.SECRET_KEY), {
            subject : client.id,
            expiresIn : "1d"
        });

        return { token };
        
    }
}