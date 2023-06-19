import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Delete {
    email: string;
}

class DeleteUserService {
    async execute({ email }: Delete) {
        try {
            const deletedUser = await prisma.user.deleteMany({
                where: {
                    email: email
                },
            });
            return deletedUser;
        } catch (error) {
            // Trate o erro aqui ou repasse para o código que chama o método execute
            throw new Error('Erro ao excluir o usuário');
        } finally {
            await prisma.$disconnect();
        }
    }
}

export { DeleteUserService };
