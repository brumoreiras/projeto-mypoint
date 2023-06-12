import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Delete {
    name: string;
    email: string;
}

class DeleteUserService {
    async execute({ name, email }: Delete) {
        try {
            const deletedUser = await prisma.user.delete({
                where: {
                    name: name,
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
