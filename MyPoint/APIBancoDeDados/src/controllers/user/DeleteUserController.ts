import { Request, Response } from 'express';
import { DeleteUserService } from '../../services/user/DeleteUserService';


class UserController {
    async delete(req: Request, res: Response) {
        const { name, email } = req.body;
        const deleteUserService = new DeleteUserService();

        try {
            const deletedUser = await deleteUserService.execute({ name, email });
            return res.json(deletedUser);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao excluir o usuário' });
        }
    }
}

export { UserController };