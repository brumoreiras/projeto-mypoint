import prismaClient from '../../prisma';

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        const user = await prismaClient.user.findFirst({
            where:{
                email:email,
                password:password
                
            }
        });
        if(!user){
            throw new Error("E-mail Invalido")
        }
        if(user.password !== password){
            throw new Error("Senha invalido")
        }
        return({
            nomeUsuario:user.name
        });
    }
}
export {AuthUserService};