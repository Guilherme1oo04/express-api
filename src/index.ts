import express from 'express';
import {Router, Request, Response} from 'express'

const server = express();

const route = Router();

server.use(express.json());

route.get('/', (req: Request, res: Response) => {
    res.json({message: 'Deu bom!'});
})

server.use(route);

const port = 3455;

server.listen(port, () => {
    `Server rodando na porta ${port}`
});