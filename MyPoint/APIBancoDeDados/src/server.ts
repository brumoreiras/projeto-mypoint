import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { router } from './router';


const app = express();
app.use(express.json());
const port = process.env.PORT || 5854;

app.use(cors({
    origin: '*'
}));

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal Error'
    });
});



app.listen(port, () => {
    console.log(`Servidor escutando na porta http://localhost:${port}`);
});

