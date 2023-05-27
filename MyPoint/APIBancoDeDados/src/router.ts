import { Router, Request, Response } from 'express';
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserController } from './controllers/user/CreateUserController';

const router = Router();

router.get('/', (req: Request, res: Response) => { res.send("Seja bem vindo")})
router.post('/MyPoint/userinsert', new CreateUserController().handle);
router.post('/MyPoint/login', new AuthUserController().handle);

export { router };