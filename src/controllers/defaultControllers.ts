import { Request, Response } from 'express';

export const rootReponse = (req: Request, res: Response): void => {
  res.send('Executando a API REST');
}

export const pingReponse = (req: Request, res: Response): void => {
  res.send('Pong');
}
